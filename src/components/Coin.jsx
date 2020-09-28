import React from "react";
import { Link } from "react-router-dom";

const Coin = ({ coin, deleteCoin }) => {
  return (
    <Link to={`/coins/${coin.id}`} className="text-decoration-none my-1 coin">
      <li className="coinlist-item list-group-item list-group-item-action
      d-flex justify-content-between align-items-center text-dark">

        <img className="coinlist-image" src={ coin.image } alt="" />
        <span className="text-decoration-none">{ coin.current_price }</span>

        <span
          className={
            coin.price_change_percentage_24h < 0
              ? "text-danger mr-2"
              : "text-success mr-2"
          }
        >
          {" "}
          {coin.price_change_percentage_24h < 0 ? (
            <i className="fa fa-sort-down"></i>
          ) : (
            <i className="fa fa-sort-up"></i>
          )}
          {coin.price_change_percentage_24h}
        </span>
        <i
          className="delete-icon fa fa-times-circle text-danger"
        ></i>
      </li>
    </Link>
  );
};

export default Coin;
