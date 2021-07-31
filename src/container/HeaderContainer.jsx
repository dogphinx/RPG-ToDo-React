import React from 'react'
import { Header } from '../component'
import * as ROUTES from '../constants/routes'
function HeaderContainer({ children }) {
  return (
    <Header>
      <Header.Nav>
        <Header.Logo to={ROUTES.HOME}>Home</Header.Logo>
        <Header.Logo to={ROUTES.SIGN_IN}>Sign_In</Header.Logo>
      </Header.Nav>
      {children}
    </Header>
  )
}

export default HeaderContainer
