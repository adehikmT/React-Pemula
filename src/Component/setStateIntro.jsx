import React from 'react';

//setState ini berguna untuk merewrite state awal sedangan prevState merewrite jumlah state yang berulang

class SetStateIntro extends React.Component{
   constructor(){
       super()
       this.state={
           count:0
       }
   }

   increment=()=>{
    // this.setState({
    //    count:this.state.count+a
    // },()=>{
    //    console.log("call Back "+this.state.count) 
    // }); 

    // menggunakan prevState 
    this.setState(
        (prevState)=>({
          count: prevState.count+1
        }),
        ()=>{
        console.log("call back"+this.state.count);
        })

    console.log(this.state.count);
   }

   LimaInc=()=>{
    this.increment();
    this.increment();
    this.increment();
    this.increment();
    this.increment();
   }

    render(){
       return(
           <div>
               <span>Counter - {this.state.count}</span>
               <br/>
               <button onClick={()=>this.LimaInc()}>increment</button>
           </div>
       )
   }

}

export default SetStateIntro;