import React from 'react'

import './NotifBox.css'
function NotifBox({text , onRemove}) {
  return (
    <div className='notifs'>
      <p className="notif-text">{text}</p>
      <button className="notif-button" onClick={onRemove}>حذف</button>
    </div>
  )
}

export default NotifBox