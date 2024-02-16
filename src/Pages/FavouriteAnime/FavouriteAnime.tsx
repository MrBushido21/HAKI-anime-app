import { Link } from "react-router-dom";
import { AnimeType } from "../../Type";
import { MainAnimes } from "../../components/MainAnimes";
import { useAppSelector } from "../../store/hooks";
import { RootState } from "../../store/store";

type PropsType = {}
export const FavouriteAnime = ({ }: PropsType) => {
    const animes: AnimeType[] = useAppSelector((store: RootState) => store.animes.favouriteAnime);
    const favouriteAnimeIds: number[] = useAppSelector((store: RootState) => store.animes.favouriteAnimeIds);
    const name = useAppSelector((state: RootState) => state.user.username)


    return (
        <div className="container text-white">
            <h2 className="text-2xl text-center mb-12">Anime by user {name}</h2>
            <div className="content">
                {
                    animes.length > 0
                    ? <MainAnimes animes={animes} favouriteAnimeIds={favouriteAnimeIds} />
                    : <Link to='/'>Add anime to the list (●'◡'●)</Link>
                }            
            </div>
        </div>

    );
}