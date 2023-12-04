import { useNavigate } from 'react-router-dom'
import { AnimeType } from '../Type'
import { useSelector } from 'react-redux'
import { RootState } from '../store/store'
import { useAppSelector } from '../store/hooks'


export const MainAnimes = () => {
    
    const navigate = useNavigate()

    const onClickByAnime = (id: number) => {
        navigate(`/anime/${id}`)
    }

    const  animes:AnimeType[] = useAppSelector(( store:RootState ) => store.animes.animes) ;

    
    return (
        
        <div className="main-anime">
            {
                animes.map(anime =>
                    <div key={anime.mal_id} onClick={() => onClickByAnime(anime.mal_id)}
                     className='main-anime__poster dark:hover:scale-105'
                     >
                        <img src={anime.images.jpg.large_image_url} alt="" />
                    </div>
                )
            }
        </div>
    );
}