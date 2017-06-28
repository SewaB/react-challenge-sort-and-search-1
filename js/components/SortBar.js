/*	import React from 'react';

export default class SideBar extends React.Component { 
		constructor(props) { 
		super(props) 
		this.state = { 
		text: '', 
		array: [],
		sortUnit:[0]	
			}
	 }

   handeClickName(){
   	console.log(this.props.sortUnit)
    return(
   <p> {this.props.sortUnit((sorted,i)=> this.props.sortUnit.name.sort())}</p>
       
          ) 
    }
 
handeClickAge(){
   	console.log(this.props.sortUnit)
    return(
    	   <p> {this.props.sortUnit((sorted,i)=> this.props.sortUnit.age.sort())}</p>
          ) 
  }
	render() {
		if (this.props.sortUnit === 0 && <p> </p>) { 
			return false
		}
				return (
				<div className="container app fluid">		
		 <div className="col-xs-12 col-md-6">
					<button onClick={() => this.handeClickName()}>Sort by name</button> 
				<div className="col-xs-12 col-md-6">
					<button onClick={() => this.handeClickAge()}>Sort by age</button> 
				</div>
		 </div> 
		 </div>
		)
	} 
}*/