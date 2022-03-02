import React from 'react';
import Cardlist from '../component/Cardlist';
import SearchBox from '../component/SearchBox'
import Scroll from '../component/Scroll'
import Errorboundary from '../component/Errorboundary';
import {connect} from 'react-redux'
import {searchingRobot, fetchingRobot} from '../Actions'
// import { fetchedRobot, searchedRobot } from '../Reducer';
// import { robots } from './5.1 robots.js'

const mapStateToProps = state=> {
  console.log(state)
  return {
    searchfield: state.robotSearched.searchField,
    isPending: state.fetchedRobot.isPending,
    error: state.fetchedRobot.error,
    robots: state.fetchedRobot.robots
  }
}
const mapDispacthToProps = (dispatch)=> {
  return {
     onSearchChange: (event)=>dispatch(searchingRobot(event.target.value)),
     onFetchingRobot: () => dispatch(fetchingRobot())
  }
}
class App extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {
    this.props.onFetchingRobot()
  }

  render() {
    const { searchfield, robots, isPending, onSearchChange} = this.props
    const filteredRobot = robots.filter((robot, i) => {
      return robot.name.toLowerCase().includes(searchfield.toLowerCase())

    })
    return isPending?
      <h1>{'Loading....'.toUpperCase()}</h1> :
      (<div className='tc'>
        <h1 className='f1'>Robolesson</h1>
        <SearchBox searchChange={onSearchChange} />
        <Scroll>
          <Errorboundary>
          <Cardlist robot={filteredRobot} />
          </Errorboundary>
        </Scroll>
      </div>)
  }
}
export default connect(mapStateToProps, mapDispacthToProps)(App);
