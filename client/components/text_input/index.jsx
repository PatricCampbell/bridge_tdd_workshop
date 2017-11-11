import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TextInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
    };

    this.handleInput = this.handleInput.bind(this);
  }

  handleInput(e) {
    this.setState({
      text: e.target.value,
    });
  }

  render() {
    const color = this.state.text.length > 10 ? "red" : "";

    return (
      <div>
        <input
          className={color}
          type="text"
          placeholder={this.props.placeholder}
          value={this.state.text}
          onChange={this.handleInput}
        />
        <button />
      </div>
    );
  }
}
TextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
};
