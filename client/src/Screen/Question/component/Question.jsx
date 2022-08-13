import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import Split from "react-split";

let cpp = '#include<iostream>\nusing namespace std;\nint main()\n{\ncout<<"Hello World";\n}\n';
let java = 
`import java.util.*;
import java.lang.*;
import java.io.*;

/* Name of the class has to be "Main" only if the class is public. */
class Codechef
{
  public static void main (String[] args) throws java.lang.Exception
  {
    // your code goes here
  }
}`
let python = `# cook your dish here`
let c = 
`#include <stdio.h>

int main(void) {
  // your code goes here
  return 0;
}`

export default function Question() {
  const [code, setcode] = useState(c);
  const [lang, setlang] = useState("cpp");
  return (
    <Split class="d-flex" style={{height: 'calc(100vh - 4rem'}}>
      <div>
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
      <div>
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
              {lang}
            </button>
            <div
              class="dropdown-menu"
              aria-labelledby="dropdownMenuOutlineButton6"
            >
              <a class="dropdown-item" onClick={()=>{setcode(c); setlang("c")}} href="#">
                C
              </a>
              <a class="dropdown-item" onClick={()=>{setcode(cpp); setlang("cpp")}} href="#">
                CPP
              </a>
              <a class="dropdown-item" onClick={()=>{setcode(python); setlang("python")}} href="#">
                PYTHON
              </a>
              <a class="dropdown-item" onClick={()=>{setcode(java); setlang("java")}} href="#">
                JAVA
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
          language={lang}
          value={code}
          theme={"vs-dark"}
        />
      </div>
    </Split>
  );
}
