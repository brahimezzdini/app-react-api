import axios from 'axios';
import React, { Component } from 'react';
import User from './User'

class UserItem extends Component {
      state = {
            user: ''
      }
      componentWillMount(e){
           const login = this.props.match.params.login;
           

           axios.get(`https://api.github.com/users/${login}`)
                 .then(respense => {     //retour d'axios c'est un promise qu'on va consommer via then and catch
                         this.setState({    //setState :methode pour modifier state
                              
                              user: respense.data 
                         })
                        })       
      }
      render() {
            const {user}= this.state;
            return (
                  <div>
                        <User user={user}/>
                  </div>
            )
      }
}

export default UserItem
