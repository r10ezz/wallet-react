import React, { useState } from 'react';
import { Link } from 'react-router-dom'; 

const SignupForm = ({ buttonName }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};

        if (!username) {
            newErrors.username = 'Username is required';
        }

        if (!email) {
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Email is invalid';
        }

        if (!password) {
            newErrors.password = 'Password is required';
        } else if (password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }

        if (!repeatPassword) {
            newErrors.repeatPassword = 'Please repeat your password';
        } else if (repeatPassword !== password) {
            newErrors.repeatPassword = 'Passwords do not match';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (validate()) {
            console.log('Signup form submitted:', { username, email, password });
        }
    };

    return (
        <div className="form-wrapper">
            <form className="form-container" onSubmit={handleSubmit} noValidate>
                <div className="input-group">
                    <label htmlFor="username">Username</label>
                    <input
                        id="username"
                        type="text"
                        placeholder="Your username"
                        required
                        className="input-field"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    {errors.username && <span className='error'>{errors.username}</span>}
                </div>
                <div className="input-group">
                    <label htmlFor="email">Your email</label>
                    <input
                        id="email"
                        type="email"
                        placeholder="name@domain.com"
                        required
                        className="input-field"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <span className='error'>{errors.email}</span>}
                </div>
                <div className="input-group">
                    <label htmlFor="password">Your password</label>
                    <input
                        id="password"
                        type="password"
                        required
                        className="input-field"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    {errors.password && <span className='error'>{errors.password}</span>}
                </div>
                <div className="input-group">
                    <label htmlFor="repeat-password">Repeat password</label>
                    <input
                        id="repeat-password"
                        type="password"
                        required
                        className="input-field"
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                    />
                    {errors.repeatPassword && <span className='error'>{errors.repeatPassword}</span>}
                </div>
                <div className="checkbox-group">
                    <input type="checkbox" id="agree" required />
                    <label htmlFor="agree">
                        I agree with the&nbsp;
                        <a href="#" className="terms-link">
                            terms and conditions
                        </a>
                    </label>
                </div>
                <button type="submit" className="submit-button">{buttonName}</button>
                <div className="login-prompt">
                    <p>Already have an account? <Link to="/login" className="login-link">Log in</Link></p>
                </div>
            </form>
        </div>
    );
};

export default SignupForm;
