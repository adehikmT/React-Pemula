import React, { Component } from 'react';

class Conditions extends Component {
   constructor(props){
    super(props)
    this.state={
        isLogin:false
    }
   }
//    example 1
    render() {
        return (
               this.state.isLogin 
                ?
                <div>Hallo Ade</div>
                :
                <div>Hallo Guest</div>
        );
    }
//    example 2
    //    render(){
    //        let msg=<div>Hallo Guest</div>
    //        if(this.state.isLogin){
    //         msg=  <div>Hallo ade</div>  
    //        }
    //        return msg;
    //    }
}

export default Conditions;