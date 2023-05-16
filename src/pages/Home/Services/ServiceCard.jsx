import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ServiceCard = ({ service }) => {
  const { _id, title, img, price } = service;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={img} alt="Shoes" className="rounded-xl" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>

        <div className="card-actions">
          <p className="text-orange-500 font-bold">Price: ${price}</p>
          <Link to={`services/${_id}`}>
            <button className="btn btn-xs bg-orange-500 text-white">
              --&gt;
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
