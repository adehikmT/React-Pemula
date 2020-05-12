import React from 'react';

// state berfungsi untuk memberi nilai yang bisa di rewrite/ di ubah

class StateIntro extends React.Component{

    constructor(){
        super()
        this.state={
            msg:"Selamat Datang"
        }
    }

    ChngMsg=()=>{
        this.setState({
        msg:"Terimakasih"
        })
    }

    render(){
        return(
            <div>
            <h2>{this.state.msg}</h2>
            <button onClick={()=>this.ChngMsg()}>Ikuti</button>
            </div>
        )
    }
}

export default StateIntro;