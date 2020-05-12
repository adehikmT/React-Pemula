import React from 'react';

class FunctionClick extends React.Component{
    
    Click=()=>{
           console.log("ok");
    }
    
    render(){
        return(
            <div>
                <button onClick={this.Click}>Click Me</button>
            </div>
        )
    }
}
export default FunctionClick;