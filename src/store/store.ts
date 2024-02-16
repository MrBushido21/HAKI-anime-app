import { configureStore } from "@reduxjs/toolkit";
import animesSlice from "./animes/animesSlice";
import userSlice from "./user/userSlice";
import singleAnimeSlice from "./singleAnimePage/singleAnimeSlice";



const store = configureStore({
    reducer: {
        animes: animesSlice,
        singleAnime: singleAnimeSlice,
        user: userSlice
    },
    devTools: true
})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch