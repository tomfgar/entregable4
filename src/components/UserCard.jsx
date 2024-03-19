import React from "react";

const UserCard = ( {user, deleteUser, setUserEdit, handleOpenForm} ) => {
    
    const handleDelete = () => {
     deleteUser('/users/', user.id)
    }
    
    const handleEdit = () => {
        setUserEdit(user)
        handleOpenForm()
    }

    return(
        <article>
        <h2>{`${user.first_name} ${user.last_name}`}</h2>
        <ul>
            <li><span>Email: </span><span>{user.email}</span></li>
            <li><span>Birthday: </span><span>{user.birthday}</span></li>
        </ul> 
        <button onClick={handleEdit}>Edit</button>
        <button onClick={handleDelete}>Delete</button>
        </article>
    )
}

export default UserCard