import React from "react";

export default function Loader() {
  return (
    <div
      style={{
        position: "absolute",
        width: "95%",
        height: "90%",
        zIndex: "999",
        background: "#00000095",
      }}
    >
      <div
        class="spinner-border text-info"
        role="status"
        style={{
          width: "5rem",
          height: "5rem",
          marginLeft: "50%",
          marginTop: "20%",
        }}
      >
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  );
}
