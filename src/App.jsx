import React, { useEffect } from 'react'
import './App.css'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Main from './pages/main'
import * as ROUTES from './constants/routes'
import SignIn from './pages/signin'
import SignUp from './pages/signup'
import { Home, Signin, Signup } from './pages'
function App() {
  // 차후 상점페이지 등 페이지전환을 위한 라우터 사용
  return (
    <Router>
      {/* 전체 라우터 생성 */}
      <Switch>
        {/* 라우터간 이동 스위치 생성 */}
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path={ROUTES.SIGN_UP}>
          <SignUp />
        </Route>
        <Route exact path="/main">
          {/* 라우트 페이지 이동경로  path='/페이지' */}
          <Main />
        </Route>
        <Route exact path={ROUTES.HOME}>
          <Main />
        </Route>
        {/* 라우트 정보를 이용한 라우터이동 */}
      </Switch>
    </Router>
  )
}

export default App
