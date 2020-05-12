import React, { Component } from 'react';

class Child extends Component {
   


    render() {
        return (
            <div>
            <button onClick={()=>this.props.ClickHandle("ade")}>Button Child</button>             
            </div>
        );
    }
}

export default Child;