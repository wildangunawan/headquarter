<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Ticket extends Model
{
    use HasFactory;

    protected $fillable = [
        'subject', 'content', 'author_id', 'assigned_to', 'status',
        'closed_by', 'region_code', 'division_code', 'subdivision_code'
    ];

    public function author(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(User::class, 'author_id', 'id');
    }

    public function closedBy(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(User::class, 'closed_by', 'id');
    }

    public function comments(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(TicketComment::class);
    }

    public function region(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Region::class, 'region_code', 'code');
    }

    public function division(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Division::class, 'division_code', 'code');
    }

    public function subdivision(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Subdivision::class, 'subdivision_code', 'code');
    }

    public function assignedToStaff(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(User::class, 'assigned_to', 'id');
    }

    public function assignedToTeam(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        // Return subdivision if subdivision exists
        if ($this->subdivision()->exists()) return $this->subdivision();

        // Return division if subdivision does not exist
        if ($this->division()->exists()) return $this->division();

        // Return region if division does not exist
        return $this->region();
    }
}
