import { useState } from "react";


type PropsType = {}
export const ChoosePhoto = ({ }: PropsType) => {
    const [image, setImage] = useState<File | Blob | null>(null)


    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const files = e.target.files;

        if (files && files.length > 0) {
            const selectedFile = files[0];
            setImage(selectedFile);
        }
    };

    return (
        <>
            <label htmlFor="fileInput" className="custom-file-input-label">
                Choose a photo
            </label>
            <input
                type="file"
                id="fileInput"
                onChange={handleFileChange}
                className="custom-file-input"
            />
            {image && (
                <img
                    src={URL.createObjectURL(image)}
                    style={{ maxWidth: '30%', maxHeight: '30%', marginTop: "10px" }}
                />
            )}
        </>
    );
}