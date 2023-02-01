import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import axios from "axios";
import {useParams} from "react-router-dom";

interface UserItemPageParams {
    id: string;
}
const TodoItemPage:FC = () => {
    const [user, setUser] = useState<IUser | null>(null)
    // @ts-ignore
    const params = useParams<UserItemPageParams>()


    useEffect(() => {
        fetchUser();
    },[])
    async function fetchUser()  {
        try {
            const response = await axios.get<IUser>('https://jsonplaceholder.typicode.com/users' + params.id)
            setUser(response.data)
        } catch (e){
            alert(e)
        }
    }
    return (
        <div>
            
        </div>
    );
};

export default TodoItemPage;