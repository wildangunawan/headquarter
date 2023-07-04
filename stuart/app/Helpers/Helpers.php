<?php

use Illuminate\Support\Facades\Log;
use Illuminate\Support\Str;
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
