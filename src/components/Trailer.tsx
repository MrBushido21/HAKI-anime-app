import { AnimeType } from "../Type";

type PropsType = {
    animeById: AnimeType
}
export const Trailer = ({ animeById }: PropsType) => {
    return (
        <div className='trailer bg-slate-50 p-6 flex justify-center items-center'>
            {animeById.trailer.embed_url
                ? <iframe
                    src={animeById.trailer.embed_url}
                    title="Inline Frame Example"
                    width="800"
                    height="450"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen>
                </iframe>
                : <h3>Not found :(</h3>

            }
        </div>
    );
}