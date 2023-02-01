import React, {FC} from 'react';
import {IUser} from "../types/types";
interface UserItemProps {
    user: IUser;

}
const UserItem: FC<UserItemProps> = ({user}) => {
    return (
        <div>
            <div style={ {padding:'15px', border: 'solid grey 3px', margin: '10px'} }>
                {user.id} {user.name} live in the city {user.address.city} on the street {user.address.street}
            </div>
        </div>
    );
};

export default UserItem;