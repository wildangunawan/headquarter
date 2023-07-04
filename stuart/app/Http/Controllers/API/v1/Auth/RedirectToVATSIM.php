<?php

namespace App\Http\Controllers\API\v1\Auth;

use App\Http\Controllers\Controller;
use Laravel\Socialite\Facades\Socialite;
use OpenApi\Annotations as OA;

class RedirectToVATSIM extends Controller
{
    /**
     * @OA\Get(
     *      path="/api/v1/auth/redirect",
     *      tags={"Login"},
     *      summary="API to redirect user to VATSIM Connect to login themself",
     *      description="Only use this API in the browser.",
     *      operationId="login-redirect",
     *      @OA\Response(
     *          response=200,
     *          description="User will be redirected to VATSIM Connect.",
     *      ),
     *      @OA\Response(
     *          response=500,
     *          description="Internal server error.",
     *      ),
     * )
     */
    public function __invoke()
    {
        return Socialite::driver('vatsim')
            ->scopes(['full_name', 'email', 'vatsim_details'])
            ->stateless()
            ->redirect();
    }
}
