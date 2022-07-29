import React from "react";
import placeholder from "./placeholder.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import placeholderImage from "./placeholderImage02.jpg";

function Card(props) {
  return (
    <div>
      <div className="main-container" key={props.item.id}>
        <div className="main-image">
          <img
            src={props.item.imageUrl ? props.item.imageUrl : placeholderImage}
            alt=""
            className="location-img"
          />
        </div>
        <div className="main-info">
          <div className="location-container">
            <img className="placeholder-logo" src={placeholder} alt="" />
            <div className="location-sub-container">
              <p className="location">{props.item.location}</p>
              <a href={props.item.googleMapsUrl}>View on Google Maps</a>
            </div>
          </div>
          <h1 className="title">{props.item.title}</h1>
          <h4 className="dates">
            {props.item.startDate} - {props.item.endDate}
          </h4>
          <p className="description">{props.item.description}</p>
        </div>

        <FontAwesomeIcon
          onClick={() => props.handledelete(props.item.id)}
          icon={faX}
        />
      </div>
    </div>
  );
}

export default Card;
