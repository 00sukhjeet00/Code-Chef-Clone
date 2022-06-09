import React from "react";

export default function Table(props) {
  return (
    <div class=" grid-margin stretch-card">
      <div class="card">
        <div class="card-body">
          {/* <h4 class="card-title">Hoverable Table</h4>
                    <p class="card-description"> Add class <code>.table-hover</code>
                    </p> */}
          <div class="table-responsive">
            <table class="table table-hover">
              <thead>
                <tr>
                  {props.data.header.map((heading) => (
                    <th style={{textTransform:"uppercase"}}>{heading}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {props.data.body.map((data) => (
                  <tr>
                    {props.data.header.map(heading=>(
                      <td>{data?.[heading]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

