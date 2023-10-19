import React from "react";
import video from './Assets/Images/video.mp4';
import '../Components/Styles/Home.css'; 

import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const handlelist = () => {
        navigate('/ToDo');
    };
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5 mt-4">
                    <video className="video" autoPlay loop muted id="home-bg-video">
                        <source src={video} type="video/mp4" />
                    </video>
                </div>
                <div className="col-md-7 mt-5 text-center">
                    <h3 className="mt-5 pt-5 me-md-5 text-center" id="text">
                        Organize your work and life, finally.
                    </h3>
                    <h5 id="secondtext" className="mt-3 text-center">
                        Become more focused, organized with our To-Do list app
                    </h5>
                    <Button className="btn-dark mt-2 mb-5" onClick={handlelist}>
                        Create List
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default Home;
