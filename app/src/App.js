import React from 'react';
import ReactDOM from 'react-dom';
import { Link } from '@reach/router';
import Expression from './Expression';
import ExpressionList from './ExpressionList';

import 'bootstrap/dist/css/bootstrap.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      evaluatedExpressions: [],
    };
  }

  handleSubmit = (expression) => {
    this.setState({
      evaluatedExpressions: [expression, ...this.state.evaluatedExpressions],
    });
    if (this.state.evaluatedExpressions.length > 4)
      this.state.evaluatedExpressions.pop();
  };

  render() {
    return (
      <div className="wrapper">
        <div className="card frame">
          <div className="card-header">
            <h1 className="card-header-title header">
              <Link to="/">SuprNation Calculator</Link>
            </h1>
          </div>
          <Expression onFormSubmit={this.handleSubmit} />
          <ExpressionList expressions={this.state.evaluatedExpressions} />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
