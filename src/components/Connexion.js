import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import '../App.css'

export default class Connexion extends Component {
   state = {
      pseudo: '',
      goToChat: false
   }
   handleSubmit = event => {
      event.preventDefault();
      this.setState({ goToChat: true });
   }
   handleChange = event => {
      const pseudo = event.target.value
      this.setState({ pseudo })
   }
   render() {
      if (this.state.goToChat) {
         return <Redirect push to={`/pseudo/${this.state.pseudo}`}></Redirect>
      }

      return (
         <Fragment>
            <h1>Page de connexion</h1>
            <div className='connexionBox'>
               <form className='connexion' onSubmit={this.handleSubmit}>
                  <input type='text' placeholder='pseudo'
                     value={this.state.pseudo}
                     onChange={this.handleChange} required />
                  <button type='submit'>Go</button>
               </form>
            </div>
         </Fragment >
      )
   }
}
