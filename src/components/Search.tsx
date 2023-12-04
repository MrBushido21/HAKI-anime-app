import { KeyboardEvent } from "react"
import { CategoryType } from "../App"
import { useDispatch } from "react-redux"
import { getAnimesByCategory } from "../store/animes/animesSlice"

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
export const Search = ({
    getPopularAnime, 
    getAnime, 
    getAiringAnime, 
    getUpcomingAnime,
    category,
    searchValue,
    setSearchValue,
    searchAnime
}: PropsType) => {
    const onEnterPut = (e: any) => {
        if (e.charCode === 13) {
            searchAnime()
        }
    }


    return (
        <section className="Search mt-12">
            <div className="container">
                <div className="search__inputs mt-12 flex justify-center">
                    <button onClick={getAnime} 
                    className={`search__btn popular ${category === "standart" ? "active" : ""}`}>Standart</button>
                    <button onClick={getPopularAnime} 
                    className={`search__btn popular ${category === "popular" ? "active" : ""}`}>Popular 🔥</button>
                    <button onClick={getAiringAnime} 
                    className={`search__btn ${category === "airing" ? "active" : ""}`}>Airing</button>
                    <button onClick={getUpcomingAnime} 
                    className={`search__btn ${category === "upcoming" ? "active" : ""}`}>Upcoming</button>
                </div>
                <div className='saerch__input-box flex justify-center mt-8'>
                    <input 
                    type="text" 
                    placeholder='Search Anime' 
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onKeyPress={onEnterPut}
                    />
                    <button onClick={searchAnime} className='search__btn srch'>🔍</button>
                </div>
            </div>
        </section>
    );
}