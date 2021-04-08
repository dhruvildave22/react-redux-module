import React from "react";
import PropTypes from "prop-types";
import { Alert } from 'antd';

class ErrorDisplay extends React.Component {

  formatError = (e) => {
    let messages = []
    Object.keys(e).forEach(function (key) {
      e[key].forEach(function (element) {
        messages.push(`${key !== 'base' ? key : ''} ${element}`)
      });
    });
    var messageData = messages.map((li) => {
      return (
        <li>{li}</li>
      )
    })
    return (
      <ul>
        {messageData}
      </ul>
    )
  };

  render() {
    const { error } = this.props;
    if (error == null || error === undefined) {
      return '';
    }
    return (
      <Alert message={this.formatError(error)} type="error" style={{ marginBottom: '2em' }} />
    )
  }
}

ErrorDisplay.propTypes = {
  error: PropTypes.object.isRequired,
};

export default ErrorDisplay