import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox'

class App extends Component {

  constructor() {
    super();
    this.state = {
      searchText: '',
      monsters: []
    }
  }

  componentDidMount() {
    this.onSearchChangeHandler = (event) => this.setState({searchText: event.target.value.toLocaleLowerCase()})
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((monsters) => this.setState({initialMonsters: monsters, monsters}))
  }

  render() {
    let monstersFiltered = this.state.monsters.filter(m => m.name.toLocaleLowerCase().includes(this.state.searchText))
    return (
      <div>
        <h1 className='app-title'>Monsters Rolodex</h1>
        <SearchBox className={"monsters-search-box"} placeHolder={"Search Monster"} onSearchChangeHandler={this.onSearchChangeHandler}/>
        <CardList cards={monstersFiltered}/>
      </div>
    );
  }
}

export default App;
