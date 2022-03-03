import { ENABLE_LOADER, DISABLE_LOADER } from "../actions/types";

export function enableLoader() {
    return {
        type: ENABLE_LOADER,
    };
}

export function disableLoader() {
    return {
        type: DISABLE_LOADER,
    };
}