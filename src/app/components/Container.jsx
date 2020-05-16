import React, { useState } from 'react'
import { Main } from './Main'
import { store } from '../store'
const { users, comments } = store.getState()

export const Container = () => {
	const [ resourceType, setResourceType ] = useState('something...')
	const [ secondType, setSecondType ] = useState('Ништо не е Притиснато...')
	const [count, setCount] = useState(0)

	let decrementCount = () => setCount(prevCount => (prevCount !== 0) ? (prevCount - 1) : 0)
	let incrementCount = () => setCount(prevCount => (prevCount !== 10) ? (prevCount + 1) : 10)

	return <>
		<div className="tester">
			<button onClick={decrementCount}> - </button>
			<span> {count} </span>
			<button onClick={incrementCount}> + </button>
		</div>



		<h1>{resourceType}</h1>
		<div id="container">
			{comments.map(comment => {
				 return <h2 onClick={() => setResourceType(comment.content)} key={comment.id}>
							{comment.title}
						</h2>
			})}

			<h3 onClick={() => setResourceType('posts')}>Posts</h3>
			<h3 onClick={() => setResourceType('users')}>Users</h3>
			<h3 onClick={() => setResourceType('comments')}>Comments</h3>

			<h2 onClick={() => setSecondType('прво...')}>Прво...</h2>
			<h2 onClick={() => setSecondType('второ...')}>Второ...</h2>
			<h2 onClick={() => setSecondType('трето...')}>Трето...</h2>
			<Main />
			<Main />
			<Main />
		</div>
		<h1>{secondType}</h1>
	</>
}
