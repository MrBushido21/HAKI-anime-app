import { Link, useNavigate } from 'react-router-dom'
import { AnimeType } from '../Type'

type PropsType = {
    animes: AnimeType[]
    searchValue: string 
}
export const MainAnimes = ({
     animes,
    }: PropsType) => {
    
    const navigate = useNavigate()

    const onClickByAnime = (id: number) => {
        navigate(`/anime/${id}`)
    }

    return (
        <div className="main-anime">
            {
                animes.map(anime =>
                    <div key={anime.mal_id} onClick={() => onClickByAnime(anime.mal_id)} className='main-anime__poster dark:hover:scale-105'>
                        <img src={anime.images.jpg.large_image_url} alt="" />
                    </div>
                )
            }
        </div>
    );
}