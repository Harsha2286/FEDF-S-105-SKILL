import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import MaterialUiDemo from './MaterialUiDemo'
//import ReduxDemo from './ReduxDemo'
//import ReactRouterDemo from './ReactRouterDemo'
//import ChildtoParentState from './ChildtoParentState'
//import ReusableComponents from './ReusableComponents'
//import Form from './Form'
//import ListRender from './ListRender'
//import Timer from './Timer'
//import StateObjectDemo from './StateObjectDemo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <MaterialUiDemo/>
  </StrictMode>,
)
