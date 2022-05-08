import React from "react";
import { useParams } from "react-router-dom";
import useServiceDetail from "../../hooks/useServiceDetail";

const Checkout = () => {
  const { serviceId } = useParams();
  const [service] = useServiceDetail(serviceId);
  return (
    <div className="w-50 mx-auto">
      <h1>Please Order:{service.name}</h1>
      <form>
        <input
          className="w-100 mb-2"
          type="text"
          name="name"
          placeholder="Name"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="email"
          value={service.name}
          name="email"
          placeholder="Email"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="service"
          placeholder="Service"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="address"
          placeholder="Address"
          required
        />
        <br />
        <input
          className="w-100 mb-2"
          type="text"
          name="phone"
          placeholder="Phone"
          required
        />
        <input className="btn btn-dark" type="submit" value="Place Order" />
      </form>
    </div>
  );
};

export default Checkout;
