import React from "react";
import Table from "../../../Component/Table";

export default function PracticeComponent(props) {
  return (
    <div align={"center"}>
    <h3 className="mt-5">Try Hard Coder</h3>
     <Table data={props.data}/>
  </div>
  );
}