import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Board extends React.Component {

  render() {
    const data = [1, 2, 3];
    console.log(data)

    return (
      <div className="row-1">
        {/* {data.map((num) => (
          <Square value={num} />
        ))} */}
        <Row row={data} />
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
    console.log('this is:', this.props.row)
    var arr =Array.from(this.props.row)
    console.log(arr)
    return (
      <div className="rows">
        {arr.map(
          (r) => {
           < var class_name = `row-${r}`;
            <div className='class' key={r}>
              <p>{r}</p>
            </div>>
          }
        )
        }
      </div >

    );

  }
}


const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Board />;
root.render(element);
