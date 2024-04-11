import { useContext, useEffect, useRef, useState } from 'react';
import './App.css';
import { UserInfoContext } from '.';
import useCustomHookSample from './useCustomHookSample';

function App() {
  const [count, setCount] = useState(0);
  const [effect, setEffect] = useState("");
  const [refState, setRefState] = useState("");
  const userIf = useContext(UserInfoContext);
  const refInput = useRef();

  const countClick = (isUp) => {
    if (isUp === true) {
      setCount(count + 1);
    } else {
      setCount(count - 1);
    }
  }

  useEffect(() => {
    setEffect(`countが変更されて${count}に変わった`);
  }, [count])

  const changeRefVal = () => {
    setRefState(refInput.current.value);
  }

  //カスタムフック
  const [age, setAge] = useCustomHookSample("age", 24);

  return (
    <div className="App">
      <h1>UseEffect</h1>
      <button onClick={() => { countClick(true) }}>＋</button>
      <button onClick={() => { countClick(false) }}>－</button>
      <p>{count}</p>
      <hr/>
      <h1>UseEffect</h1>
      <p>{effect}</p>
      <hr/>
      <h1>UseContext</h1>
      <p>{userIf.name}</p>
      <p>{userIf.age}</p>
      <p>{userIf.address}</p>
      <hr/>
      <h1>UseRef</h1>
      <input type='text' ref={refInput} onChange={changeRefVal}/>
      <p>入力値は[{refState}]</p>
      <hr/>
      <h1>カスタムフック</h1>
      <p>{age}</p>
      <button onClick={() => { setAge(80) }}>年齢をセット</button>
    </div>
  );
}

export default App;
