import React, { useState } from 'react';
import './LoginFormStyles.css'
import axios from 'axios';

// import AdminNavbar2 from "../components/AdminNavbar2"


const LoginForm = ({ onAuth }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3000/api/login', { username, password });
      localStorage.setItem('token', res.data.token);
      onAuth();
    } catch (err) {
      setError('Invalid credentials');
    }
  };

 

return (
    <form className="form-design" onSubmit={handleSubmit}>
    
      <p className='form-1'>Administrator Panel</p>
      {error && <p>{error}</p>}
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="btns-design" type="submit">Login</button>
    </form>
  );
};

export default LoginForm;


// import React, { useState } from 'react';
// import './LoginFormStyles.css'
// import axios from 'axios';

// // import AdminNavbar2 from "../components/AdminNavbar2"


// const LoginForm = ({ onAuth }) => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState(null);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const res = await axios.post('http://localhost:3000/api/login', { username, password });
//       localStorage.setItem('token', res.data.token);
//       onAuth();
//     } catch (err) {
//       setError('Invalid credentials');
//     }
//   };

 

// return (
//     <form className="form-design" onSubmit={handleSubmit}>
    
//       <p className='form-1'>Administrator Panel</p>
//       {error && <p>{error}</p>}
//       <input
//         type="text"
//         placeholder="Username"
//         value={username}
//         onChange={(e) => setUsername(e.target.value)}
//       />
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//       />
//       <button className="btns-design" type="submit">Login</button>
//     </form>
//   );
// };

// export default LoginForm;
