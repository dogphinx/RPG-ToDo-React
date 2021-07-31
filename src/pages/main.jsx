import React from 'react'
import ProfileContainer from '../container/ProfileContainer'
import StatusContainer from '../container/StatusContainer'
import TodoContainer from '../container/TodoContainer'
import '../App.css'
import styled from 'styled-components'
import HeaderContainer from '../container/HeaderContainer'
export default function Main() {
  return (
    <Home className="App">
      <HeaderContainer />
      <Profile>
        <ProfileContainer />
      </Profile>
      <Todo>
        <TodoContainer />
        <StatusContainer />
      </Todo>
      {/* <Status>
      </Status> */}
    </Home>
  )
}

const Home = styled.div`
  display: flex;
  flex-direction: row;
  background-color: black;
  height: 100vh;
  overflow: hidden;
`
const Profile = styled.div``
const Todo = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 80px;
  flex: 0.8;
`
const Status = styled.div``
