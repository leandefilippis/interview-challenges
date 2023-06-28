import { useState } from "react";

const GRID = Array.from(Array(9).keys());
const WIN_CASE = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6]
]


function App() {
  const [player, setPlayer] = useState<'X' | 'O'>('X')
  const [plays, setPlays] = useState<Map<number, 'X' |  'O'>>(new Map())

  function handleClick(cell: number){
    if(plays.has(cell)) return

    const draft = new Map(plays).set(cell, player)
    const winner = WIN_CASE.find(comp => comp.every(cell => draft.get(cell) == player))
    if (winner) {
      alert(`${player} wins!`)
      setPlays(new Map())
      return
    }

    setPlays(draft)
    setPlayer((prevPlayer) => (prevPlayer == 'X' ? 'O' : 'X'))
  }

  return (
    <main>
      {GRID.map((i) => (
        <button key={i} onClick={() => handleClick(i)}>
          {plays.get(i)}
        </button>
      ))}
    </main>
  );
}

export default App;
