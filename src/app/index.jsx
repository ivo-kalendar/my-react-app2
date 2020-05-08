import React from 'react'
import ReactDOM from 'react-dom'
import { Main } from './components/Main.jsx'

ReactDOM.render(<Main />, document.querySelector('#root'))


// Remove the code under before deployment 

const env = process.env.NODE_ENV
const prod = env === "production"
const dev = env === "development"
const time = new Date().toLocaleString()
const info = `I am Working in a ${env.toUpperCase()} enviorment, at ${time}`

if (env) console.info(info)
if (prod) console.warn(info)
if (!dev && !prod) console.error(info)