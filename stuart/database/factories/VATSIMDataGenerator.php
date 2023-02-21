<?php

namespace Database\Factories;

class VATSIMDataGenerator
{
    // list of all ATC rating
    public array $atc_rating = [
        // rating start from ID 0 to 12
        // where there is no 6 and 9 since
        // VATSIM doesn't use C2 and I2
        -1 => "Inactive (INA)",
        0 => "Suspended",
        1 => "Pilot/Observer (OBS)",
        2 => "Tower Trainee (S1)",
        3 => "Tower Controller (S2)",
        4 => "TMA Controller (S3)",
        5 => "Enroute Controller (C1)",
        7 => "Senior Controller (C3)",
        8 => "Instructor (I1)",
        10 => "Senior Instructor (I3)",
        11 => "Supervisor (SUP)",
        12 => "Administrator (ADM)"
    ];

    // list of all pilot rating
    public array $pilot_rating = [
        -1 => "NA (New Member Orientation Not Complete)",
        0 => "New Member (NEW)",
        1 => "Private Pilot Licence (PPL)",
        3 => "Instrument Rating (IR)",
        7 => "Commercial Multi-Engine License (CMEL)",
        15 => "Airline Transport Pilot License (ATPL)"
    ];

    // list of all region
    public $region = [
        "APAC" => "Asia Pacific",
        "AMAS" => "Americas",
        "EMEA" => "Europe, Middle East and Africa"
    ];

    // list of all division
    public array $division = [
        "APAC" => [
            "SEA" => "Southeast Asia (VATSEA)",
            "WA" => "West Asia",
            "PAC" => "Australia (VATPAC)",
            "JPN" => "Japan",
            "PRC" => "People's Republic of China",
            "KOR" => "Korea",
            "NZ" => "New Zealand (VATNZ)",
            "ROC" => "Republic of China (Taiwan)",
        ],
        "AMAS" => [
            "BRZ" => "Brazil",
            "CAN" => "Canada",
            "CAR" => "Caribbean",
            "CAM" => "Central America",
            "MEX" => "Mexico",
            "SAM" => "South America",
            "USA" => "United States",
        ],
        "EMEA" => [
            "EUD" => "Europe (except UK)",
            "GBR" => "United Kingdom",
            "MENA" => "Middle East and North Africa",
            "IL" => "Israel (VATIL)",
            "RUS" => "Russia (VATRUS)",
            "SSA" => "Sub-Sahara Africa"
        ]
    ];

    // list of all division that have
    // subdivision listed at $subdivision 👇
    public array $division_that_have_subdivision = [
        "SEA" => "Southeast Asia (VATSEA)",
        "WA" => "West Asia"
    ];

    // list of all subdivision/vACC/ARTCC
    // i'll only add WA and SEA 😅
    public array $subdivision = [
        "SEA" => [
            "HK" => "Hong Kong",
            "IDN" => "Indonesia",
            "MYS" => "Malaysia",
            "PHL" => "Philippines",
            "SGP" => "Singapore",
            "VCL" => "Vietnam - Cambodia - Laos",
        ],
        "WA" => [
            "AFG" => "Afghanistan",
            "BGD" => "Bangladesh",
            "BTN" => "Bhutan",
            "IND" => "India",
            "NPL" => "Nepal",
            "PAK" => "Pakistan",
            "SRM" => "Sri Lanka & Maldives",
        ],
    ];

    // Available in data -> vACC is available in our data
    // Which in this case only for vACC under SEA and WA
    // Which mean it's only available under APAC
    public function randomRegion($available_in_data = false): array
    {
        if ($available_in_data) {
            return ["Asia Pacific", "APAC"];
        }

        $region_code = array_rand($this->region);
        $region_name = $this->region[$region_code];

        return [$region_name, $region_code];
    }

    // Available in data -> vACC is available in our data
    // Which in this case only for vACC under SEA and WA
    public function randomDivision($available_in_data = false): array
    {
        [$region_name, $region_code] = $this->randomRegion($available_in_data);

        if ($available_in_data) {
            $division_code = array_rand($this->division_that_have_subdivision);
        } else {
            $division_code = array_rand($this->division[$region_code]);
        }

        $division_name = $this->division[$region_code][$division_code];

        return [
            $division_name,
            $division_code,
            $region_name,
            $region_code
        ];
    }

    // Available in data -> vACC is available in our data
    // Which in this case only for vACC under SEA and WA
    public function randomSubdivision($available_in_data = false): array
    {
        [
            $division_name,
            $division_code,
            $region_name,
            $region_code
        ] = $this->randomDivision($available_in_data);

        if (!array_key_exists($division_code, $this->subdivision)) {
            return [
                null,
                null,
                $division_name,
                $division_code,
                $region_name,
                $region_code
            ];
        }

        $subdivision_code = array_rand($this->subdivision[$division_code]);
        $subdivision_name = $this->subdivision[$division_code][$subdivision_code];

        return [
            $subdivision_name,
            $subdivision_code,
            $division_name,
            $division_code,
            $region_name,
            $region_code
        ];
    }

    public function randomATCData(): array
    {
        $atc_rating_id = array_rand($this->atc_rating);
        $atc_rating_name = $this->atc_rating[$atc_rating_id];

        return [$atc_rating_id, $atc_rating_name];
    }

    public function randomPilotData(): array
    {
        $pilot_rating_id = array_rand($this->pilot_rating);
        $pilot_rating_name = $this->pilot_rating[$pilot_rating_id];

        return [$pilot_rating_id, $pilot_rating_name];
    }

    public function randomCompleteData(): array
    {
        [
            $subdivision_name,
            $subdivision_code,
            $division_name,
            $division_code,
            $region_name,
            $region_code
        ] = $this->randomSubdivision();

        $atc_rating_id = array_rand($this->atc_rating);
        $atc_rating_name = $this->atc_rating[$atc_rating_id];
        $pilot_rating_id = array_rand($this->pilot_rating);
        $pilot_rating_name = $this->pilot_rating[$pilot_rating_id];

        return [
            $atc_rating_id,
            $atc_rating_name,
            $pilot_rating_id,
            $pilot_rating_name,
            $subdivision_name,
            $subdivision_code,
            $division_name,
            $division_code,
            $region_name,
            $region_code
        ];
    }
}
