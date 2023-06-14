import React from "react";
import propTypes from "prop-types";

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  state = {
    value: 0,
  };

  handleKurang = () => {
    this.setState({ value: this.state.value - 1 });
  };

  handleTambah = () => {
    this.setState({ value: this.state.value + 1 });
  };

  render() {
    return (
      <div>
        <h1 style={{ color: "red" }}>Komponen ini dibuat dengan Class Component</h1>
        <h2>
          Hello, Nama saya : {this.props.name} | {this.props.message}
        </h2>

        <button onClick={this.handleKurang}>Dikurangi</button>
        <span style={{ margin: "0px 8px" }}>{this.state.value}</span>
        <button onClick={this.handleTambah}>Ditambah</button>
      </div>
    );
  }
}

ClassComponent.defaultProps = {
  name: "Nana",
};

ClassComponent.propTypes = {
  message: propTypes.string.isRequired,
};

export default ClassComponent;
