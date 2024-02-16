import { createSlice } from "@reduxjs/toolkit"

interface UserState {
    id: number | null,
    username: string | null,
    image: string | null,
    isAuth: boolean,
    token: string | null;
    bgImage: string | null,
    posts: Array<Post>
}

interface Post {
    id: number,
    name: string,
    textareaValue: string
}

const initialState: UserState = {
    id: null,
    username: null,
    image: null,
    isAuth: false,
    bgImage: null,
    token: null,
    posts: []
}

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser(state, action) {
            state.id = action.payload.id
            state.username = action.payload.username
            state.image = action.payload.image
            state.isAuth = action.payload.isAuth
            state.token = action.payload.token
            state.bgImage = action.payload.bgImage 
        },
        setLogOut(state) {
            state.id = null
            state.username = null
            state.image = null
            state.isAuth = false
            state.bgImage = null
            state.posts = []
        },
        setPost(state, action) {
            const newPost: Post = {
                id: state.posts.length + 1,
                name: action.payload.name,
                textareaValue: action.payload.textareaValue
            }
            state.posts.push(newPost)
        }
    }
})

export const { setUser, setLogOut, setPost } = userSlice.actions
export default userSlice.reducer
