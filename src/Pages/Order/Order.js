import { signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import axiosPrivate from "../../api/axiosPrivate";
import auth from "../../firebase.init";

const Order = () => {
  const [user] = useAuthState(auth);
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const getOrders = async () => {
      const email = user?.email;
      const url = `https://safe-cliffs-37248.herokuapp.com/order?email=${email}`;
      try {
        const { data } = await axiosPrivate.get(url);
        setOrders(data);
      } catch (error) {
        console.log(error);
        if (error.response.status === 401 || error.response.status === 403) {
          signOut(auth);
          navigate("/login");
        }
      }
    };
    getOrders();
  }, [user]);
  return (
    <div className="text-center text-success">
      <h2>Your Order:{orders.length}</h2>
      {orders.map((order) => (
        <div>
          <h3>
            {order.email}: {order.service}
          </h3>
          <button className="btn btn-dark">Book</button>
        </div>
      ))}
    </div>
  );
};

export default Order;
