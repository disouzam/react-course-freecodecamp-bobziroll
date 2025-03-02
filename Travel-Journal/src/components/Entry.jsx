import React from "react";

const Entry = () => {
  return (
    <>
      <img
        src="https://scrimba.com/links/travel-journal-japan-image-url"
        alt="Mount Fuji, Japan"
        height="200px"
      ></img>
      <img src="marker.png" alt="maps' marker"></img>
      <small>JAPAN</small>
      <a
        href="https://www.google.com/maps/place/Mount+Fuji/@35.3606421,138.7170637,15z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
        target="_blank"
        rel="noreferrer"
      >
        View on Google Maps
      </a>
      <h1>Mount Fuji</h1>
      <h2>12 Jan, 2021 - 24 Jan, 2021</h2>
      <p>
        Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters
        (12,380 feet). Mount Fuji is the single most popular tourist site in
        Japan, for both Japanese and foreign tourists.
      </p>
    </>
  );
};

export default Entry;
