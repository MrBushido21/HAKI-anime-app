import { AnimeType } from './../../Type';
import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from "axios";

type AnimesState = {
    animes: AnimeType[],
    favouriteAnime: AnimeType[]
    favouriteAnimeIds: number[]
    isLoading: boolean
}

const initialState: AnimesState = {
    animes: [],
    favouriteAnime: [],
    favouriteAnimeIds: [],
    isLoading: false
}


export const getAnimes: any = createAsyncThunk(
    'animes/getAnime',
    async (_, thunkAPI) => {
        try {
            const response = await axios(`https://api.jikan.moe/v4/anime`);
            return response.data.data
        } catch (err) {
            console.log(err);
            return thunkAPI.rejectWithValue(err)
        }
    }
)
export const getAnimesByCategory: any = createAsyncThunk(
    'animes/getAnimeByCategory',
    async (category: string, thunkAPI) => {
        try {
            const response = await axios(`https://api.jikan.moe/v4/top/anime?filter=${category}`);
            return response.data.data
        } catch (err) {
            console.log(err);
            return thunkAPI.rejectWithValue(err)
        }
    }
)
export const getAnimesBySearch: any = createAsyncThunk(
    'animes/getAnimesBySearch',
    async (searchValue: string, thunkAPI) => {
        try {
            const response = await axios(`https://api.jikan.moe/v4/anime?q=${searchValue}&order_by=popularity&sort=asc&sfw`);
            return response.data.data
        } catch (err) {
            console.log(err);
            return thunkAPI.rejectWithValue(err)
        }
    }
)


const animesSlice = createSlice({
    name: "animes",
    initialState,
    reducers: {

        setFavouriteAnime: (state, action) => {
            console.log(action);
            state.favouriteAnime = action.payload.favouriteAnime
            state.favouriteAnimeIds = action.payload.favouriteAnimeIds
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getAnimes.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getAnimes.fulfilled, (state, action: PayloadAction<AnimeType[]>) => {
            state.animes = action.payload
            state.isLoading = false
        })
        builder.addCase(getAnimes.rejected, (state) => {
            state.isLoading = false
        })
        builder.addCase(getAnimesByCategory.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getAnimesByCategory.fulfilled, (state, action: PayloadAction<AnimeType[]>) => {
            state.animes = action.payload
            state.isLoading = false
        })
        builder.addCase(getAnimesByCategory.rejected, (state) => {
            state.isLoading = false
        })
        builder.addCase(getAnimesBySearch.pending, (state) => {
            state.isLoading = true
        })
        builder.addCase(getAnimesBySearch.fulfilled, (state, action: PayloadAction<AnimeType[]>) => {
            state.animes = action.payload
            state.isLoading = false
        })
        builder.addCase(getAnimesBySearch.rejected, (state) => {
            state.isLoading = false
        })
    },
})
export const { setFavouriteAnime } = animesSlice.actions
export default animesSlice.reducer