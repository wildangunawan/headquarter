<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Division extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'name',
        'code',
        'website',
        'region_code',
    ];

    public function getRouteKeyName(): string
    {
        return 'code';
    }

    public function region(): \Illuminate\Database\Eloquent\Relations\BelongsTo
    {
        return $this->belongsTo(Region::class, 'region_code', 'code');
    }

    public function subdivisions(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Subdivision::class, 'division_code', 'code');
    }

    public function tickets(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Ticket::class, 'division_code', 'code');
    }
}
