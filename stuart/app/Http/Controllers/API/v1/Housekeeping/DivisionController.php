<?php

namespace App\Http\Controllers\API\v1\Housekeeping;

use App\Http\Controllers\Controller;
use App\Http\Requests\Division\StoreRequest;
use App\Http\Requests\Division\UpdateRequest;
use App\Http\Resources\DivisionResource;
use App\Models\Division;
use App\Services\DivisionService;
use Illuminate\Support\Facades\DB;
use OpenApi\Annotations as OA;

class DivisionController extends Controller
{
    protected DivisionService $service;

    public function __construct(DivisionService $service)
    {
        $this->service = $service;
    }

    /**
     * @OA\Get(
     *      path="/api/v1/housekeeping/division",
     *      tags={"[Housekeeping] Division"},
     *      summary="API to get all divisions registered in the HQ system",
     *      operationId="division-index",
     *      security={{"sanctum":{}}},
     *      @OA\Response(
     *          response=200,
     *          description="Return divisions data",
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
            DivisionResource::collection(Division::with('region')->withCount('subdivisions')->get())
        );
    }

    /**
     * @OA\Post(
     *      path="/api/v1/housekeeping/division",
     *      tags={"[Housekeeping] Division"},
     *      summary="API to create a new to be registered in the HQ system",
     *      operationId="division-store",
     *      security={{"sanctum":{}}},
     *      @OA\RequestBody(
     *          @OA\MediaType(
     *              mediaType="application/json",
     *              encoding={
     *                  "name",
     *                  "code",
     *                  "website",
     *                  "region",
     *              },
     *              @OA\Schema(
     *                  type="object",
     *                  @OA\Property(property="name", type="string", default="Europe Division"),
     *                  @OA\Property(property="code", type="string", default="EUD"),
     *                  @OA\Property(property="website", type="string", default="https://www.vateud.net/"),
     *                  @OA\Property(property="region", type="string", default="EMEA"),
     *              ),
     *          ),
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Division created and returning new data.",
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
            $division = $this->service->create($request->validated());

            DB::commit();
            return $this->respondSuccess(new DivisionResource($division));
        } catch (\Throwable $th) {
            DB::rollBack();
            return $this->respondError($th);
        }
    }

    /**
     * @OA\Get(
     *      path="/api/v1/housekeeping/division/{division}",
     *      tags={"[Housekeeping] Division"},
     *      summary="API to get a single division data",
     *      operationId="division-show",
     *      security={{"sanctum":{}}},
     *      @OA\Parameter(
     *          name="division",
     *          in="path",
     *          description="Division's code",
     *          required=true,
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Return division data",
     *      ),
     *      @OA\Response(
     *          response=500,
     *          description="Internal server error.",
     *      ),
     * )
     */
    public function show(Division $division)
    {
        return $this->respondSuccess(new DivisionResource($division));
    }

    /**
     * @OA\Put(
     *      path="/api/v1/housekeeping/division/{division}",
     *      tags={"[Housekeeping] Division"},
     *      summary="API to update currently registered division in the HQ system",
     *      operationId="division-update",
     *      security={{"sanctum":{}}},
     *      @OA\Parameter(
     *          name="division",
     *          in="path",
     *          description="Division's code",
     *          required=true,
     *      ),
     *      @OA\RequestBody(
     *          @OA\MediaType(
     *              mediaType="application/json",
     *              encoding={
     *                  "name",
     *                  "code",
     *                  "website",
     *                  "region",
     *              },
     *              @OA\Schema(
     *                  type="object",
     *                  @OA\Property(property="name", type="string", default="Europe Division"),
     *                  @OA\Property(property="code", type="string", default="EUD"),
     *                  @OA\Property(property="website", type="string", default="https://www.vateud.net/"),
     *                  @OA\Property(property="region", type="string", default="EMEA"),
     *              ),
     *          ),
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Division created and returning new data.",
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
    public function update(UpdateRequest $request, Division $division)
    {
        DB::beginTransaction();

        try {
            $division = $this->service->update($division, $request->validated());

            DB::commit();
            return $this->respondSuccess(new DivisionResource($division));
        } catch (\Throwable $th) {
            DB::rollBack();
            return $this->respondError($th);
        }
    }

    /**
     * @OA\Delete(
     *      path="/api/v1/housekeeping/division/{division}",
     *      tags={"[Housekeeping] Division"},
     *      summary="API to delete currently registered division in the HQ system",
     *      operationId="division-destroy",
     *      security={{"sanctum":{}}},
     *      @OA\Parameter(
     *          name="division",
     *          in="path",
     *          description="Division's code",
     *          required=true,
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Division deleted successfully.",
     *      ),
     *      @OA\Response(
     *          response=500,
     *          description="Internal server error.",
     *      ),
     * )
     */
    public function destroy(Division $division)
    {
        DB::beginTransaction();

        try {
            $this->service->destroy($division);

            DB::commit();
            return $this->respondSuccessWithMessage('Division deleted successfully.');
        } catch (\Throwable $th) {
            DB::rollBack();
            return $this->respondError($th);
        }
    }
}
