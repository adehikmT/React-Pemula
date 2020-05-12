import React from 'react';

//props itu imutable jadi value dari properti props tidak bisa di ubah / rewrite

class PropsIntro extends React.Component{

    constructor(props) {
        super(props);
        console.log(props.name);
    }
    
    render(){
        return(
            <div>
                <h2>Hallo {this.props.name}</h2>
            </div>
        )
    }
}

export default PropsIntro;