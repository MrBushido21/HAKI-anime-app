import { AnimeType, CharactersType } from "../Type";
import { Characters } from "./Characters";
import { Trailer } from "./Trailer";

type PropsType = {
    animeById: AnimeType
    animeCharacters: CharactersType[]
}
export const Anime = ({
    animeById,
    animeCharacters
 }: PropsType) => {


     const animeInfo = [
            { title: "Aired", info: animeById.aired.string },
            { title: "Rating", info: animeById.rating },
            { title: "Rank", info: animeById.rank },
            { title: "Score", info: animeById.score },
            { title: "Scored By", info: animeById.scored_by },
            { title: "Popularity", info: animeById.popularity },
            { title: "Status", info: animeById.status },
            { title: "Source", info: animeById.source },
            { title: "Season", info: animeById.season },
            { title: "Duration", info: animeById.duration },
        ]
        
    return (
        <div className='AnimePage container'>
            <h1 className='AnimeItem-h1 mb-6 font-bold text-4xl'>{animeById.title}</h1>
            <div className='anime-container p-4 bg-slate-50 rounded-md'>
                <div className='anime-info flex'>
                    <div className='anime-poster'>
                        <img src={animeById.images.jpg.large_image_url} width={250} alt="" />
                    </div>
                    <div className='anime-info-container'>
                        {animeInfo.map(info =>
                            <dl key={info.title} className='flex items-center flex-wrap'>
                                <dt className='font-medium mr-4'>{info.title}:</dt>
                                <dd className='text-'>{info.info}</dd>
                            </dl>
                        )}
                    </div>
                </div>
                <div className='anime-desription mt-6'>
                    {animeById.background}
                </div>
            </div>
            <h2>Trailer</h2>
            {animeById.mal_id === 21
                ? <div className='trailer bg-slate-50 p-6 flex justify-center items-center'>
                    {animeById.trailer.embed_url
                        ? <iframe
                            src="https://www.youtube.com/embed/yu-0eh9jdZg?si=L91oaWpRa3SMeHFx"
                            title="Inline Frame Example"
                            width="800"
                            height="450"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen>
                        </iframe>
                        : <h3>Not found :(</h3>

                    }
                </div>
                : <Trailer animeById={animeById} />
            }

            <h2>Characters</h2>
            <Characters animeCharacters={animeCharacters} />
        </div>
    );
}