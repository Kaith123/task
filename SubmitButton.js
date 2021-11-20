import React from 'react';


class SubmitField  extends React.Component{
  render(){
  return (
    <div className="submitField">
      
<button
className = 'btn'
disabled ={this.props.disabled} 
  onClick={() => this.props.onClick() }
  >
{this.props.text}
</button>
</div>
  );
}
}

export default SubmitField;
