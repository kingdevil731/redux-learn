import {useSelector, useDispatch} from 'react-redux';

function App() {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <div className="App">
      <div className="learn">
        <h1>You Count Is Currently : <span>{counter}</span></h1>
        <div className="button">
          <button onClick={() => dispatch({type : 'INCREMENT'})}>Increment +</button>
          <button onClick={() => dispatch({type : 'DECREMENT'})}>Decrement -</button>
        </div>
      </div>
    </div>
  );
}

export default App;
