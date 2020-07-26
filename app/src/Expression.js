import React from 'react';
import ErrorBoundary from './ErrorBoundary';
import InvalidExpression from './InvalidExpression';

const API_ROUTE = 'http://localhost:3000/api';
const VALIDATE_ROUTE = API_ROUTE + '/validate/';
const EVALUATE_ROUTE = API_ROUTE + '/evaluate/';

class Expression extends React.Component {
  constructor(props) {
    super(props);
    this.state = { expression: '', validExpression: true };
    this.timeout = 0;

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    const expression = event.target.value;

    if (this.timeout) {
      clearTimeout(this.timeout);
    }

    this.timeout = setTimeout(() => {
        if (expression) {
          fetch(`${VALIDATE_ROUTE}${expression}`)
            .then((response) => response.json())
            .then((data) => {
                console.log(expression)
              this.setState({ validExpression: data });
            });
        }
    }, 1000);

    this.setState({
      expression: expression,
      validExpression: true
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    if(this.state.expression === '') return;
    fetch(`${EVALUATE_ROUTE}${this.state.expression}`)
      .then((response) => response.json())
      .then((data) => {
        this.props.onFormSubmit({operation: this.state.expression, result: data, id: new Date().getUTCMilliseconds()});
        this.setState({expression: '', validExpression: true});
      });
  }

  render() {
    return (
        <div>
          <InvalidExpression show={!this.state.validExpression}/>
          <form
            className="form"
            onSubmit={this.handleSubmit}
          >
              <input
                className="input"
                placeholder="Introduce a mathematical expression to evaluate"
                value={this.state.expression}
                onChange={this.handleChange}
              />
            <button
                className='button'
                disabled={!this.state.validExpression ? 'disabled': ''}
                >
                Submit
            </button>
          </form>
        </div>
    );
  }
}

export default function ExpressionErrorBoundary(props) {
  return (
    <ErrorBoundary>
      <Expression {...props} />
    </ErrorBoundary>
  );
}
