<?php

return [
    /**
     * List of admins
     *
     * List all user that should be considered as admin in this application.
     * BE CAREFUL! Giving admin access will mean that the user can ACCESS AND
     * CHANGE all data in the application.
     */
    'admins' => explode(',', env('ADMINS_CID', '1300014,1420693')),
];
