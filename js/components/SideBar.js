import React from 'react';
import { Table } from 'react-bootstrap';
export default class SideBar extends React.Component { 
		constructor(props) { 
		super(props) 
		this.state = { 
		text: '', 
		array: [],
		oneUnit:[0]
		}
	 }

   sidebar(){
    return(
     <Table striped bordered condensed hover>
        <tbody>
          <tr>
          	   <td>
	          	  <p><img src={"images/"+ this.props.oneUnit.image + ".svg"} style={{width: '200px'}}/></p>
		          <p>Name: {this.props.oneUnit.name}</p>
		          <p>Age: {this.props.oneUnit.age}</p>
		          <p>Favorite animal: {this.props.oneUnit.image}</p>
		          <p>Phone: {this.props.oneUnit.phone}</p>
		          <p>Favorite phrase: {this.props.oneUnit.phrase}</p>
	          </td>
          </tr>
         </tbody>
      </Table>
       
          ) 
  }

	render() {
		if (this.props.oneUnit == '' || this.props.oneUnit === undefined ) { 
			return false
		}

		return (		
		 <div>
			{this.sidebar()}
		 </div> 
		)
	} 
}
