import { CategoryType } from '../../App';
import { Logo } from '../../components/Logo';
import { MainAnimes } from '../../components/MainAnimes';
import { Search } from '../../components/Search';
import './home.css'
import { AnimeType } from '../../Type';

type PropsType = {
    animes: AnimeType[]
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
    animes,
    getPopularAnime,
    getAnime,
    getAiringAnime,
    getUpcomingAnime,
    category,
    searchValue,
    setSearchValue,
    searchAnime
    }: PropsType) => {


    return (
        <>
            <div className='flex justify-center'><h1 className='font-bold text-6xl text-center uppercase pb-4'>Welcome to</h1></div>
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
                    <MainAnimes 
                    animes={animes}
                    searchValue={searchValue}
                    />
                </div>
            </main>
        </>
    );
}