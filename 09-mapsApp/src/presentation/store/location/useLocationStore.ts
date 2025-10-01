import { create } from "zustand";
import { Location } from "../../../infraestructure/interfaces/location";
import { clearWatchLocation, getCurrentLocation, watchCurrentLocation } from "../../../actions/location/location";

interface LocationState {
    watchId: number |null;
    lastKnownLocation: Location|null;
    userLocationsList: Location[];

    getLocation: () => Promise<Location|null>;
    watchLocation: () => void;
    clearWatchLocation: () => void;
}

export const useLocationStore = create<LocationState>()( (set, get) => ({
    watchId: null,
    lastKnownLocation: null,
    userLocationsList: [],

    getLocation : async() => {
        const location = await getCurrentLocation();
        set({ lastKnownLocation: location });
        return location;
    },
    watchLocation: () => {
        const watchId = get().watchId;
        if( watchId !== null) {
            get().clearWatchLocation();
        }
    },
    clearWatchLocation: () => {
        const watchId = get().watchId;
        if( watchId !== null) {
            clearWatchLocation(watchId);
        }
        const id = watchCurrentLocation( (location) => {
            set({ lastKnownLocation: location });
            userLocations: [...get().userLocationsList, location]

        })
        set({ watchId: id});
    }
 }))