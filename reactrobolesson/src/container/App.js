import React from 'react';
import Cardlist from '../component/Cardlist';
import SearchBox from '../component/SearchBox'
import Scroll from '../component/Scroll'
import Errorboundary from '../component/Errorboundary';
// import { robots } from './5.1 robots.js'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      robots: [],
      searchfield: ''
    }
    // this.onSearchChange = this.onSearchChange.bind(this)
  }

  onSearchChange = (e) => {
    this.setState({ searchfield: e.target.value })
  }
  componentDidMount() {
    fetch(`https://jsonplaceholder.typicode.com/users`)
      .then(resp => resp.json())
      .then(users => this.setState({ robots: users }))
  }

  render() {
    const { robots, searchfield } = this.state
    const filteredRobot = robots.filter((robot, i) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())

    })
    return !robots.length ?
      <h1>Loading</h1> :
      (<div className='tc'>
        <h1 className='f2'>Robolesson</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <Errorboundary>
          <Cardlist robot={filteredRobot} />
          </Errorboundary>
        </Scroll>
      </div>)
  }
}
export default App;
