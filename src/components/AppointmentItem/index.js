import './index.css'

const AppointmentItem = props => {
  const {appoList, isToggle} = props
  const {title, date, isStarred, id} = appoList

  const onClickStar = () => {
    isToggle(id)
  }

  const imageUrl = isStarred
    ? 'https://assets.ccbp.in/frontend/react-js/appointments-app/filled-star-img.png'
    : 'https://assets.ccbp.in/frontend/react-js/appointments-app/star-img.png'

  return (
    <li className="list">
      <div className="namestar">
        <p>{title}</p>
        <button type="button" onClick={onClickStar} data-testid="star">
          <img src={imageUrl} alt="star" />
        </button>
      </div>
      <p>Date:{date}</p>
    </li>
  )
}

export default AppointmentItem
