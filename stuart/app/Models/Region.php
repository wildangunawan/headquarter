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

    // Relation to divisions, one to many
    public function divisions()
    {
        return $this->hasMany(Division::class, 'region_code', 'code');
    }

    // Relation to subdivisions, one to many
    public function subdivisions()
    {
        return $this->hasMany(Subdivision::class, 'region_code', 'code');
    }
}
