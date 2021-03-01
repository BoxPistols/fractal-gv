// Reactパッケージの読み込み
import React from 'react'
import { Fragment } from 'react'
import ReactDOM from 'react-dom'
import './index.sass'

console.log('React')

class Button extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isMorning: true,
		}
	}
	render() {
		const x = <span className='color-accent'>Good Morning</span>
		const y = <span className='color-brand'>Good Night</span>
		return (
			<React.Fragment>
				<button className='btn success'>
					<a
						onClick={(e) => {
							this.setState({ isMorning: !this.state.isMorning })
						}}
					>
						Click!
					</a>
				</button>
				<h1>
					{
						this.state.isMorning ? x :
						y}{' '}
				</h1>
			</React.Fragment>
		)
	}
}

// Reactコンポーネント
class App extends React.Component {
	render() {
		return (
			<div className='w-100 fx fx-d-col fx-c'>
				<h1 className='fz44'>Hello React!</h1>
				<Button />
			</div>
		)
	}
}

// HTMLタグにReactコンポーネントを紐付ける
ReactDOM.render(
	<div>
		<App />
	</div>,
	document.getElementById('root')
)
