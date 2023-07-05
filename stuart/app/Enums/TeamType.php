<?php declare(strict_types=1);

namespace App\Enums;

use BenSampo\Enum\Enum;

final class TeamType extends Enum
{
    const REGION = 1;
    const DIVISION = 2;
    const SUBDIVISION = 3;
}
