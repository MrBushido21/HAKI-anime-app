import './profile.scss'

import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { RootState } from '../../store/store';
import { API, incognitoAva } from '../../utils/constans';
import { setLogOut, setPost } from '../../store/user/userSlice';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router';
import axios from 'axios';
import { MyFileInput } from '../../components/MyFileInput';
import { Link } from 'react-router-dom';
import { useAuth } from '../../utils/functions';


type PropsType = {}
export const Profile = ({ }: PropsType) => {

    const [imageBg, setImageBg] = useState<string | Blob>('')
    const [imageAva, setAva] = useState<string | Blob>('')
    const [textareaValue, setValue] = useState<string>('')
    // const [posts, setPosts] = useState<any[]>([]) 

    const dispatch = useAppDispatch()


    const name = useAppSelector((state: RootState) => state.user.username)
    const avatar = useAppSelector((state: RootState) => state.user.image)
    const isUserAuth = useAppSelector((state: RootState) => state.user.isAuth)
    const bg = useAppSelector((state: RootState) => state.user.bgImage)
    const userId = useAppSelector((state: RootState) => state.user.id)
    const posts = useAppSelector((state: RootState) => state.user.posts)

    const navigate = useNavigate()


    const handleLogout = () => {
        dispatch(setLogOut())
        localStorage.removeItem('token')
        navigate('/login')
    }

    const backgroundStyle = {
        background: `url(${bg ? bg : imageBg})`,
    };



    const handleFileChangeImage = (
        e: React.ChangeEvent<HTMLInputElement>,
        setFileHandler: (file: File) => void
      ) => {
        const files = e.target.files;
      
        if (files && files.length > 0) {
          const selectedFile = files[0];
          setFileHandler(selectedFile);
        }
      };
      
      const handleFileChangeBg = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleFileChangeImage(e, setImageBg);
      };
      
      const handleFileChangeAva = (e: React.ChangeEvent<HTMLInputElement>) => {
        handleFileChangeImage(e, setAva);
      };
    
      const { handleAuthResult } = useAuth();

    const handleImage = (fieldname:string, image: string | Blob, setImage: (string: string) => void) => {
        const formData = new FormData();

        formData.append(fieldname, image);


        axios.patch(`${API}/user/${fieldname}/${userId}`, formData)
            .then(({ data }) => {
                console.log(data);
                setImage('')
                handleAuthResult(data)
            })
            .catch((err) => console.log(err)
            )
    }
    const handleBg = () => {
        handleImage('bg', imageBg, setImageBg)
    }
    const handleAva = () => {
        handleImage('avatar', imageAva, setAva)
    }

    const handlePost = (e:any) => {
        e.preventDefault()
        
        let newPost = {
            name:name,
            textareaValue:textareaValue,
            id: posts.length
        }
        dispatch(setPost(newPost))
        setValue('')
    }

    useEffect(() => {
        if (!isUserAuth) {
            navigate('/login')
        }
    }, [])
    


    return (
        <div className="text-white">
            <div className="container">
                <div
                    className={`profile border m-auto max-w-4xl flex flex-col items-center p-4`}
                    style={backgroundStyle}
                >
                    <div>
                    <MyFileInput 
                    className='btn-bg' 
                    inputId="fileInputBg"
                    title="Change profile bg" 
                    handleFileChange={handleFileChangeBg} 
                    image={imageBg} 
                    handleImage={handleBg}
                    />
                    <MyFileInput 
                    className='btn-ava' 
                    inputId="fileInputAva"
                    title="Change user avatar" 
                    handleFileChange={handleFileChangeAva} 
                    image={imageAva} 
                    handleImage={handleAva}
                    />
                    </div>
                    <div 
                    className="avatar-box"
                    
                    >
                        {avatar &&
                            <img src={avatar}
                                className="avatar cursor-pointer"
                                alt="ava"
                            />
                        }

                    </div>

                    <div className='userinfo mt-12'>
                        <div className='font-bold text-xl'>{name}</div>
                        <Link to="/favouriteAnime" className='animes-list'>Your favourite anime:</Link>
                    </div>
                    <form onSubmit={handlePost} className="textareaBox">
                        <textarea
                        value={textareaValue}
                        onChange={(e) => setValue(e.target.value)}></textarea>
                        <button>Send</button>
                    </form>
                    <div className='posts'>
                        {posts.map(post =>
                          <div key={post.id} className='post'>
                            {post.name}: {post.textareaValue}
                        </div>  
                        )} 
                    </div>
                    <button className='logout' onClick={handleLogout}>Log out</button>
                </div>
            </div>
        </div>
    );
}