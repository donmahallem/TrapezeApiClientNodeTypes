/*!
 * Source https://github.com/donmahallem/TrapezeApiClientNodeTypes
 */

/*!
 * Source https://github.com/donmahallem/TrapezeApiClientNode
 */
import { IVehicleLocation } from "@donmahallem/trapeze-api-types";

export type IVehicleLocationExtended = IVehicleLocation | {
    lastUpdate: number;
};
