import React from 'react'

class FollowerBtn extends React.Component{

    constructor (props){
        super(props)
    }


    _addFollower(){
        //add follower count
        this.props.onAddFollower()
    }
    render(){
        return(

          

            

            <div>
                
                <button 
                className="button is-danger is-inverted"
                onClick={()=>this._addFollower()}>
                    Add follower
                    </button>
            </div>
        )
    }
}
export default FollowerBtn