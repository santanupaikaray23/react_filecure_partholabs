import React,{Component} from 'react';
import {Link, withRouter} from 'react-router-dom';

class Header extends Component {
  

    render(){
        return(
            <div>
                <nav className="navbar navbar-inverse">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <Link class="navbar-brand" to="/">Lifecure Patholabs</Link>
                        </div>
                        <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/viewBooking">Booking</Link></li>
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                        <li><Link href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                        <li><Link href="#"><span class="glyphicon glyphicon-log-in"></span> Login</Link></li>
                        </ul>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

    //apiCall 
}

export default withRouter(Header);