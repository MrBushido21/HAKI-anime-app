import './App.css';
import { useEffect, useState } from 'react';
import { HomePage } from './Pages/HomePage/HomePage';
import { Route, Routes } from 'react-router';
import { AnimePage } from './Pages/AnimePage/AnimePage';
import { Header } from './components/Header';
import { AnimeType } from './Type';

export type CategoryType = "standart" | "popular" | "airing" | "upcoming" | "nothing"



function App() {

  const [isLoading, setLoading] = useState(true)
  const [animes, setAnimes] = useState<AnimeType[]>([])
  const [category, setCategory] = useState<CategoryType>('standart')
  const [searchValue, setSearchValue] = useState('')


  const basicURL = "https://api.jikan.moe/v4/top/anime?filter="

  const getAnimeData = async (category: string) => {
    setLoading(true)
    const response = await fetch(`${basicURL}${category}`);
    const data = await response.json();
    setAnimes(data.data)
    setLoading(false)
  }

  const getAnime = async () => {
    setCategory("standart")
    const response = await fetch(`https://api.jikan.moe/v4/anime`);
    const data = await response.json();
    setAnimes(data.data)
    setLoading(false)
  }
  const getPopularAnime = async () => {
    setCategory("popular")
    getAnimeData('bypopularity')
  }
  const getAiringAnime = async () => {
    setCategory("airing")
    getAnimeData('airing')
  }
  const getUpcomingAnime = async () => {
    setCategory("upcoming")
    getAnimeData('upcoming')
  }

  const searchAnime = async () => {
    setCategory("nothing")
    setLoading(true)
    const response = await fetch(`https://api.jikan.moe/v4/anime?q=${searchValue}&order_by=popularity&sort=asc&sfw`);
    const data = await response.json();
    setAnimes(data.data)
    setLoading(false)
    setSearchValue('')
  }

  useEffect(() => {
    getAnime()
  }, [])
  
  
  return (
    isLoading
    ? <h2>Loading...</h2>
    : <div className="wrapper dark:bg-zinc-950">
      <Header />
       <Routes>
       <Route path='/' element={<HomePage
        getPopularAnime={getPopularAnime} 
        animes={animes}
        getAnime={getAnime}
        getAiringAnime={getAiringAnime}
        getUpcomingAnime={getUpcomingAnime}
        category={category}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchAnime={searchAnime}
        />} />
        <Route path='/anime/:id' element={<AnimePage
            setLoading={setLoading}
        />} />             
      </Routes>   
    </div>
  );
}

export default App;
