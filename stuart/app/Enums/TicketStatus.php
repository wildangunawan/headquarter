<?php declare(strict_types=1);

namespace App\Enums;

use BenSampo\Enum\Enum;

final class TicketStatus extends Enum
{
    const PENDING = 0;
    const RESOLVED = 1;
}
