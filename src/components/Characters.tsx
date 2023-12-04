import { CharactersType } from "../Type";

type PropsType = {
    animeCharacters: CharactersType[]
}


export const Characters = ({ 
    animeCharacters
}: PropsType) => {
    console.log(animeCharacters);
    return (
        <div className='characters-container bg-slate-50 p-6 dark:bg-zinc-950'>

            {
                animeCharacters.map(char =>
                    <div key={char.character.mal_id} className="characters-item">
                        <img src={char.character.images.jpg.image_url} alt="" />
                        <div className='characters-name dark:text-slate-50'>{char.character.name}</div>
                        <div className='characters-role'>{char.role}</div>
                    </div>
                )
            }
        </div>
    );
}