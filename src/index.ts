/*!
 * Source https://github.com/donmahallem/TrapezeApiClientNodeTypes
 */

import { VehicleLocations } from "@donmahallem/trapeze-api-types";

export type IVehicleLocationExtended = VehicleLocations & {
    lastUpdate: number;
};
