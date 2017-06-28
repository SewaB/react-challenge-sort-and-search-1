import React, { Component } from 'react';
import axios from 'axios';
import table from './components/table';
import SideBar from './components/SideBar';
import { Table,Button,FormControl } from 'react-bootstrap';


// import SortBar from './components/SortBar';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      units:[],
      search: '',
      filteredunit: [],
      oneUnit:'',
      sortByName: false,
      sortByAge: false,
    };
  }

  componentDidMount() {
    axios.get('./data.json')
    .then(response => {this.setState({units: response.data ,oneUnit: response.data[0], filteredunit:response.data})})
  }

  table (){
    return(
      <Table striped bordered condensed hover>
        <tbody >
          <tr>
          <td>Image</td>
          <td>Name</td>
          <td>Age</td>
          <td>Phone number</td>
         </tr>
          {this.state.filteredunit.map((info,i)=> (
            <tr key={i} i={i} onClick={() => this.setState({oneUnit: info})}>
              <td><img src={"images/"+ info.image + ".svg"} style={{width: '200px',height:'100px'}}/></td>
              <td>{info.name}</td>
              <td>{info.age}</td>
              <td>{info.phone}</td>
            </tr>)
          )}
         </tbody>
      </Table>  
    )
   }
 
  searchChange(sort) { 
    const ololo = this.state.units.filter((unit,i) => unit.name.toLowerCase().indexOf(sort) !== -1);
    this.setState({filteredunit: ololo, search: sort, oneUnit: ololo[0]})
  } 

  handeClickName(filteredunit){
    if (this.state.sortByName) {
      const sliceArray = this.state.filteredunit.slice();
      sliceArray.reverse()
      this.setState({filteredunit: sliceArray, oneUnit: sliceArray[0]})
       console.log(sliceArray)
    } else {
      this.setState(  {sortByName: !this.state.sortByName})
      const sorting = this.state.filteredunit.slice()
      sorting.sort(function compareNumeric(a, b) {
        const nameA=a.name.toLowerCase(), nameB=b.name.toLowerCase();
        if (nameA < nameB) 
          return -1;
        if (nameA > nameB)
          return +1;
      })
      this.setState({oneUnit: sorting[0], filteredunit: sorting})
   }
 }

  handeClickAge() {
    if (this.state.sortByAge) {
      const sliceArray = this.state.filteredunit.slice();
      sliceArray.reverse()
      this.setState({filteredunit: sliceArray, oneUnit: sliceArray[0]})
      console.log(sliceArray)
    } else {
      this.setState({sortByAge: !this.state.sortByAge})
      const sorting = this.state.filteredunit.slice()
      sorting.sort(function compareNumeric(a, b) {
      const ageA=a.age, ageB=b.age;
        if (ageA < ageB) 
          return -1;
        if (ageA > ageB)
          return +1;
         }
        )
      this.setState({oneUnit: sorting[0], filteredunit: sorting})
    }
  }
           


     render() {
          return (
        <div className="container app fluid">
            <div className="col-xs-12 col-md-12">
                <FormControl placeholder="Search people" onChange={(e) => this.searchChange(e.target.value.toLowerCase())} value={this.state.search} />
                                <Button className="button-class" bsStyle="info" onClick={() => this.handeClickName()}>Sort by name</Button> 
                                <Button className="button-class" bsStyle="info" onClick={() => this.handeClickAge()}>Sort by age</Button> 
                  </div>
                   <div className="container app fluid">    
                          </div>
                              <div className="col-xs-12 col-md-3">
                        <SideBar oneUnit={this.state.oneUnit} />
                        </div>
                   <div className="col-xs-12 col-md-9">
                      {this.state.filteredunit.length === 0 && <p>Opps. Cannot find...(</p>}
                     {this.table()}    
                  </div> 

              </div>
           );
   }
}