import { useEffect, useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://car-doctor-server-five-beta.vercel.app/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);
  return (
    <div>
      <div className="text-center mt-4">
        <h3 className="text-orange-500 text-3xl">Service</h3>
        <h1 className="text-5xl font-bold">Our Service Area</h1>
        <p className="py-6">
          the majority have suffered alteration in some form, by injected
          humour, or <br /> randomised words which do not look even slightly
          believable.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service._id} service={service}></ServiceCard>
        ))}
      </div>

      <div className="text-center my-6">
        <button className="btn btn-outline btn-warning"> More Services</button>
      </div>
    </div>
  );
};

export default Services;
