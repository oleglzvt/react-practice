import React, {Component} from 'react';
import './App.css';
import axios from 'axios';
import Students from './Students'

class App extends Component {
  constructor() {
    super();
    this.state = {
      students: [],
      searchStudent: ''
    }
  }

  componentDidMount = () => {
    axios({
      url: 'https://www.hatchways.io/api/assessment/students',
      dataType: 'json',
      method: 'GET',
    })
    .then((res) => {
      this.setState({
        students: res.data.students
      })
    }) 
  }

  handleChange = (e) => {
    this.setState({
      searchStudent: e.target.value
    })
  }

  handleSearch = (searchString) => {
    return result => {
      return result.firstName.toLowerCase().includes(searchString.toLowerCase()) || result.lastName.toLowerCase().includes(searchString.toLowerCase());
      // || !searchString;
    }
  }

  render () {
    return (
      <div className="students-log wrapper">

        <form>
          <label htmlFor="name-input" className="sr-only">Search by name</label>
          <input id="name-input" name="name-input" className="search-by-name" type="text" value={this.state.searchStudent} onChange={this.handleChange} placeholder="Search by name"/>
        </form>

        {this.state.students.filter(this.handleSearch(this.state.searchStudent)).map(student => {
          return (
            <Students image={student.pic} firstName={student.firstName} lastName={student.lastName} email={student.email} company={student.company} skill={student.skill} grades={student.grades} id={student.id} addTag={this.addTag}/>
          )
        })}

      </div>
    );
  }
}

export default App;
