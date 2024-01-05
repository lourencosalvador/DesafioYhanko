import { useReducer, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { dataSenter } from '.'
interface State {
   text: string
}
type use = {
  reducer: void
  initial: State
}
type ActionType = 'SHOW_NAME' | 'SHOW_AGE';
const reducer = (state: State, action: ActionType) : State => {
    switch(action){
      case 'SHOW_NAME':
      return {...state, text: `${dataSenter.history}`}
      case 'SHOW_AGE':
      return {...state, text: `${dataSenter.membros}`}
      default: 
      return state
    }
}

function App() {
  const inital: State = {text: ''}
  const [state, dispatch] = useReducer(reducer, inital)
  const [mouse, setMouse] = useState(false)


  const passaMouseOn = (show: ActionType) => {
    dispatch(`${show}`)
    setMouse(true)
  }

  const passaMouseOff = () => {
     setMouse(false)
  }
  return (
    <>
    
      <div className='btns'>
      <button onMouseEnter={() => passaMouseOn('SHOW_NAME')} onMouseLeave={passaMouseOff}>History de Yhanko</button>
     <button onMouseEnter={() => passaMouseOn('SHOW_AGE')} onMouseLeave={passaMouseOff}>Menbros</button>
      </div>
     <p>{state.text}</p>
    </>
  )
}

export default App
