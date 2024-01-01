import {create} from "zustand";
import {BicycleType, BicycleStatusType} from "../type";
import {immer} from "zustand/middleware/immer";
import {getBicycle, getBicycleStatus} from "../api";
import {Status} from "../helper/const";

type State = {
    bicycleStatus: BicycleStatusType[];
    bicycle: BicycleType[];
}

type Action = {
    addBicycle: (el: BicycleType) => void;
    setBicycle: (arr: BicycleType[]) => void;
    getBicycleAsync: () => Promise<BicycleType[]>;
    setBicycleStatus: (arr: BicycleStatusType[]) => void;
    getBicycleStatusAsync: () => Promise<BicycleStatusType[]>;
}

const init: State = {
    bicycle: [],
    bicycleStatus: [],
}

const useBicycleStore = create<State & Action>()(immer((set, get) => ({
    ...init,
    addBicycle(e) {
        set(state => {
            state.bicycle.unshift(e)
        })
    },
    async getBicycleAsync() {
        const bicycle = await getBicycle();
        set(state => {
            state.bicycle = bicycle
        });
        return bicycle;
    },
    setBicycle(arr) {
        set(state => {
            state.bicycle = arr
        });
    },
    async getBicycleStatusAsync() {

        const status = await getBicycleStatus();
        set(state => {
            state.bicycleStatus = status
        });
        return status;
    },
    setBicycleStatus(arr) {
        set(state => {
            state.bicycleStatus = arr
        });
    }
})))

export default useBicycleStore;
