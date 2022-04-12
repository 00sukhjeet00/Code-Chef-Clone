import React, { useState } from "react";
import Register from "./component/Register";
export default function RegisterScreen() {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [name, setname] = useState("");

  return (
    <>
      <Register
        email={email}
        setemail={setemail}
        password={password}
        setpassword={setpassword}
        name={name}
        setname={setname}
      />
    </>
  );
}
