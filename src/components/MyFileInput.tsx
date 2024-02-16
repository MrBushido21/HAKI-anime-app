type PropsType = {
    handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void
    image: string | Blob
    handleImage: () => void
    title: string
    className: string
    inputId: string
}
export const MyFileInput = ({ 
    handleFileChange,
    image,
    handleImage,
    title,
    className,
    inputId
}: PropsType) => {
    return (
        <div className={className}>
            <label htmlFor={inputId} className="custom-file-input-label">
                {title}
            </label>
            <input
                type="file"
                id={inputId}
                onChange={handleFileChange}
                className="custom-file-input"
            />
            {image && <button
                className='block m-auto mt-4'
                onClick={handleImage}
            >Send</button>}
        </div> 
);
}