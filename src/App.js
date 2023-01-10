import React, { Component, createRef } from 'react'
import Formulaire from './components/Formulaire'
import Message from './components/Message'
import './App.css'

// animations
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './Transisitons.css'

// Firebase connexion
import base from './base'

class App extends Component {
  state = {
    pseudo: this.props.match.params.pseudo,
    messages: {}
  }
  addMessage = message => {
    const messages = { ...this.state.messages }
    messages[`msg-${Date.now()}`] = message

    Object
      .keys(messages)
      .slice(0, -7)
      .forEach(key => {
        messages[key] = null
      })

    this.setState({ messages })
  }
  componentDidMount() {
    base.syncState('/', {
      context: this,
      state: 'messages'
    })
  }
  messageRef = createRef()
  componentDidUpdate() {
    const ref = this.messageRef.current

    ref.scrollTop = ref.scrollHeight
  }
  isUser = pseudo => pseudo === this.state.pseudo

  render() {
    let listMessages = Object.keys(this.state.messages)
      .map(idMsg => (
        <CSSTransition
          key={idMsg}
          classNames='fade'
          timeout={2000}>
          <Message
            isUser={this.isUser}
            pseudo={this.state.messages[idMsg].pseudo}
            message={this.state.messages[idMsg].message} />
        </CSSTransition>
      ))
    return (
      <div className='box'>
        <h1>Bienvenue</h1>
        <div className='messages' ref={this.messageRef}>
          <TransitionGroup className="message">
            {listMessages}
          </TransitionGroup>
        </div>
        <Formulaire
          length={150}
          pseudo={this.state.pseudo}
          addMessage={this.addMessage}
        />
      </div>
    )
  }
}

export default App
