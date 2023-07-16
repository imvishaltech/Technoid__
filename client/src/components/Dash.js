

import React, { useState, useEffect } from 'react';
import LoginForm from './LoginForm';

import Dashboard from './Dashboard';





  
const Dash = () => {
const [isAuth, setIsAuth] = useState(false);

useEffect(() => {
const token = localStorage.getItem('token');
if (token) {
setIsAuth(true);
}
}, []);

const handleAuth = () => {
setIsAuth(true);
}

return (
<div>
{isAuth ? <Dashboard /> : <LoginForm onAuth={handleAuth} />}
</div>
);
};






export default Dash;





