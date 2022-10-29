import { INCREMENT, RESET, DECREMENT } from "../constants/counterConstant";

export const increatmentCounter = () => {
    return {
        type: INCREMENT
    };
};

export const decrementCounter = () => {
    return {
        type: DECREMENT
    };
};

export const resetCounter = () => {
    return {
        type: RESET
    };
};