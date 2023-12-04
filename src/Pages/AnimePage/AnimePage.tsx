import './animePage.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Anime } from '../../components/Anime'
import { AnimeType, CharactersType } from '../../Type'
import { getAnimeById, getAnimeCharacters } from '../../store/singleAnimePage/singleAnime'
import { useAppDispatch, useAppSelector } from '../../store/hooks'
import { RootState } from '../../store/store'




export const AnimePage = () => {
    const dispatch = useAppDispatch()
      
    const animeById:AnimeType | null = useAppSelector((state:RootState) => state.singleAnime.animeById)
    const animeCharacters:CharactersType[] = useAppSelector((state:RootState) => state.singleAnime.characters)

let {id} = useParams()

useEffect(() => {
    dispatch(getAnimeById(id))
    dispatch(getAnimeCharacters(id))
}, []);
   
    return (
        (animeById && Object.keys(animeById).length > 0)
        ? <Anime 
        animeById={animeById}
        animeCharacters={animeCharacters}
        />
        : <h1 className='text-center text-l font-bold'>Loading...</h1>
    );
}