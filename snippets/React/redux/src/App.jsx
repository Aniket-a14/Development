import "./App.css";
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './redux/counter/counterSlice'

function App() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <>
      <div>
        <button onClick={()=>{dispatch(decrement())}}>-</button>
        Count is {count}
        <button onClick={()=>{dispatch(increment())}}>+</button>
      </div>
    </>
  );
}

export default App;
