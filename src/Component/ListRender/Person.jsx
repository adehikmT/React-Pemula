import React, { Component } from 'react';
import ShowPerson from './ShowPerson';

class Person extends Component {
    
    render() {
    let list=[
        {
            id:1,
            name: "ade Hikmat",
            age: 18
        },
        {
            id:2,
            name: "Arini",
            age: 17
        },
        {
            id:3,
            name: "Rudi",
            age: 22
        }
    ]
    // exmp 1
    // const ListView=list.map(l=><div>name {l.name}, age{l.age}</div>);    
    // exmp 2
    const ListView=list.map(l=><ShowPerson key={l.id} list={l}/>);    
    return <div>{ListView}</div>
    }
}

export default Person;