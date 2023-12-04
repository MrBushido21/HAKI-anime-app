import { configureStore } from "@reduxjs/toolkit";
import animesSlice from "./animes/animesSlice";
import singleAnimeSlice from "./singleAnimePage/singleAnime";
import userSlice from "./user/userSlice";


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