import { setFavouriteAnime } from "../store/animes/animesSlice";
import { useAppDispatch } from "../store/hooks";
import { setUser } from "../store/user/userSlice";



export const useAuth = () => {
    const dispatch = useAppDispatch()

    let handleAuthResult = (data:any) => {
        dispatch(setUser({
            username: data.username,
            token: data.token,
            image: data.avatarUrl,
            id: data._id,
            bgImage: data.profileBg,
            isAuth: true
        })); 
        dispatch(setFavouriteAnime({
            favouriteAnime: data.favouriteAnime,
            favouriteAnimeIds: data.favouriteAnimeIds,
        }))  
    }

    return { handleAuthResult }
}
 