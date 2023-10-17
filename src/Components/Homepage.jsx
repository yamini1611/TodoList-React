import React from "react";
import Homeimg from './Assets/Images/home.png';
import video from './Assets/Images/video.mp4'
import '../Components/Styles/Home.css'
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const handlelist = () => {
        navigate('/ToDo');
    }
    return (
        <div id="home" >
            <div className="row">
                <div className="col-5 mt-4">
                    <video className="video" autoPlay loop muted id="home-bg-video">
                        <source src={video} type="video/mp4"></source>
                    </video>
                    {/* <img src={Homeimg} className="h-75"></img>      */}
                </div>
                <div className="col-7 mt-5">
                    <h3 className="mt-5 pt-5 me-5" id="text">Organize your work and life, finally.</h3>
                    <h5 id="secondtext" className="mt-3">Become more focused , organised with our To do list app</h5>
                    <Button className="btn-dark" onClick={handlelist}>Create List</Button>
                </div>
            </div>
        </div>
    )
}

export default Home;