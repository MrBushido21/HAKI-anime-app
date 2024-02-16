import { useNavigate } from 'react-router-dom'
import { AnimeType } from '../Type'
import { useAppDispatch, useAppSelector } from '../store/hooks'
import { setFavouriteAnime } from '../store/animes/animesSlice'
import axios from 'axios'
import { RootState } from '../store/store'

type PropsType = {
    animes: AnimeType[]
    favouriteAnimeIds: number[]
}
export const MainAnimes = ({ animes, favouriteAnimeIds }: PropsType) => {


    const dispatch = useAppDispatch()
    const userId = useAppSelector((state: RootState) => state.user.id)
    const favouriteAnimes = useAppSelector((state: RootState) => state.animes.favouriteAnime)
    const navigate = useNavigate()

    const onClickByAnime = (id: number) => {
        navigate(`/anime/${id}`)
    }


    const handleFavouriteAnime = (anime: AnimeType, id: number) => {

        const isFavourite = favouriteAnimes.some(item => item.mal_id === anime.mal_id);

        const thenFunction = ({data}:any) => {
            dispatch(setFavouriteAnime({
                favouriteAnime: data.favouriteAnime,
                favouriteAnimeIds: data.favouriteAnimeIds,
            }));
        };
        if (isFavourite) {
            // Якщо вже є, то видалити  
            axios.delete(`http://localhost:5000/user/favouriteAnime/${userId}`, {
                data: {
                    id: id
                }
            })
            .then(thenFunction)
            .catch((err) => alert(err.response.data));
        } else {
            // Якщо немає, то додати
            axios.post(`http://localhost:5000/user/favouriteAnime/${userId}`, {
                anime: anime,
                id: id
            })
            .then(thenFunction)
            .catch((err) => alert(err.response.data));
                     
        }

    }

    return (
        <div className="main-anime">
            {animes.map((anime) => (
                <div key={anime.mal_id} className='main-anime__poster dark:hover:scale-105'>
                    <img src={anime.images.jpg.large_image_url} onClick={() => onClickByAnime(anime.mal_id)} />
                    <button
                        className='like'
                        onClick={() => handleFavouriteAnime(anime, anime.mal_id)}
                    >
                        {favouriteAnimeIds.includes(anime.mal_id) ? '✔' : '❤'}
                    </button>
                </div>
            ))}
        </div>
    );
}