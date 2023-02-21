<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Subdivision extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'website',
        'email',
        'image_link',
        'region_code',
        'division_code',
    ];

    // Relation to region, many to one
    public function region()
    {
        return $this->belongsTo(Region::class, 'region_code', 'code');
    }

    // Relation to division, many to one
    public function division()
    {
        return $this->belongsTo(Division::class, 'division_code', 'code');
    }
}
