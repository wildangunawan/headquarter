<?php

use App\Enums\TeamType;
use App\Models\Division;
use App\Models\Region;
use App\Models\Subdivision;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\Validator;

if (!function_exists('createLog')) {

    /**
     * @param Throwable $err
     * @param string $level
     * @return void
     */
    function createLog(Throwable $err, string $level = 'error'): void
    {
        if (config('app.env') !== 'testing') {
            $request = Request();
            $context = [
                'user' => auth()->user() ?? 'Guest',
                'request' => [
                    'ip' => request()->ip(),
                    'method' => $request->method(),
                    'path' => $request->fullUrl(),
                    'payload' => $request->except('password', 'password_confirmation'),
                ],
                'exception' => [
                    'class' => get_class($err),
                    'code' => $err->getCode(),
                    'file' => $err->getFile(),
                    'line' => $err->getLine(),
                ]
            ];

            switch ($level) {
                case 'info':
                    Log::info($err->getMessage(), $context);
                    break;
                case 'warning':
                    Log::warning($err->getMessage(), $context);
                    break;
                case 'error':
                    Log::error($err->getMessage(), $context);
                    break;
                default:
                    break;
            }

        }
    }

    function createLogValidator(Validator $validator): void
    {
        if (config('app.env') !== 'testing') {
            $request = Request();
            Log::warning("Validation error", [
                'user' => auth()->user() ?? 'Guest',
                'request' => [
                    'ip' => request()->ip(),
                    'method' => $request->method(),
                    'path' => $request->fullUrl(),
                    'payload' => $request->all(),
                ],
                'exception' => [
                    'errors' => $validator->errors(),
                ],
            ]);
        }
    }
}

if (!function_exists('getTeamCodes')) {
    function getTeamCodes(int $type, string $code): array
    {
        switch ($type) {
            case TeamType::SUBDIVISION:
                $subdivision = Subdivision::where('code', $code)->first();
                $result = [
                    'region_code' => $subdivision->region_code,
                    'division_code' => $subdivision->division_code,
                    'subdivision_code' => $subdivision->code,
                ];

                break;
            case TeamType::DIVISION:
                $division = Division::where('code', $code)->first();
                $result = [
                    'region_code' => $division->region_code,
                    'division_code' => $division->code,
                    'subdivision_code' => null,
                ];
                break;
            case TeamType::REGION:
                $region = Region::where('code', $code)->first();
                $result = [
                    'region_code' => $region->code,
                    'division_code' => null,
                    'subdivision_code' => null,
                ];
                break;
            default:
                $result = [
                    'region_code' => null,
                    'division_code' => null,
                    'subdivision_code' => null,
                ];
                break;
        }

        return $result;
    }
}

if (!function_exists('canStaffDo')) {
    function canStaffDo(\App\Models\User $user, $resource, int $max_level = 5): bool
    {
        foreach ($user->staffs as $position) {
            $type = match (0) {
                $position->subdivision_code !== null => TeamType::SUBDIVISION,
                $position->division_code !== null => TeamType::DIVISION,
                default => TeamType::REGION,
            };

            $a_staff_at = match ($type) {
                TeamType::SUBDIVISION => $position->subdivision_code,
                TeamType::DIVISION => $position->division_code,
                default => $position->region_code,
            };

            if (
                // Check if user has the ability to edit the resource
                $position->level >= $max_level &&

                // Check if user is staff at the resource's team
                (
                    ($resource->subdivision_code === $a_staff_at && $type === TeamType::SUBDIVISION) ||
                    ($resource->division_code === $a_staff_at && $type === TeamType::DIVISION) ||
                    ($resource->region_code === $a_staff_at && $type === TeamType::REGION)
                )
            ) return true;
        }

        return false;
    }
}
