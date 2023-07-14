import {Component} from 'react'
import {format} from 'date-fns'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import AppointmentItem from '../AppointmentItem'

class Appointments extends Component {
  state = {
    appoList: [],
    title: '',
    date: '',
  }

  isToggle = id => {
    this.setState(prevState => ({
      appoList: prevState.appoList.map(eachItem => {
        if (id === eachItem.id) {
          return {...eachItem, isStarred: !eachItem.isStarred}
        }
        return eachItem
      }),
    }))
  }

  onAdd = event => {
    event.preventDefault()
    const {title, date} = this.state
    const formatteddate = format(new Date(date), 'dd MMMM yyyy,EEEE')
    const newAppo = {
      id: uuidv4(),
      title,
      date: formatteddate,
      isStarred: false,
    }
    this.setState(prevState => ({
      appoList: [...prevState.appoList, newAppo],
      title: '',
      date: '',
    }))
  }

  onTitleChange = event => {
    this.setState({title: event.target.value})
  }

  onDateChange = event => {
    this.setState({date: event.target.value})
  }

  onClickStared = () => {
    const {appoList} = this.state
    const starredItems = appoList.filter(
      eachItem => eachItem.isStarred === true,
    )
    this.setState({appoList: starredItems})
  }

  render() {
    const {appoList, title, date} = this.state

    return (
      <div className="container">
        <div className="card">
          <div className="appcon">
            <form onSubmit={this.onAdd}>
              <div className="app">
                <h1>Add Appointment</h1>
                <label htmlFor="Title">TITLE</label>
                <input id="Title" value={title} onChange={this.onTitleChange} />
                <label htmlFor="Date">Date</label>
                <input
                  id="Date"
                  type="date"
                  value={date}
                  onChange={this.onDateChange}
                />
                <button type="submit" className="btn">
                  ADD
                </button>
              </div>
            </form>
            <div>
              <img
                src="https://assets.ccbp.in/frontend/react-js/appointments-app/appointments-img.png"
                alt="appointments"
              />
            </div>
          </div>
          <div>
            <hr />
            <div className="afterhlcon">
              <h1 className="para">Appointments</h1>
              <button
                type="button"
                className="btn2"
                onClick={this.onClickStared}
              >
                Starred
              </button>
            </div>
          </div>
          <div>
            <ul>
              {appoList.map(eachItem => (
                <AppointmentItem
                  appoList={eachItem}
                  key={eachItem.id}
                  isToggle={this.isToggle}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default Appointments
