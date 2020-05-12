import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {


    Clickme=(name)=>{
        alert("Say Hi "+name);
    }

    render() {
        return (
            <div>
                Page Parnt<br/>
                <Child ClickHandle={this.Clickme} />
            </div>
        );
    
    }

}

export default Parent;