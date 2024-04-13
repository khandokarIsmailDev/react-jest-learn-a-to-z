import React, { useState } from "react";


const Form = () => {
    const [data,setData] = useState('')

  return (
    <div className="App">
      <input
        type="text"
        value={data}
        onChange={(e) => setData(e.target.value)}
      />
    </div>
  );
};

export default Form;
