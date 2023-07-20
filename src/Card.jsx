import React from "react";

export default function Card({ item }) {
  return (
    <>
      <div className="card">
        <img className="loc-img" src={item.imageUrl} />
        <div className="loc-info">
          <div className="loc-header">
            <img src="../src/assets/location.png" alt="location-icon" />
            <h3>{item.location}</h3>
            <h4>View on google maps</h4>
          </div>
          <h2 className="title">{item.title}</h2>
          <p className="date">{`${item.startDate} - ${item.endDate}`}</p>
          <p className="info">{item.description}</p>
        </div>
      </div>
      <hr />
    </>
  );
}
