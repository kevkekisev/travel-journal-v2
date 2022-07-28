import React from "react";
import placeholder from "./placeholder.png";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faX } from "@fortawesome/free-solid-svg-icons";
import placeholderImage from "./placeholderImage02.jpg";

function Card(props) {
  const updatedData = props.data;
  const [newEntry, setNewEntry] = useState(updatedData);
  function removeEntry(id) {
    const removeArr = [
      ...newEntry.filter(function (entry) {
        return entry.id !== id;
      }),
    ];
    setNewEntry((prevState) => {
      return {
        updatedData,
        ...removeArr,
      };
    });
  }
  console.log(updatedData);
  console.log(newEntry);
  const newDataEntry = newEntry.map(function (item) {
    return (
      <div>
        <div className="main-container" key={item.id}>
          <div className="main-image">
            <img
              src={item.imageUrl ? item.imageUrl : placeholderImage}
              alt=""
            />
          </div>
          <div className="main-info">
            <div className="location-container">
              <img className="placeholder-logo" src={placeholder} alt="" />
              <p className="location">{item.location}</p>
              <a href={item.googleMapsUrl}>View on Google Maps</a>
            </div>
            <h1 className="title">{item.title}</h1>
            <h4 className="dates">
              {item.startDate} - {item.endDate}
            </h4>
            <p className="description">{item.description}</p>
          </div>

          <FontAwesomeIcon onClick={() => removeEntry(item.id)} icon={faX} />
        </div>
      </div>
    );
  });
  return newDataEntry;
}

export default Card;
