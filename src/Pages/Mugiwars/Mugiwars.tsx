import { Characters } from "../../components/Characters";
import { data } from "./data";

type PropsType = {}
export const Mugiwars = ({}:PropsType) => {
    const animeCharacters = data
return (
<div className="Mugiwars">
    <Characters animeCharacters={animeCharacters}/>
</div>
);
}