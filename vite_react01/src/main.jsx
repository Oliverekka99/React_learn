import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp(){
  return (
    <div>
      <h1>Custom App </h1>
    </div>
  )
}

/*
const ReactElement = {
  type: 'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'Click me to visit google'
}
*/

const anotherelement = (
  <a href='https://google.com' target='_blank'>Visit google</a>
)

const reactElement = React.createElement(
  'a', //tag
  {href: 'https://google.com', target: '_blank'}, //object
  'click me to visit google',
  anotheruser
)

const anotheruser = "Mai hun"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    reactElement
  </React.StrictMode>,
)
