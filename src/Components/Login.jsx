import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './Styles/Login.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Auth } from './ContextProvider/Provider';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);
    const Navigate = useNavigate();
    const {loginUser} = Auth();
    const encryptPassword = (password) => {
        return password.split('').reverse().join('');
    };
    const navigate = useNavigate();

    const isAuthenticated = () => {
        const user = sessionStorage.getItem("Id");
        return !!user;
    };

    useEffect(() => {
        if (isAuthenticated()) {
            navigate("/");
        }
    }, [navigate]);

    const handleLogin = async () => {
        try {
            const response = await axios.post('https://localhost:44353/api/Auth/Users', {
                email: email,
                password: password,
            });
            if (response.status === 200) {
                const token = response.data.token;
                const uname = response.data.username;
                sessionStorage.setItem('uname' ,uname);
                localStorage.setItem('token' ,token);
                console.log('user details', response.data);
                Navigate('/');
                const userid = response.data.id;
                sessionStorage.setItem("Id",userid);
                loginUser(response.data);
                toast.success('Logged in Successfully!');
            }

            else {
                setError('Invalid email or password');
            }
        } catch (error) {
            console.error('API request failed:', error);
            setError('Invalid email or password');
        }
    };
    return (
        <div className="container" id="reg">
            <section className="d-flex justify-content-center align-items-center">
                <div className="row">
                    
                    {/* Form column */}
                    <div className="col-lg-5 mt-5 col-12 p-4">
                        <form>
                            <h3 className="fw-normal mb-3 pb-2 text-center">SIGN IN</h3>
                            <div className="mb-3">
                                <label className="form-label">Email</label>
                                <input
                                    type="email"
                                    id="form2Example18"
                                    className="form-control"
                                    placeholder='Enter Email'
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Password</label>
                                <input
                                    type="password"
                                    id="form2Example19"
                                    className="form-control"
                                    placeholder='Enter Password'
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </div>
                            {error && <p className="text-danger text-center">{error}</p>}
                            <div className="mb-3">
                                <button
                                    className="btn btn-info btn-block"
                                    type="button"
                                    onClick={handleLogin}
                                >
                                    Login <i className="fa-solid fa-right-to-bracket"></i>
                                </button>
                            </div>
                            <p>
                                Don't have an account?{' '}
                                <Link to="/Register" className="link-info" id="link">
                                    Register here
                                </Link>
                            </p>
                        </form>
                    </div>
                    {/* Image column */}
                    <div className="col-lg-7 d-none d-lg-block p-0">
                        <img
                            src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7883.jpg?size=626&ext=jpg&ga=GA1.1.99625817.1684863857&semt=ais" alt="Login"
                            className="w-100 img-fluid"
                        />
                    </div>
                </div>
            </section>
            <ToastContainer
                position="top-right"
                autoClose={2000}
                hideProgressBar
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                theme="dark"
            />
        </div>
    );
};

export default Login;