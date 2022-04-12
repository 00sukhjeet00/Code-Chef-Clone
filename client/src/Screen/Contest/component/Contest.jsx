import React, { useState } from "react";

export default function ContestComponent() {
  const [tab, setTab] = useState(0)
  return (
    <div>
      <ul className="nav nav-pills nav-fill">
        <li className="nav-item">
          <button
            className={`nav-link ${tab === 0 && "active"}`}
            onClick={() => {
              setTab(0);
            }}
          >
            Past
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${tab === 1 && "active"}`}
            aria-current="page"
            onClick={() => {
              setTab(1);
            }}
          >
            Active
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${tab === 2 && "active"}`}
            onClick={() => {
              setTab(2);
            }}
          >
            Upcoming
          </button>
        </li>
      </ul>
    </div>
  );
}
