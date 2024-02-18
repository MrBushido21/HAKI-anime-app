import './App.scss';
import { useEffect, useState } from 'react';
import { HomePage } from './Pages/HomePage/HomePage';
import { Route, Routes } from 'react-router';
import { AnimePage } from './Pages/AnimePage/AnimePage';
import { Header } from './components/Header';
import { getAnimes, getAnimesByCategory, getAnimesBySearch } from './store/animes/animesSlice';
import { useAppDispatch, useAppSelector } from './store/hooks';
import { RootState } from './store/store';
import { Mugiwars } from './Pages/Mugiwars/Mugiwars';
import { HakiPage } from './Pages/Haki/HakiPage';
import { Meito } from './Pages/Meito/Meito';
import { Login } from './Pages/Login/Login';
import { Profile } from './Pages/Profile/Profile';
import axios from 'axios';
import { useAuth } from './utils/functions';
import { FavouriteAnime } from './Pages/FavouriteAnime/FavouriteAnime';
import { API } from './utils/constans';

export type CategoryType = "standart" | "popular" | "airing" | "upcoming" | "nothing"


function App() {

  const dispatch = useAppDispatch()
  const isLoading = useAppSelector((state:RootState) => state.animes.isLoading)

  const [category, setCategory] = useState<CategoryType>('standart')
  const [searchValue, setSearchValue] = useState<string>('')



  const getAnime = async () => {
    setCategory("standart")
    dispatch(getAnimes())
  }
  const getPopularAnime = async () => {
    setCategory("popular")
    dispatch(getAnimesByCategory('bypopularity'))
  }
  const getAiringAnime = async () => {
    setCategory("airing")
    dispatch(getAnimesByCategory('airing'))
  }
  const getUpcomingAnime = async () => {
    setCategory("upcoming")
    dispatch(getAnimesByCategory('upcoming'))
  }

  const searchAnime = async () => {
    setCategory("nothing")
    dispatch(getAnimesBySearch(searchValue))
    setSearchValue('')
  }

  useEffect(() => {
    getAnime()
  }, [])
  

  const { handleAuthResult } = useAuth();

  useEffect(() => {
        const token:any = localStorage.getItem('token')
        axios.get(`${API}/me`, { headers: { token } })
        .then(({data}) => { handleAuthResult(data)
           console.log(data)
         })
        .catch((err) => alert(err.response.data.message))
    }, [])


  return (
    isLoading
    ? <h2>Loading...</h2>
    : <div className="wrapper dark:bg-zinc-950">
      <Header />
       <Routes>
       <Route path='/' element={<HomePage
        getPopularAnime={getPopularAnime} 
        getAnime={getAnime}
        getAiringAnime={getAiringAnime}
        getUpcomingAnime={getUpcomingAnime}
        category={category}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        searchAnime={searchAnime}
        />} />
        <Route path='/anime/:id' element={<AnimePage
        />} />   
        <Route path='/mugiwars' element={<Mugiwars />}/>          
        <Route path='/haki' element={<HakiPage />}/>          
        <Route path='/meito' element={<Meito />}/>          
        <Route path='/login' element={<Login />}/>          
        <Route path='/profile' element={<Profile />}/>          
        <Route path='/favouriteAnime' element={<FavouriteAnime />}/>               
      </Routes>   
    </div>
  );
}

export default App;
