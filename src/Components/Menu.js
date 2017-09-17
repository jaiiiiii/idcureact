import React from 'react'
import {Link} from 'react-router-dom'
import * as Fbase from '../services/firebase'

class Menu extends React.Component {

    constructor (props){
        super(props)
    }

    state={
        user:{} //empty object
    }

    componentDidMount(){
      Fbase.autologin((x)=>{
          this.setState({
              user:x
          })
      })
    }




    async _signIn (){
        const result = await Fbase.login()
        console.log(result.user)
        this.setState({
            user: result.user
        })
    }
    render(){
        return(
            <div ClassName="section">
            <nav className="level is-mobile">
                  <div className="level-left">
                      <div ClassName="level-item">
                      <p className="subtitle is-5">
                        <strong>ใจ</strong> project
                    </p>
                    </div>
                  </div>
                
              <div className="level-right">
                <p className="level-item"><Link to="/">News Feed </Link></p>
                <p className="level-item"><Link to="/photos">Photos 😜</Link></p>
                <p className="level-item"><Link to="/profile">Profile🍑</Link></p>
                <p className="level-item">
                    {/*if... then...*/}{this.state.user.displayName===undefined &&
                    <button className="button" onClick={()=> this._signIn()}>Sign-in</button>
                    }
                    {this.state.user.displayName &&
                    <span>
                        <img src={this.state.user.photoURL} style={{
                            width:32,
                            height:32,
                            borderRadius: '50%',marginRight:5
                            }} />
                    </span>
                    }
                    <spam>{this.state.user.displayName}</spam>
                </p>
              </div>
            </nav>
          </div>  
        )
    }
}

export default Menu