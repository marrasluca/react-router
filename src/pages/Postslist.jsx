import axios from "axios";
import { useEffect, useState } from "react";


const PostsList = () => {

    const [posts, setPosts] = useState([]);

    const url = import.meta.env.VITE_ENDPOINT_URL

    useEffect( () => {
        axios.get( '')
    })

    return (
        <h1>Lista Posts</h1>
    )
    
}

export default PostsList