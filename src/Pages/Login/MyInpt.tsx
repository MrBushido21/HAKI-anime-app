type PropsType = {
    id:string,
    labelValue:string,
    placeholder:string,
    type:string,
    value:string,
    onChange: React.Dispatch<React.SetStateAction<string>>
}
export const MyInput = ({ 
    id,
    labelValue,
    placeholder,
    type,
    value,
    onChange
}: PropsType) => {
    return (
        <div className="flex flex-col w-3/5 mb-5">
            <label htmlFor={id}>{labelValue}</label>
            <input id={id} placeholder={placeholder} type={type} className="p-2 rounded text-black" 
            value={value} onChange={(e) => onChange(e.target.value)}
            />
        </div>
    );
}