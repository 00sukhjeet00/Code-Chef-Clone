import React from "react";

export default function Table(props) {
  return (
    <table class="table table-hover table-dark">
      <thead>
        <tr>
          {props.data.header.map((heading) => (
            <th scope="col" key={heading}>
              {heading}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data.body.map((data) => (
          <tr>
              {
                  props.data.header.map(heading=>(
                      <td>{data?.[heading]}</td>
                  ))
              }
          </tr>
        ))}
      </tbody>
    </table>
  );
}
