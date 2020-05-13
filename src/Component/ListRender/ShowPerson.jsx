import React, { Component } from 'react';

class ShowPerson extends Component {
    constructor(props){
    super(props)
    console.log("cek")
    // console.log(this.getData(props.list))
    }

    getData=(data)=>(<div>name {data.name}, age {data.age}</div>)

    render() {
        return (
               this.getData(this.props.list)
        );
    }
}

export default ShowPerson;