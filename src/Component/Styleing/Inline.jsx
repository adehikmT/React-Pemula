import React, { Component } from 'react';
import './style.css';
import Smodule from './Smodule.css';

class Inline extends Component {
    render() {
        return (
            <div>
                <h2 className={`${Smodule.xl} primary`}>Hallo Ade</h2>
            </div>
        );
    }
}

export default Inline;