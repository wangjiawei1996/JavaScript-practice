// useState
import React, { useState } from 'react';

const practice = () => {
  const [ count, setCount ] = useState(0);
  return (
    <div>
      <p>You clicked { count } times</p>
      <button onClick={() => {setCount( count + 1)}}>Click me</button>
    </div>
  )
}
export default practice;
//useEffect
import React, { useState, useEffect } from 'react'

const PracticeUseEffect = () => {
  const [ count, setCount] = useState[0]
  useEffect(() => {
    document.title = `you clicked ${ count } times`
  })
  return (
    <div>
      <p>You clicked { count } times</p>
      <button onClick = {setCount(count + 1)}>Clicked me</button>
    </div>
  )
}
export default PracticeUseEffect
//副作用订阅好友状态在线
import React, { useState, useEffect } from 'react'
const FriendStatus = (props) => {
  const [ isOnline, setIsOnline] = useState(null)
  function handleStatusChange(status) {
    setIsOnline(status.isOnline)
  }
  useEffect(() => {
    ChatAPI.subscribeToFriendStatus(props.friend.id, handleStatusChange)
    return () => {
      ChatAPI.unsubscribeFromFriendStatus(props.friend.id, handleStatusChange)
    }
  })
  if (isOnline === null) {
    return 'loading...'
  }
  return isOnline ? 'Online' : 'Offline'
}
export default FriendStatus