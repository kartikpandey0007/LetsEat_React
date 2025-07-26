import React, { useState, useEffect } from 'react';

const User = () => {
    const[user, setUser] = useState({})


    useEffect(()=>{
        fetchData();
    },[])

    const fetchData = async () =>{
        const Data = await fetch("https://api.github.com/users/kartikpandey0007");
        const json = await Data.json();
        setUser(json);
    }


    return (
           <div className="user-card">
            <h2>Name: Kartik Pandey</h2>
            <h3>Loacation: {user.login}</h3>
            <h4>Conatct : kartikkpandey321@gmail.com</h4>
           </div>
    );
}

export default User;