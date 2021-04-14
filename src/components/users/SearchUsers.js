import React, { Component } from 'react'

export class SearchUsers extends Component {
      state ={                          //data binding
            search: ''                
      }                                 
      handleForm = (e) => {            
            this.setState({             
                 search: e.target.value 
            })                          
      }                                

      searchUsers = (e) => {
            e.preventDefault(); 
            this.props.getUserSearch(this.state.search);
         
      }

      render() {
            const {search}=this.state;
            return (
                        <form onSubmit={this.searchUsers} >
                              <div className="  form-group ">
                                    <input onChange={this.handleForm} value={search} //data binding
                                    type="text" className="  form-control" placeholder="Search Users ..."/>
                             
                                    <button id="search" className=" btn btn-danger ">Search </button>
                              </div>
                        </form>

            )
      }
}

export default SearchUsers
