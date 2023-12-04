import { MeitoType } from "../../Type";

type PropsType = {
    meitos: MeitoType[]
}
export const MeitoContainer = ({
    meitos
}: PropsType) => {
    return (
        <div className='meito-container'>
            {meitos.map(meito =>
                <div key={meito.name} className='meito-cart border'>
                    <img
                        src={meito.img}
                        style={{ width: "120px", height: "120px" }} />
                    <h4 className='border mt-3'>{meito.name}</h4>
                </div>
            )}


        </div>
    );
}