import React from "react";

export default function PracticeComponent() {
  return (
      <div className="container-fluid row mt-5">
        <div className="col-10">
          <table class="table table-dark table-striped ">
            <thead>
              <tr>
                <th scope="col">Status</th>
                <th scope="col">Title</th>
                <th scope="col">Submission</th>
                <th scope="col">Accuracy</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>-</td>
                <td>The Cheaper Cab</td>
                <td>3648</td>
                <td>54.19</td>
              </tr>
              <tr>
                <td>-</td>
                <td>The Cheaper Cab</td>
                <td>3648</td>
                <td>54.19</td>
              </tr>
              <tr>
                <td>-</td>
                <td>The Cheaper Cab</td>
                <td>3648</td>
                <td>54.19</td>
              </tr>
              <tr>
                <td>-</td>
                <td>The Cheaper Cab</td>
                <td>3648</td>
                <td>54.19</td>
              </tr>
              <tr>
                <td>-</td>
                <td>The Cheaper Cab</td>
                <td>3648</td>
                <td>54.19</td>
              </tr>
            </tbody>
          </table>
          <nav aria-label="Page navigation example ">
            <ul class="pagination justify-content-center">
              <li class="page-item disabled">
                <a class="page-link" href="#" tabindex="-1" aria-disabled="true">Previous</a>
              </li>
              <li class="page-item"><a class="page-link" href="#">1</a></li>
              <li class="page-item"><a class="page-link" href="#">2</a></li>
              <li class="page-item"><a class="page-link" href="#">3</a></li>
              <li class="page-item">
                <a class="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col-2">Blank</div>
      </div>
  );
}