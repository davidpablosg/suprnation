import React from 'react';

class InvalidExpression extends React.Component {
  render() {
    if (!this.props.show) {
      return null;
    }
    return (
      <div className="alert alert-danger" role="alert">
        The expression introduced is not valid
      </div>
    );
  }
}

export default InvalidExpression;
