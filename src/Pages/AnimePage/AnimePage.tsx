import './animePage.css'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Anime } from '../../components/Anime'
import { AnimeType, CharactersType } from '../../Type'


type PropsType = {
    setLoading: (state: boolean) => void
}


export const AnimePage = ({
    setLoading,
}: PropsType) => {

    const [animeById, setAnimeById] = useState<AnimeType | null>(null)
    const [animeCharacters, setAnimeCharacters] = useState<CharactersType[]>([])
    
      const getAnimeById = async (id: any) => {
        setLoading(true)
        const response = await fetch(`https://api.jikan.moe/v4/anime/${id}`);
        const data = await response.json();
        setAnimeById(data.data)
        console.log(animeById);
        setLoading(false)   
      }
      
      const getAnimeCharacters = async (id: any) => {
        setLoading(true)
        const response = await fetch(`https://api.jikan.moe/v4/anime/${id}/characters`);
        const data = await response.json();
        setAnimeCharacters(data.data)
        setLoading(false)
      }
let {id} = useParams()

useEffect(() => {
    getAnimeById(id)
    getAnimeCharacters(id)
}, []);

    console.log(animeById);
    
    return (
        (animeById && Object.keys(animeById).length > 0)
        ? <Anime 
        animeById={animeById}
        animeCharacters={animeCharacters}
        />
        : <h2>Loading...</h2>
    );
}