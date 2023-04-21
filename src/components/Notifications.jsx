import { useState } from "react"
import data from '../data'
import Notification from "./Notification"

const Notifications = () => {
    const [notifications, setNotifications] = useState(data)

    
    const newNotificationsCount = notifications.filter(item => item.isNew).length


    const clearNewNotifications = () => {
        let clearNotifications = data.map(item => ({...item, isNew:false}))
        setNotifications(clearNotifications)
    }
  return (
    <div className="container">
        <div className="heading">
            <div className="heading-left">
                <p>Notifications {!!newNotificationsCount && <button>{newNotificationsCount}</button>}</p>
            </div>
            <div className="heading-right" onClick={clearNewNotifications}>
                <button>Mark all as read</button>
            </div>
        </div>

        <section className="notifications-list">
            {notifications.map((data, index) => {
                return (

                    <Notification data={data} key={index}/>
                )
            })}
        </section>
    </div>
    
  )
}

export default Notifications