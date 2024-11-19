import './Game.scss'

import React, { useState, useEffect } from 'react'

const allDomino = [
  [0,0],[0,1],[0,2],[0,3],[0,4],[0,5],[0,6],
  [1,1],[1,2],[1,3],[1,4],[1,5],[1,6],
  [2,2],[2,3],[2,4],[2,5],[2,6],
  [3,3],[3,4],[3,5],[3,6],
  [4,4],[4,5],[4,6],
  [5,5],[5,6],
  [6,6]
]

function GameBoard ({start, list}) {
  return (
    <>
      <div className='game__box-count'>Осталось: {list.length}</div>
      <div className='game__figur'>
        {/* <div><span className='active'>0</span> <span>1</span></div>
        <div><span>1</span> <span>1</span></div>
        <div><span>1</span> <span>4</span></div>
        <div><span>1</span> <span>4</span></div>
        <div><span>1</span> <span>4</span></div>
        <div><span>1</span> <span>4</span></div>
        <div><span>1</span> <span>4</span></div>
        <div><span>0</span> <span>1</span></div>
        <div><span>1</span> <span>1</span></div>
        <div><span>1</span> <span>4</span></div>
        <div><span>1</span> <span>4</span></div>
        <div><span>1</span> <span>4</span></div>
        <div><span>1</span> <span>4</span></div>
        <div><span>1</span> <span>4</span></div> */}
      </div>
    
      <div className='game__box-more btn btn-disabled'>Еще</div>
    </>
  );
}
function GameStart({setStart, setList}) {
  function handleChange(e) {
    e.preventDefault()
    setStart(true);
    const arr = allDomino
    for (let i = allDomino.length - 1; i >= 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    setList(arr)
  }
  return (
    <div className='game__box-start btn text_24' onClick={handleChange}>Начать</div>
  );
}

function CreateHand({start, hands, setHands, players, list, setList}) {
  const startHandCount = players == 2 ? 7 : 5
  if(start) {
    var arr = []
    function GiveFigur() {
      if(list) {
        console.log(list);
        hands = list.slice(0, startHandCount)
      }
      return hands.map((item)=>(
        <div><span>{item[0]}</span> <span>{item[1]}</span></div>
      ))
    }
    return (
      <div className='game__figur'>
        <GiveFigur/>
        {/* <div><span>1</span> <span>1</span></div>
        <div><span>1</span> <span>4</span></div> */}
      </div>
    );
  }
}

function Game() {
  const [list, setList] = useState(allDomino)
  const [start, setStart] = useState(false)
  const [players, setPlayers] = useState(2)
  const UseCustomHook = () => {
    const [count, setCount] = useState([]);
    return [count, setCount];
  };
  const [hands, setHands] = UseCustomHook();

  return (
    <div className="game">
      <div className='game__container text_24'>
        <div className='game__player player1'>
          <div className='game__player-name'>Name1</div>
          <div className='game__player-hand'>
            {start ?<CreateHand start={start} hands={hands} setHands={setHands} players={players} setList={setList} list={list}/> : <></> }
            
          </div>
        </div>
        <div className='game__player player2'>
          <div className='game__player-name'>Name2</div>
          <div className='game__player-hand'></div>
        </div>
        <div className='game__player player3'>
          <div className='game__player-name'>Name3</div>
          <div className='game__player-hand'></div>
        </div>
        <div className='game__player player4'>
          <div className='game__player-name'>Name4</div>
          <div className='game__player-hand'>
          {start ?<CreateHand start={start} hands={hands} setHands={setHands} players={players} setList={setList} list={list}/> : <></> }
          </div>
        </div>
        <div className='game__box text_16'>
          {start ? <GameBoard start={start} list={list}/> : <GameStart setStart={setStart} setList={setList}/>}
          {/* <GameBoard/> */}
          {/* <GameStart/> */}
        </div>
      </div>


    </div>
  );
}
  
export default Game;