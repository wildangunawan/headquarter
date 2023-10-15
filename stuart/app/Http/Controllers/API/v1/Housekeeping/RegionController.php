<?php

namespace App\Http\Controllers\API\v1\Housekeeping;

use App\Http\Controllers\Controller;
use App\Http\Requests\Region\StoreRequest;
use App\Http\Requests\Region\UpdateRequest;
use App\Http\Resources\RegionResource;
use App\Models\Region;
use App\Services\RegionService;
use Illuminate\Support\Facades\DB;
use OpenApi\Annotations as OA;

class RegionController extends Controller
{
    protected RegionService $service;

    public function __construct(RegionService $service)
    {
        $this->service = $service;
    }

    /**
     * @OA\Get(
     *      path="/api/v1/housekeeping/region",
     *      tags={"[Housekeeping] Region"},
     *      summary="API to get all regions registered in the HQ system",
     *      operationId="region-index",
     *      security={{"sanctum":{}}},
     *      @OA\Response(
     *          response=200,
     *          description="Return regions data",
     *      ),
     *      @OA\Response(
     *          response=500,
     *          description="Internal server error.",
     *      ),
     * )
     */
    public function index()
    {
        return $this->respondSuccess(
            RegionResource::collection(Region::withCount('divisions', 'subdivisions')->get())
        );
    }

    /**
     * @OA\Post(
     *      path="/api/v1/housekeeping/region",
     *      tags={"[Housekeeping] Region"},
     *      summary="API to create a new to be registered in the HQ system",
     *      operationId="region-store",
     *      security={{"sanctum":{}}},
     *      @OA\RequestBody(
     *          @OA\MediaType(
     *              mediaType="application/json",
     *              encoding={
     *                  "name",
     *                  "code",
     *                  "website",
     *              },
     *              @OA\Schema(
     *                  type="object",
     *                  @OA\Property(property="name", type="string", default="Europe, Middle East and Africa"),
     *                  @OA\Property(property="code", type="string", default="EMEA"),
     *                  @OA\Property(property="website", type="string", default="https://www.facebook.com/vatsimemea/"),
     *              ),
     *          ),
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Region created and returning new data.",
     *      ),
     *      @OA\Response(
     *          response=422,
     *          description="Validation errors.",
     *      ),
     *      @OA\Response(
     *          response=400,
     *          description="Bad request.",
     *      ),
     *      @OA\Response(
     *          response=500,
     *          description="Internal server error.",
     *      ),
     * )
     */
    public function store(StoreRequest $request)
    {
        DB::beginTransaction();

        try {
            $region = $this->service->create($request->validated());

            DB::commit();
            return $this->respondSuccess(new RegionResource($region));
        } catch (\Throwable $th) {
            DB::rollBack();
            return $this->respondError($th);
        }
    }

    /**
     * @OA\Get(
     *      path="/api/v1/housekeeping/region/{region}",
     *      tags={"[Housekeeping] Region"},
     *      summary="API to get a single region data",
     *      operationId="region-show",
     *      security={{"sanctum":{}}},
     *      @OA\Parameter(
     *          name="region",
     *          in="path",
     *          description="Region's code",
     *          required=true,
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Return region data",
     *      ),
     *      @OA\Response(
     *          response=500,
     *          description="Internal server error.",
     *      ),
     * )
     */
    public function show(Region $region)
    {
        return $this->respondSuccess(new RegionResource($region));
    }

    /**
     * @OA\Put(
     *      path="/api/v1/housekeeping/region/{region}",
     *      tags={"[Housekeeping] Region"},
     *      summary="API to update currently registered region in the HQ system",
     *      operationId="region-update",
     *      security={{"sanctum":{}}},
     *      @OA\Parameter(
     *          name="region",
     *          in="path",
     *          description="Region's code",
     *          required=true,
     *      ),
     *      @OA\RequestBody(
     *          @OA\MediaType(
     *              mediaType="application/json",
     *              encoding={
     *                  "name",
     *                  "code",
     *                  "website",
     *              },
     *              @OA\Schema(
     *                  type="object",
     *                  @OA\Property(property="name", type="string", default="Europe, Middle East and Africa"),
     *                  @OA\Property(property="code", type="string", default="EMEA"),
     *                  @OA\Property(property="website", type="string", default="https://www.facebook.com/vatsimemea/"),
     *              ),
     *          ),
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Region created and returning new data.",
     *      ),
     *      @OA\Response(
     *          response=422,
     *          description="Validation errors.",
     *      ),
     *      @OA\Response(
     *          response=400,
     *          description="Bad request.",
     *      ),
     *      @OA\Response(
     *          response=500,
     *          description="Internal server error.",
     *      ),
     * )
     */
    public function update(UpdateRequest $request, Region $region)
    {
        DB::beginTransaction();

        try {
            $region = $this->service->update($region, $request->validated());

            DB::commit();
            return $this->respondSuccess(new RegionResource($region));
        } catch (\Throwable $th) {
            DB::rollBack();
            return $this->respondError($th);
        }
    }

    /**
     * @OA\Delete(
     *      path="/api/v1/housekeeping/region/{region}",
     *      tags={"[Housekeeping] Region"},
     *      summary="API to delete currently registered region in the HQ system",
     *      operationId="region-destroy",
     *      security={{"sanctum":{}}},
     *      @OA\Parameter(
     *          name="region",
     *          in="path",
     *          description="Region's code",
     *          required=true,
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Region deleted successfully.",
     *      ),
     *      @OA\Response(
     *          response=500,
     *          description="Internal server error.",
     *      ),
     * )
     */
    public function destroy(Region $region)
    {
        DB::beginTransaction();

        try {
            $this->service->destroy($region);

            DB::commit();
            return $this->respondSuccessWithMessage('Region deleted successfully.');
        } catch (\Throwable $th) {
            DB::rollBack();
            return $this->respondError($th);
        }
    }
}
