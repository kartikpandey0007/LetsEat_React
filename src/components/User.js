import React, { useState, useEffect } from 'react';

const User = () => {
  const [user, setUser] = useState({});

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const Data = await fetch("https://api.github.com/users/kartikpandey0007");
    const json = await Data.json();
    setUser(json);
  };

  return (
    <div className="user-card bg-white shadow-lg p-6 m-4 rounded-xl border border-gray-200 max-w-sm text-center">
      <h2 className="text-2xl font-semibold mb-2">Name: Kartik Pandey</h2>
      <h3 className="text-lg text-gray-600 mb-1">GitHub Login: {user.login}</h3>
      <h4 className="text-md text-gray-500">Contact: kartikkpandey321@gmail.com</h4>
    </div>
  );
};

export default User;
