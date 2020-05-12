import React, { Component } from 'react';

//merubah agar tidak menggunakan this

class DestructuringProps extends Component {

    render() {
        const {name,age}=this.props
        return (
            <div>
                {name}, {age}
            </div>
        );
    }
}


export default DestructuringProps;