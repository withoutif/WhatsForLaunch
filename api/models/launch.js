import { DataTransform } from 'node-json-transform';

const nestedMap = {
    list: "payloads",
    item: {
        payload_id: "payload_id",
        reused: "reused",
        nationality: "nationality",
        manufacturer: "manufacturer",
        type: "payload_type",
        customers: "customers"
    }
};

export const launchMap = {
    item: {
        flight_number: "flight_number",
        mission_name: "mission_name",
        mission_patch_small: "links.mission_patch_small",
        details: "details",
        launch_date_unix: "launch_date_unix",
        payloads: "rocket.second_stage.payloads",
        rocket: "rocket.rocket_id"
    },
    operate: [
    {
        run: function(arr) {
            return DataTransform({payloads: arr}, nestedMap).transform();
        },
        on: "payloads"
    }
    ]
};