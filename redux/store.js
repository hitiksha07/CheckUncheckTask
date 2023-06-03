import { configureStore } from "@reduxjs/toolkit";
import { dataSlice } from "./slice/dataSlice";

export const store = configureStore({
    reducer: {
        data: dataSlice.reducer  
    },
});
// const makestore = () => store

// export const wrapper = createWrapper(makestore) 