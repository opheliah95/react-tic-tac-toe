import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

class Board extends React.Component {

  render() {
    const data = [1, 2, 3];
    console.log(data)

    return (
      <div className="row-1">
        {data.map((num) => (
          <button>{num}</button>
        ))}
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


const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Board />;
root.render(element);