import React, { useState } from "react";
import Editor from "@monaco-editor/react";

let cpp =
  '#include<iostream>\nusing namespace std;\nint main()\n{\ncout<<"Hello World";\n}\n';
export default function Question() {
  const [code, setcode] = useState(cpp);
  const [lang, setlang] = useState("cpp");
  return (
    <div class="d-flex">
      <div style={{flex:6}}>
        <h2>Two Sum</h2>
        <p>
          Given an array of integers nums and an integer target, return indices
          of the two numbers such that they add up to target. You may assume
          that each input would have exactly one solution, and you may not use
          the same element twice. You can return the answer in any order.
        </p>
        <div>
            <div className="mb-2">
                <h4>Example 1:</h4>
                <div style={{margin:"0 0.5rem",background:"#12151e",padding:"10px",borderRadius:"10px"}}>
                    <div className="d-flex align-items-center">
                    <h5>Input:</h5><label>nums = [2,7,11,15], target = 9</label>
                    </div>
                    <div className="d-flex align-items-center">
                    <h5>Output:</h5><label>[0,1]</label>
                    </div>
                </div>
            </div>
            <div className="mb-2">
                <h4>Example 2:</h4>
                <div style={{margin:"0 0.5rem",background:"#12151e",padding:"10px",borderRadius:"10px"}}>
                    <div className="d-flex align-items-center">
                    <h5>Input:</h5><label>nums = [2,7,11,15], target = 9</label>
                    </div>
                    <div className="d-flex align-items-center">
                    <h5>Output:</h5><label>[0,1]</label>
                    </div>
                </div>
            </div>
        </div>
      </div>
      <div style={{flex:6}}>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            padding: "0.5rem 0",
          }}
        >
          <div class="dropdown">
            <button
              class="btn btn-outline-info dropdown-toggle"
              type="button"
              id="dropdownMenuOutlineButton6"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown
            </button>
            <div
              class="dropdown-menu"
              aria-labelledby="dropdownMenuOutlineButton6"
            >
              <h6 class="dropdown-header">Settings</h6>
              <a class="dropdown-item" href="#">
                Action
              </a>
              <a class="dropdown-item" href="#">
                Another action
              </a>
              <a class="dropdown-item" href="#">
                Something else here
              </a>
              <div class="dropdown-divider"></div>
              <a class="dropdown-item" href="#">
                Separated link
              </a>
            </div>
          </div>
          <button className="btn btn-success">Run Code</button>
        </div>
        <Editor
          height="80vh"
          width="100%"
          defaultLanguage={lang}
          defaultValue={code}
          theme={"vs-dark"}
        />
      </div>
    </div>
  );
}
