<?php

namespace App\Http\Controllers\API\v1\Housekeeping;

use App\Http\Controllers\Controller;
use App\Http\Requests\Subdivision\StoreRequest;
use App\Http\Requests\Subdivision\UpdateRequest;
use App\Http\Resources\SubdivisionResource;
use App\Models\Subdivision;
use App\Services\SubdivisionService;
use Illuminate\Support\Facades\DB;
use OpenApi\Annotations as OA;

class SubdivisionController extends Controller
{
    protected SubdivisionService $service;

    public function __construct(SubdivisionService $service)
    {
        $this->service = $service;
    }

    /**
     * @OA\Get(
     *      path="/api/v1/housekeeping/subdivision",
     *      tags={"[Housekeeping] Subdivision"},
     *      summary="API to get all subdivisions registered in the HQ system",
     *      operationId="subdivision-index",
     *      security={{"sanctum":{}}},
     *      @OA\Response(
     *          response=200,
     *          description="Return subdivisions data",
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
            SubdivisionResource::collection(Subdivision::with('region', 'division')->get())
        );
    }

    /**
     * @OA\Post(
     *      path="/api/v1/housekeeping/subdivision",
     *      tags={"[Housekeeping] Subdivision"},
     *      summary="API to create a new to be registered in the HQ system",
     *      operationId="subdivision-store",
     *      security={{"sanctum":{}}},
     *      @OA\RequestBody(
     *          @OA\MediaType(
     *              mediaType="multipart/form-data",
     *              @OA\Schema(
     *                  required={
     *                      "name",
     *                      "code",
     *                      "region",
     *                      "division",
     *                  },
     *                  type="object",
     *                  @OA\Property(property="name", type="string", default="Iran"),
     *                  @OA\Property(property="code", type="string", default="IR"),
     *                  @OA\Property(property="email", type="string", default="admin@vatir.ir"),
     *                  @OA\Property(property="welcome_msg", type="string", default="Lorem ipsum dolor sit amet"),
     *                  @OA\Property(property="website", type="string", default="https://www.vatir.ir/"),
     *                  @OA\Property(property="logo", type="string", default="https://www.vatir.ir/img/logonew.png"),
     *                  @OA\Property(property="discord_webhook_url", type="string", default="https://discord.com/"),
     *                  @OA\Property(property="region", type="string", default="EMEA"),
     *                  @OA\Property(property="division", type="string", default="MENA"),
     *              ),
     *          ),
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Subdivision created and returning new data.",
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
            $subdivision = $this->service->create($request->validated());

            DB::commit();
            return $this->respondSuccess(new SubdivisionResource($subdivision));
        } catch (\Throwable $th) {
            DB::rollBack();
            return $this->respondError($th);
        }
    }

    /**
     * @OA\Get(
     *      path="/api/v1/housekeeping/subdivision/{subdivision}",
     *      tags={"[Housekeeping] Subdivision"},
     *      summary="API to get a single division data",
     *      operationId="subdivision-show",
     *      security={{"sanctum":{}}},
     *      @OA\Parameter(
     *          name="subdivision",
     *          in="path",
     *          description="Subdivision's code",
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
    public function show(Subdivision $subdivision)
    {
        return $this->respondSuccess(new SubdivisionResource($subdivision));
    }

    /**
     * @OA\Post(
     *      path="/api/v1/housekeeping/subdivision/{subdivision}",
     *      tags={"[Housekeeping] Subdivision"},
     *      summary="API to update currently registered division in the HQ system",
     *      operationId="subdivision-update",
     *      security={{"sanctum":{}}},
     *      @OA\Parameter(
     *          name="subdivision",
     *          in="path",
     *          description="Subdivision's code",
     *          required=true,
     *      ),
     *      @OA\RequestBody(
     *          @OA\MediaType(
     *              mediaType="multipart/form-data",
     *              @OA\Schema(
     *                  required={
     *                      "name",
     *                      "code",
     *                      "region",
     *                      "division",
     *                  },
     *                  type="object",
     *                  @OA\Property(property="name", type="string", default="Iran"),
     *                  @OA\Property(property="code", type="string", default="IR"),
     *                  @OA\Property(property="email", type="string", default="admin@vatir.ir"),
     *                  @OA\Property(property="welcome_msg", type="string", default="Lorem ipsum dolor sit amet"),
     *                  @OA\Property(property="website", type="string", default="https://www.vatir.ir/"),
     *                  @OA\Property(property="logo", type="string", default="https://www.vatir.ir/img/logonew.png"),
     *                  @OA\Property(property="discord_webhook_url", type="string", default="https://discord.com/"),
     *                  @OA\Property(property="region", type="string", default="EMEA"),
     *                  @OA\Property(property="division", type="string", default="MENA"),
     *              ),
     *          ),
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Subdivision created and returning new data.",
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
    public function update(UpdateRequest $request, Subdivision $subdivision)
    {
        DB::beginTransaction();

        try {
            $subdivision = $this->service->update($subdivision, $request->validated());

            DB::commit();
            return $this->respondSuccess(new SubdivisionResource($subdivision));
        } catch (\Throwable $th) {
            DB::rollBack();
            return $this->respondError($th);
        }
    }

    /**
     * @OA\Delete(
     *      path="/api/v1/housekeeping/subdivision/{subdivision}",
     *      tags={"[Housekeeping] Subdivision"},
     *      summary="API to delete currently registered division in the HQ system",
     *      operationId="subdivision-destroy",
     *      security={{"sanctum":{}}},
     *      @OA\Parameter(
     *          name="subdivision",
     *          in="path",
     *          description="Subdivision's code",
     *          required=true,
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Subdivision deleted successfully.",
     *      ),
     *      @OA\Response(
     *          response=500,
     *          description="Internal server error.",
     *      ),
     * )
     */
    public function destroy(Subdivision $subdivision)
    {
        DB::beginTransaction();

        try {
            $this->service->destroy($subdivision);

            DB::commit();
            return $this->respondSuccessWithMessage('Subdivision deleted successfully.');
        } catch (\Throwable $th) {
            DB::rollBack();
            return $this->respondError($th);
        }
    }
}
