<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Region extends Model
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
    ];

    public function divisions(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Division::class, 'region_code', 'code');
    }

    public function subdivisions(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Subdivision::class, 'region_code', 'code');
    }

    public function tickets(): \Illuminate\Database\Eloquent\Relations\HasMany
    {
        return $this->hasMany(Ticket::class, 'region_code', 'code');
    }
}
