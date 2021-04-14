import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class User extends Component {
      render() {
            const {login, avatar_url, repos_url,html_url} = this.props.user;
            return (
                  <div>
                        <div className="card">
                                 <img className="card-img-top" src={ avatar_url } alt="" />
                                 <div className="card-body">
                                    <h4 className="card-title">{ login }</h4>
                                    <p className="card-text">
                                       <Link className="btn btn-primary" to={ '/users/'+login }> Show More </Link>
                                       <Link className="btn btn-warning" to={ repos_url }  >Repose</Link>
                                    </p>
                                 </div>
                              </div>
                        
                  </div>
            )
      }
}

export default User
