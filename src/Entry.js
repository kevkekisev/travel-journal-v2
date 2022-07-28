import React, { useState } from "react";
import Card from "./Card";
import data from "./data";

function Entry(props) {
  const [entry, setEntry] = useState([
    {
      title: "",
      location: "",
      googleMapsUrl: "",
      startDate: "",
      endDate: "",
      description: "",
      imageUrl: "",
      id: Math.random() * 100000000,
    },
  ]);
  function handleChange(e) {
    setEntry((prevState) => {
      return {
        ...prevState,
        [e.target.name]: e.target.value,
      };
    });
  }

  console.log(entry);

  function handleSubmit(e) {
    e.preventDefault();

    setEntry((prevState) => {
      return {
        ...prevState,
        id: Math.random() * 10000000,
      };
    });
    data.unshift(entry);
  }

  return (
    <div>
      <form className="entry-form" onSubmit={handleSubmit}>
        <h1 className="entry-title">Add another Travel Memory</h1>
        <div className="journal-entry">
          <input
            className="entry-input"
            type="text"
            value={entry.location}
            name="location"
            placeholder="LOCATION"
            onChange={handleChange}
          />

          <input
            className="entry-input"
            type="text"
            name="title"
            value={entry.title}
            placeholder="LANDMARK"
            onChange={handleChange}
          />
          <input
            className="entry-input"
            type="text"
            name="googleMapsUrl"
            value={entry.googleMapsUrl}
            placeholder="GOOGLE MAPS LINK"
            onChange={handleChange}
          />

          <input
            className="entry-input"
            type="date"
            value={entry.startDate}
            name="startDate"
            onChange={handleChange}
          />
          <input
            className="entry-input"
            type="date"
            value={entry.endDate}
            name="endDate"
            onChange={handleChange}
          />
          <textarea
            className="entry-input"
            placeholder="ADD YOUR STORY OR A FUN FACT FROM  YOUR JOURNEY"
            name="description"
            value={entry.description}
            onChange={handleChange}
          />
          <input
            className="entry-input"
            type="text"
            name="imageUrl"
            value={entry.imageUrl}
            placeholder="ADD A IMAGE LINK TO REMIND YOU OF YOUR TRAVEL"
            onChange={handleChange}
          />
          <button type="submit" className="entry-btn">
            add your travel memory
          </button>
        </div>
      </form>
      <Card data={data} />
    </div>
  );
}

export default Entry;
