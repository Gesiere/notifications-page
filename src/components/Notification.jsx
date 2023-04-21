
const Notification = ({data}) => {
    const {name, image, notification,isNew, time,picture, id, imageNotification, isMessage, isSpecial, action, message} = data
    const newNotification = `item-body ${isNew ?'new': ''} ${imageNotification ? 'picture' : ''}`
  return (
    <div className="notification-item">
        <div className={newNotification}>
            <img src={image} alt="avatar" />
            <div className="notification-details">
                <div className="headings">
                    <p><span className="name">{name}</span> {notification} <span className={`notify ${isSpecial ?'special': ''}`}>{action}</span></p>
                    {isNew && <div className="new-indicator"></div>}

                </div>
                <p className="time">{time}</p>
                {isMessage && <p className="message">{message}</p>}
            </div>
            {imageNotification && <img className="comment-profile" src={picture} />}
        </div>
    </div>
  )
}

export default Notification