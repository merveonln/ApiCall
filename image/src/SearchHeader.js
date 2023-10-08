import { useState } from "react";

function SearchHeader({ Search }) {
  const [valueInput, setValue] = useState("");
  const handleFormSubmit = (event) => {
    event.preventDefault();
    debugger;
    Search(valueInput);
  };

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <div className="searchDiv">
      <form onSubmit={handleFormSubmit}>
        <label>Ne Arıyorsunuz?</label>
        <input value={valueInput} onChange={handleChange} />
        {/* <div>{valueInput}</div> */}
      </form>
    </div>
  );
}

export default SearchHeader;
