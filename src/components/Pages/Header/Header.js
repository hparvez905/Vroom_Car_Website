import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from '../../Shared/Navbar/Navbar';
import './Header.css'

const Header = () => {
    return (
        <div className='header  text-white'>
           <div className='container'>
           <div>
                <h1 className='text'><span className="text-warning">PREMIUM</span> AND <span className="text-warning">DREAM CARS</span>  </h1>
                <p> <span className="text-danger">WE SERVE YOU  LIKE A  KING </span> </p>
                <Link to="/vehicles">
                    <button className="btn btn-primary me-2 fw-bold">
                      VEHICLES
                    </button>
                  </Link>
            </div>
            <div>
                <img className='w-50 my-auto align-middle float-end ' src="https://unicoderbd.com/theme/html/chaka/assets/images/slider/car.png" alt="" />
            </div>
           </div>
        </div>
    );
};

export default Header;