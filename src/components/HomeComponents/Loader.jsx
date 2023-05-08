import React from "react";
import "./Loader.css";

function Loader() {
  return (
    <div className="flex items-center justify-center">
      <div class="loader">
        <div class="dot"></div>
      </div>
      <div class="loader">
        <div class="dot"></div>
      </div>
      <div class="loader">
        <div class="dot"></div>
      </div>
      <div class="loader">
        <div class="dot"></div>
      </div>
      <div class="loader">
        <div class="dot"></div>
      </div>
      <div class="loader">
        <div class="dot"></div>
      </div>
    </div>
  );
}

export default Loader;
