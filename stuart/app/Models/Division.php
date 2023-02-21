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
        'created_at',
        'updated_at',
    ];

    // Relation to region, many to one
    public function region()
    {
        return $this->belongsTo(Region::class, 'region_code', 'code');
    }

    // Relation to subdivisions, one to many
    public function subdivisions()
    {
        return $this->hasMany(Subdivision::class, 'division_code', 'code');
    }
}
