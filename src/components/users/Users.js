import React, { Component } from 'react';
import axios from 'axios';
import User from './User';
import SearchUsers from './SearchUsers';


export class Users extends Component {
      constructor(props) {
            super(props)
      
            this.state = {     //déclarer data qu'on va le generer
                   users: [    //tableau des objet
                        
                   ]
            }
      }
      getUsers = () => {  // creer arrow function
            axios.get('https://api.github.com/users') //methode get d'axios
                 .then(respense => {     //retour d'axios c'est un promise qu'on va consommer via then and catch
                      this.setState({    //setState :methode pour modifier state
                           users: respense.data               //data comporte la liste de data users
                      })
                 })
      }
      componentDidMount(){  //execution de methode getUsers 
            this.getUsers();
      }

      searchUsersFromGit =(data) =>{
            if(data != '') {
                  axios.get(`https://api.github.com/search/users?q=${data}`)
                       .then(respense => {     //retour d'axios c'est un promise qu'on va consommer via then and catch
                         this.setState({    //setState :methode pour modifier state
                        users: respense.data.items               //data comporte la liste de data users
                   })
                 })
            }

      }
      
      render() { //render pour afficher les information
            return (  //code jsx javascript xml
                  <div>
                        <div className="row my-2">
                              <div className="col-md-12">
                              <SearchUsers getUserSearch ={this.searchUsersFromGit}/>
                              </div>
                        </div>
                        <h1 className="text-center my-4">AFFICHAGE DES DONNEES D'API</h1>
                        <div className="row">
                              
                        
                              {this.state.users.map(user => ( //boucler sur le tableau users : mapper(fonction map)
                                    <div className="col-md-4" key={user.id}>
                                          <User user={user} /> 
                                    </div>
                              ))}
                        </div>
                  </div>
            )
      }
}

export default Users
