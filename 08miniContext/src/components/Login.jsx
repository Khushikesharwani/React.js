import React, { useState, useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import UserContext from '../context/UserContext';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const { setUser } = useContext(UserContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        setUser({ username, password });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };

    return (
        <div>
            <h2>Login</h2>
            <input
                type='text'
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder='username'
            />
            {" "}
            <div style={{ position: 'relative' }}>
                <input
                    type={showPassword ? 'text' : 'password'}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder='password'
                />
                <FontAwesomeIcon
                    icon={showPassword ? faEyeSlash : faEye}
                    onClick={togglePasswordVisibility}
                    style={{
                        position: 'absolute',
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        cursor: 'pointer'
                    }}
                />
            </div>
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
}

export default Login;
