import { PayloadAction, createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { AnimeType, CharactersType } from "../../Type";
import axios from "axios";

type SingleAnimeType = {
    animeById: AnimeType | null,
    characters: CharactersType[]
}

const initialState: SingleAnimeType = {
    animeById: null,
    characters: []
}
export const getAnimeById:any = createAsyncThunk(
    'anime/getAnimeById',
    async (id, thunkAPI) => {
        try {
            const response = await axios(`https://api.jikan.moe/v4/anime/${id}`);
            return response.data.data
        } catch (err) {
            console.log(err);
            return thunkAPI.rejectWithValue(err)
        }
    }
)
export const getAnimeCharacters:any = createAsyncThunk(
    'anime/getAnimeCharacters',
    async (id, thunkAPI) => {
        try {
            const response = await axios(`https://api.jikan.moe/v4/anime/${id}/characters`);
            return response.data.data
        } catch (err) {
            console.log(err);
            return thunkAPI.rejectWithValue(err)
        }
    }
)

const singleAnimeSlice = createSlice({
    name: "singleAnime",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(getAnimeById.fulfilled, (state, action: PayloadAction<AnimeType>) => {
            state.animeById = action.payload
        })
        builder.addCase(getAnimeCharacters.fulfilled, (state, action: PayloadAction<CharactersType[]>) => {
            state.characters = action.payload
        })
    }
})

export default singleAnimeSlice.reducer