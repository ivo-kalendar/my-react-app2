import './styles/index.css'
import React from 'react'
import ReactDOM from 'react-dom'
import { Container } from './components/Container.jsx'

window.onload = () => {
	ReactDOM.render(<Container />, document.querySelector('#root'))

//  ----------Remove the code under before deployment----------  //
	const env = process.env.NODE_ENV
	const prod = env === "production"
	const dev = env === "development"
	const time = new Date().toLocaleString()
	const info = `I am Working in a ${env} enviorment, at ${time}`

	if (dev) console.info(info)
	if (prod) console.warn(info)
	if (!dev && !prod) console.error(info)
//  ----------Remove the code above before deployment----------  //
}

