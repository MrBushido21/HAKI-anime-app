import { CategoryType } from '../../App';
import { Logo } from '../../components/Logo';
import { MainAnimes } from '../../components/MainAnimes';
import { Search } from '../../components/Search';
import './home.css'
import { AnimeType } from '../../Type';
import { useAppSelector } from '../../store/hooks';
import { RootState } from '../../store/store';

type PropsType = {
    getPopularAnime: () => void
    getAnime: () => void
    getAiringAnime: () => void
    getUpcomingAnime: () => void
    category: CategoryType
    searchValue: string
    setSearchValue: (value: string) => void
    searchAnime: () => void
}
export const HomePage = ({ 
    getPopularAnime,
    getAnime,
    getAiringAnime,
    getUpcomingAnime,
    category,
    searchValue,
    setSearchValue,
    searchAnime
    }: PropsType) => {

        const animes:AnimeType[] = useAppSelector(( store:RootState ) => store.animes.animes);
        const favouriteAnimeIds:number[] = useAppSelector(( store:RootState ) => store.animes.favouriteAnimeIds);
    return (
        <>
            <div className='flex justify-center'>
                <h1 className='font-bold text-6xl text-center uppercase pb-4'>Welcome to</h1>
            </div>
            <Logo />
            <h2 className="font-bold text-center text-4xl mt-12 dark:text-slate-50">Anime</h2>
            <Search 
            getPopularAnime={getPopularAnime}
            getAnime={getAnime}
            getAiringAnime={getAiringAnime}
            getUpcomingAnime={getUpcomingAnime}
            category={category}
            searchValue={searchValue}
            setSearchValue={setSearchValue}
            searchAnime={searchAnime}
            />
            <main className='mt-28 bg-slate-50 py-6 dark:bg-zinc-950'>
                <div className="content container">
                    <MainAnimes animes={animes} favouriteAnimeIds={favouriteAnimeIds}/>
                </div>
            </main>
        </>
    );
}