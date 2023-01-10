import React, { Component } from 'react'
import '../style.css'

export default class Formulaire extends Component {
   state = {
      message: '',
      length: this.props.length,
      caractRestant: this.props.length
   }
   handleSubmit = event => {
      event.preventDefault()
      this.createMessage()
   }
   createMessage = () => {
      const { pseudo, addMessage } = this.props
      const message = {
         pseudo: pseudo,
         message: this.state.message
      }

      addMessage(message)
      this.setState({ message: '', caractRestant: this.state.length })
   }
   handleChange = event => {
      const message = event.target.value
      let caractRestant = this.state.length - message.length
      this.setState({ message, caractRestant })
   }
   onKeyUp = event => {
      if (event.key === 'Enter') {
         this.createMessage()
      }
   }

   render() {
      return (
         <form className='form' onSubmit={this.handleSubmit}>
            <textarea
               required
               maxLength={this.state.length}
               value={this.state.message}
               onChange={this.handleChange}
               onKeyUp={this.onKeyUp}
            />
            <div className='info'>
               <span className='info-caract-restant'>Le nombre de caractères restant est: {this.state.caractRestant}</span>
               <span>{this.state.length}</span>
            </div>
            <button type='submit'>Envoyer !</button>
         </form>
      )
   }
}
