import React, { Component } from 'react';

class List extends Component {
    render() {
        let list=["ade","hikmat","Pauji"]
    let show=list.map((l,index)=><h1 key={index}>{index} {l}</h1>)
        return (
            <div>
                {show}
                Next Vidio CSS style
            </div>
        );
    }
}

export default List;