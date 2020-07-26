import React from 'react';

class ExpressionList extends React.Component {
  render() {
    if (!this.props.expressions.length) return null;
    return (
      <div className="list-wrapper">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Expression</th>
              <th scope="col">Result</th>
            </tr>
          </thead>
          <tbody>
            {this.props.expressions.map((expression) => {
              return (
                <tr key={expression.id}>
                  <td>{expression.operation}</td>
                  <td>{expression.result}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>;

export default ExpressionList;
