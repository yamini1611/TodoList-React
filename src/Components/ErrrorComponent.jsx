import React, { useEffect } from "react";
import { Link } from "react-router-dom";
const ErrorComponent = () => {
    
    return (
        <div id="errorpage">
            <div className="row" >
                <div className="col-6 justify-content-center">
                    <div className="container m-5 ps-5" >
                        <img className="" src="https://img.freepik.com/free-vector/401-error-unauthorized-concept-illustration_114360-5531.jpg?size=626&ext=jpg&ga=GA1.1.99625817.1684863857&semt=ais" height={500} width={600}></img>
                    </div>
                </div>
                <div className="col-5 mt-4 text-center text-danger">
                  <h2 className="mt-5 pt-5 "  id="errorfw"> You are not Authorized </h2> 
                  <h3 className="mt-2">Login to View the page</h3>
                  <Link to="/Login"><button type="button" className="btn btn-dark">Login</button></Link>
                </div>

            </div>
        </div>

    )
}

export default ErrorComponent;