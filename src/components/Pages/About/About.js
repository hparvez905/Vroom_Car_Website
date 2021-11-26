import React from "react";
import "./About.css";
const About = () => {
  return (
    <div>
        <h1 className='text-center'><span className='text-primary'>About Us</span> </h1>
        <div className="aboutBody">
      <div className="container row">
        <div className="col-12 col-lg-4 col-md-12 text-end">
          <div>
            <h3><span className="text-danger">Experience support team</span></h3>
            <p>
              Want to learn more about Experience Management? Complete the form
              below and we will reach out to connect. Looking for support or
              customer service?
            </p>
          </div>
          <div>
            <h3><span className="text-danger">Handle emergency situations</span></h3>
            <p>
              When an emergency occurs · Take a deep breath. · Count to 10. Tell
              yourself you can handle the situation. · Check for danger
            </p>
          </div>
          <div>
            <h3><span className="text-danger">Insurance Included</span></h3>
            <p>
              While different states mandate different types of insurance and
              there are several additional options (such as gap insurance)
              available
            </p>
          </div>
        </div>
        <div className="col-12 col-lg-4 col-md-12 text-center my-auto">
          <img
            className="w-75"
            src="https://cdn.discordapp.com/attachments/908120242478264380/908120262317342740/4.png"
            alt=""
          />
        </div>
        <div className="col-12 col-lg-4 col-md-12 ">
          <div>
            <h3><span className="text-danger">Hight technology instrument</span></h3>
            <p>
              HEATERS. Band, Cartridge, Strip, Tubular, Coil, Immersion, Quartz,
              Radiant Panel, Sprue Bushing, Cup Sealing Heaters, · THERMOCOUPLE
              WIRE. Adjustable, Bayonet
            </p>
          </div>
          <div>
            <h3><span className="text-danger">Access control system</span></h3>
            <p>
              Access control systems are the electronic systems that are
              designed to control through a network and they should have an
              access to a network
            </p>
          </div>
          <div>
            <h3><span className="text-danger">Online 24/7 Available</span></h3>
            <p>
              In commerce and industry, 24/7 or 24-7 service is service that is
              available at any time and ... convenience store,
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default About;
