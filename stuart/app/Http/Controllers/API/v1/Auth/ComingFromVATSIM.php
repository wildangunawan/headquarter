<?php

namespace App\Http\Controllers\API\v1\Auth;

use App\Http\Controllers\Controller;
use App\Http\Resources\AuthUserResource;
use App\Services\UserService;
use Illuminate\Support\Facades\DB;
use Laravel\Socialite\Facades\Socialite;
use OpenApi\Annotations as OA;

class ComingFromVATSIM extends Controller
{
    protected UserService $service;

    public function __construct(UserService $service)
    {
        $this->service = $service;
    }

    /**
     * @OA\Get(
     *      path="/api/v1/auth/callback",
     *      tags={"Login"},
     *      summary="API to log user in after redirection from VATSIM Connect",
     *      operationId="login-callback",
     *      @OA\Parameter(
     *          name="code",
     *          in="query",
     *          description="Code from VATSIM Connect",
     *          required=true,
     *          @OA\Schema(
     *             type="string",
     *          ),
     *      ),
     *      @OA\Response(
     *          response=200,
     *          description="Login succeed and returning user data.",
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
    public function __invoke()
    {
        DB::beginTransaction();

        try {
            $user = Socialite::driver('vatsim')->stateless()->user()->user['data'];
            $user = $this->service->login($user);

            DB::commit();
            return $this->respondSuccess(new AuthUserResource($user));
        } catch (\Throwable $th) {
            DB::rollBack();
            return $this->respondError($th);
        }
    }
}
