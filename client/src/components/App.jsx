import React from 'react'
import Nav from './Nav.jsx'
import Plan from './Plan.jsx'
import CreateTrip from './CreateTrip.jsx'
import Suggestions from './Suggestions.jsx'
import styles from '../../styles/App.module.css'
import data from './dummyData.json';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      locationsView: false,
      createView: false
    }
    this.handleLocationView = this.handleLocationView.bind(this);
  }

  componentDidMount() {
    this.setState({
      list: data,
      loading: false
    })
  }

  handleLocationView() {
    this.setState({
      locationsView: !this.state.handleLocationView
    })
  }

  render() {
    const { list, locationsView } = this.state;
    return (
      <div className={styles.container}>
        <div className={styles.nav}>
          <Nav />
        </div>
        <div className={styles.plan}>
          <Plan
            list={list}
            handleLocationView={this.handleLocationView}
          />
        </div>
        {locationsView ? null :
        <>
          <div className={styles.bucket}>
            <CreateTrip />
          </div>
          <div className={styles.suggestions}>
            <Suggestions />
          </div>
        </>
        }
      </div>
    )
  }
}

export default App;