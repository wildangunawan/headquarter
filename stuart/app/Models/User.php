<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Illuminate\Notifications\Notifiable;
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    public $incrementing = false;

    /**
     * The attributes that are mass assignable.
     *
     * @var array<int, string>
     */
    protected $fillable = [
        'id',
        'name',
        'is_banned',
        'email',
        'atc_rating_id',
        'atc_rating_name',
        'pilot_rating_id',
        'pilot_rating_name',
        'region_name',
        'region_code',
        'division_name',
        'division_code',
        'subdivision_name',
        'subdivision_code',
        'email_subscription',
    ];

    /**
     * The attributes that should be hidden for serialization.
     *
     * @var array<int, string>
     */
    protected $hidden = [
        'remember_token',
    ];

    public function createAPIToken(): string
    {
        return $this->createToken('api')->plainTextToken;
    }
}
