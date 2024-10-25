import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Form = ({ buttonName }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        
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
            console.log('Form submitted:', { email, password });
        }
    };

    return (
        <div className="form-wrapper">
            <form className="form-container" onSubmit={handleSubmit} noValidate>
                <div className="input-group">
                    <label htmlFor="email2">Your email</label>
                    <input
                        id="email2"
                        type="email"
                        placeholder="name@domain.com"
                        required
                        className="input-field"
                        autoComplete='off'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    {errors.email && <span className='error'>{errors.email}</span>}
                </div>
                <div className="input-group">
                    <label htmlFor="password2">Your password</label>
                    <input
                        id="password2"
                        type="password"
                        required
                        className="input-field"
                        autoComplete='on'
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
                        autoComplete='off'
                        value={repeatPassword}
                        onChange={(e) => setRepeatPassword(e.target.value)}
                    />
                    {errors.repeatPassword && <span className='error'>{errors.repeatPassword}</span>}
                </div>
                <div className="checkbox-group">
                    <input type="checkbox" id="agree" required />
                    <label htmlFor="agree">
                        I agree with the&nbsp;
                        <Link to="/terms"><span href="#" className="terms-link">
                            terms and conditions
                        </span></Link>
                    </label>
                </div>
                <button type="submit" className="submit-button">{buttonName}</button>
                
                <div className="login-prompt">
                    <p>Do not have an account? <Link to="/signup" className="login-link">Sign Up</Link></p>
                </div>
            </form>
        </div>
    );
};

export default Form;
