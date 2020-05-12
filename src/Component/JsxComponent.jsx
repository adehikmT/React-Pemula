import React from 'react';

// membuat component dengan JSX Javascript XML
class JsxComponent extends React.Component{
    render(){
     return(
         React.createElement('div',
         {
             ClassName:1,
             value:'koko'
         }
        ,'ini div',
        React.createElement('button',null,'tombol')
        )
     )   
    }
}

export default JsxComponent;