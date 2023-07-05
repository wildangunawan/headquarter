<?php

namespace App\Services;

use App\Models\User;

class UserService
{
    public function login(array $params): User
    {
        // Update user's data or create a new user
        $user = User::updateOrCreate(
            ['id' => $params['cid']],
            [
                'name' => $params['personal']['name_full'],
                'email' => $params['personal']['email'],
                'is_admin' => in_array($params['cid'], config('hq.admins')),
                'atc_rating_id' => $params['vatsim']['rating']['id'],
                'atc_rating_name' => $params['vatsim']['rating']['long'] . ' (' . $params['vatsim']['rating']['short'] . ')',
                'pilot_rating_id' => $params['vatsim']['pilotrating']['id'],
                'pilot_rating_name' => $params['vatsim']['pilotrating']['long'] . ' (' . $params['vatsim']['pilotrating']['short'] . ')',
                'region_name' => $params['vatsim']['region']['name'],
                'region_code' => $params['vatsim']['region']['id'],
                'division_name' => $params['vatsim']['division']['name'],
                'division_code' => $params['vatsim']['division']['id'],
                'subdivision_name' => $params['vatsim']['subdivision']['name'],
                'subdivision_code' => $params['vatsim']['subdivision']['id'],
            ]
        );

        // If a certain user is banned, return an error
        if ($user->is_banned)
            throw new \Exception('You are banned from using HQ. Please contact the respective staff if you think this is a mistake.', 403);

        // Otherwise, create sanctum token and return the user
        $user['token'] = $user->createAPIToken();

        // Return user
        return $user;
    }
}
