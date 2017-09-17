import React from 'react'
import {getUser} from'../services/api'

class NewsFeed extends React.Component{

    state={
        randomUser:{}
    }
  componentDidMount(){
      getUser().then((user)=>{
          console.log(user.data.results[0])
          this.setState({
              randomUser:user.data.results[0]
          })
      }).catch((err)=>{
          console.log(err)
      })
    }
  

    render(){
        return(
            <div>
            <h1>Friends</h1>
            <div className="section">
                {this.state.randomUser.picture&&
                
                <div className="card">

  <div className="card-content">
    <div className="media">
      <div className="media-left">
        <figure className="image is-48x48">
          <img src={this.state.randomUser.picture.medium}
          alt="Image"/>
        </figure>
      </div>
      <div className="media-content">
        <p className="title is-4">
            <span className="is-capitalized">
            {this.state.randomUser.name.title},</span>   
            <span className="is-capitalized">{this.state.randomUser.name.first}</span>
            <span className="is-capitalized">{this.state.randomUser.name.last}</span>
        </p>
        <p className="subtitle is-6">{this.state.randomUser.gender}</p>
      </div>
    </div>

    <div className="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br/>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div>
                }
                </div>
            </div>
        )
    }



}
export default NewsFeed