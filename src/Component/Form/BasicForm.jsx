import React, { Component } from 'react';

class BasicForm extends Component {

    constructor(props) {
        super(props);
        this.state={
            name:'',
            address:'',
            learn:''
        }
    }
    
    HandleName=(event)=>{
        console.log(event)
        this.setState({
            name:event.target.vlue
        })
    }

    render() {
        const {name,address,learn}=this.state;
        return (
            <form >
                <input type="text" value={name} onChange={this.HandleName}/>
                <textarea name="alamat" id="" cols="30" rows="10">{address}</textarea>
                <select name="pengetahuan" id="" value={learn}>
                    <option value="React">React</option>
                    <option value="Vue">Vue</option>
                </select>
                <button>submit</button>
                <br/>
        <h3>{name}</h3>
            </form>
        );
    }
}

export default BasicForm;