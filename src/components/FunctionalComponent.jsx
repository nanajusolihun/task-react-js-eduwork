import { useState } from "react";
import propTypes from "prop-types";

function FunctionComponent({ name, message }) {
  const [value, setValue] = useState(0);

  const handleMinus = () => {
    setValue(value - 1);
  };
  const handlePlus = () => {
    setValue(value + 1);
  };

  return (
    <div>
      <h1 style={{ color: "blue" }}>Komponen ini dibuat dengan Functional Component</h1>
      <h2>Hello, Nama saya : {name} | {message}</h2>

      <button onClick={handleMinus}>Dikurangi</button>
      <span style={{ margin: "0px 8px" }}>{value}</span>
      <button onClick={handlePlus}>Ditambah</button>
    </div>
  );
}

FunctionComponent.defaultProps = {
  name: "El Rahma",
};

FunctionComponent.propTypes = {
  message: propTypes.string.isRequired,
};

export default FunctionComponent;
