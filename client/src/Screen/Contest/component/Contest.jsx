import React, { useState } from "react";
import Table from "../../../Component/Table";

export default function ContestComponent(props) {
  return (
    <div align={"center"}>
      <h3 className="mt-5">Upcoming Contest</h3>
       <Table data={props.data}/>
    </div>
  );
}
