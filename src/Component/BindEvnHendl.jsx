import React from 'react';

class BindEvnHendl extends React.Component{

    constructor(props){
       super(props)
       this.state={
           msg:this.props.say
       }
       console.log(this)
    }

   Clickme=()=>{
       this.setState({
           msg:"Good Bye!"
       })
       console.log(this)
   }

    render(){
        return(
        <div>
            <h3>{this.state.msg}</h3>
            <br/>
            
            <button onClick={()=>this.Clickme()}>click me</button>
            {/* sama */}
            <button onClick={this.Clickme.bind(this)}>click me</button> 

        </div>
        )
    }

}

export default BindEvnHendl;