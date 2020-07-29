import React, {Component} from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/serach-box/serach-box.component';

class App extends Component{
  constructor(){
    super();

    this.state = {
     monsters: [],
     serachField: ''
    };
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(users => this.setState({monsters: users}));
  }
  
  render() {
    const { monsters, serachField } = this.state;
    const filteredMonsters = monsters.filter (monster =>
      monster.name.toLowerCase().includes(serachField.toLowerCase())
      )
    return(
      <div className="App">
      <h1> Monster Rolodex </h1>
        <SearchBox
          placeholder='search monster'
          handelChange= {e => 
            this.setState({ serachField: e.target.value})}
        />
        <CardList monsters= {filteredMonsters} />
      </div>
    );
  }
}

export default App;
