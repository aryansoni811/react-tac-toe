import { useState } from "react";

function Square({ value, onSquareClick }) {
  return (
    <>
      <button
        onClick={onSquareClick}
        className="border-black border border-solid h-10 w-10 box-border"
      >
        {value}
      </button>
    </>
  );
}

export default function Board() {
  const [xIsNext, setXIsNext] = useState(true);
  const [square, setSquare] = useState(Array(9).fill(null));

  function handleClick(i) {
    const nextSquares = square.slice();

    if (nextSquares[i] || winner) return;

    if (xIsNext) {
      nextSquares[i] = "x";
      setXIsNext(false);
    } else {
      nextSquares[i] = "o";
      setXIsNext(true);
    }

    setSquare(nextSquares);
  }
  let winner = calculateWinner(square);
  let boardStatus;
  if (winner) {
    boardStatus = "Winner: " + winner;
  } else {
    boardStatus = "Next player: " + (xIsNext ? "X" : "O");
  }
  return (
    <>
      <div>{boardStatus}</div>
      <div className=" p-4">
        <div className=" row-auto">
          <Square value={square[0]} onSquareClick={() => handleClick(0)} />
          <Square value={square[1]} onSquareClick={() => handleClick(1)} />
          <Square value={square[2]} onSquareClick={() => handleClick(2)} />
        </div>
        <div className=" row-auto">
          <Square value={square[3]} onSquareClick={() => handleClick(3)} />
          <Square value={square[4]} onSquareClick={() => handleClick(4)} />
          <Square value={square[5]} onSquareClick={() => handleClick(5)} />
        </div>
        <div className=" row-auto">
          <Square value={square[6]} onSquareClick={() => handleClick(6)} />
          <Square value={square[7]} onSquareClick={() => handleClick(7)} />
          <Square value={square[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </>
  );

  function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        console.log(squares[a], "is the winner.");
        return squares[a];
      }
    }
    return null;
  }
}
