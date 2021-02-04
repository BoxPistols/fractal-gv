// Reactパッケージの読み込み
import React from 'react'
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
    return (
      <div>
        <button className="btn success">
          <a
            onClick={(e) => {
              this.setState({ isMorning: !this.state.isMorning })
            }}
          >
            Click!
          </a>
        </button>
        <h1>{this.state.isMorning ? 'Good Morning' : 'Hello'} React!</h1>
      </div>
    )
  }
}

// Reactコンポーネント
class App extends React.Component {
  render() {
    return (
      <div>
        <h1 className="fz44">Hello React!</h1>
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
