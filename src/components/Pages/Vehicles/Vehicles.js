import React, { useEffect, useState } from "react";
import VehicleCard from "../Vehicle/VehicleCard";

const Vehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  useEffect(() => {
    fetch("https://glacial-mesa-36352.herokuapp.com/vehicles")
      .then((res) => res.json())
      .then((data) => setVehicles(data));
  }, []);
  return (
    <div className="container text-center">
      <h1 className="text-danger">Buy Your Dream Car</h1>
      <p>
        YOU WILL GET BEST trucks, sedans, SUVs, and station wagons to
        hatchbacks, hot rods, and scratched-up street beaters
      </p>
      <div className='row'>
      {vehicles.map((vehicle) => (
        <VehicleCard key={vehicle._id} vehicle={vehicle}></VehicleCard>
      ))}
      </div>
    </div>
  );
};

export default Vehicles;
