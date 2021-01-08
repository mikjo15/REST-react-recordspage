import React from "react";
import Add from "./Add";

function Header() {
  return (<div>
      <div className="bg-header p-4 mb-5">
        <h1 className="text-header">RECORDS</h1>
      </div>
      <Add />
    </div>
  )
}

export default Header;
