import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Board extends React.Component {

  render() {
    const totalRows = [1, 2, 3];
    console.log(totalRows)

    return (
      <div className="row-1">
        {/* {data.map((num) => (
          <Square value={num} />
        ))} */}
        {
          totalRows.map((num) => {
            return <div key={num} className={`row-${num}`}>
              <Row row={totalRows} />
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
