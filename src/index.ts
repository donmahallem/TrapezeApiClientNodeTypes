/*!
 * Source https://github.com/donmahallem/TrapezeApiClientNodeTypes
 */

import { IVehicleLocation } from "@donmahallem/trapeze-api-types";

export type IVehicleLocationExtended = IVehicleLocation | {
    lastUpdate: number;
};
