import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Board extends React.Component {

  render() {
    const totalRows = [
      {id: 1, content: [1, 2, 3]},
      {id: 2, content: [4, 5, 6]},
      {id: 2, content: [7, 8, 9]},
    ]; // for tic tac toe we need 3 rows

    return (
      <div className="board">
        {
          totalRows.map((indv_row) => {
            return <div key={indv_row.id} className={`row-${indv_row.id}`}>
              <Row row={indv_row.content.map(x => x)} />
            </div>
          })
        }
      </div>

    );
  }

}

class Square extends React.Component {
  render() {
    return (
      <button className="square">
        {this.props.value}
      </button>
    );
  }
}

class Row extends React.Component {
  render() {
    var arr = Array.from(this.props.row)
    console.log(arr)
    return (
      <div key={arr.id}>
        {arr.map((post) =>
          <Square value={post} />
        )}
      </div >
    );

  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Board />;
root.render(element);
