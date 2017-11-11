import React, { Component } from "react";
import PropTypes from "prop-types";

export default class TextInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: "",
      paragraphText: "",
    };

    this.handleInput = this.handleInput.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleInput(e) {
    this.setState({
      text: e.target.value,
    });
  }

  handleClick(e) {
    this.setState({
      paragraphText: this.state.text,
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
        <button onClick={this.handleClick}>Click me!</button>
        <p>{this.state.paragraphText}</p>
      </div>
    );
  }
}
TextInput.propTypes = {
  placeholder: PropTypes.string.isRequired,
};
