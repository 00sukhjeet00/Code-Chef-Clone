import React, { useState } from "react";
import Table from "../../../Component/Table";

export default function ContestComponent(props) {
  const [tab, setTab] = useState(0);
  return (
    <div >
      <ul className="nav nav-pills nav-fill m-3"> 
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
      <div>
       <Table data={props.data}/>
      </div>
    </div>
  );
}
