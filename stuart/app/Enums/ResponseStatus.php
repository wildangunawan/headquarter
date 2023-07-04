<?php declare(strict_types=1);

namespace App\Enums;

use BenSampo\Enum\Enum;

final class ResponseStatus extends Enum
{
    const FAIL = 0;
    const SUCCESS = 1;
}
