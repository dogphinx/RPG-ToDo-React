import React, { useState, useContext } from 'react'
import { useHistory } from 'react-router-dom'
import { firebaseapp } from '../lib/firebase.prod'
import { FirebaseContext } from '../context/firebaseContext'
import * as ROUTES from '../constants/routes'
import { Form } from '../component'
import Back from '../component/media/Back2.mp4'
export default function SignIn() {
  const history = useHistory()
  // 기록을 도와줍니다.
  const { firebaseapp } = useContext(FirebaseContext)
  // useContext 에서 firebase 를 가져옵니다.
  const [emailAddress, setEmailAddress] = useState('')
  //  email을 적을수있는 가상돔을 작성합니다.
  const [password, setPassword] = useState('')
  //  password을 적을수있는 가상돔을 작성합니다.
  const [error, setError] = useState('')
  //  error 코드를 보여줄수있는 가상돔을 작성합니다.
  const isInvalid = password === '' || emailAddress === ''
  // emilAddress와 password 가 작성되어있는지 체크해줍니다.
  const handleSignin = (event) => {
    //클릭이벤트를 만들어줍니다.
    event.preventDefault()
    // 이벤트 생성
    return firebaseapp //파이어베이스
      .auth() //계정정보에 접근합니다.
      .signInWithEmailAndPassword(emailAddress, password) //Email주소와 패스워드로 로그인을 진행합니다. emailaddress와 password를 가져옵니다.
      .then(() => {
        history.push(ROUTES.BROWSE)
        //로그인 접속시 Routes 에 저장된 Browse 페이지로 이동합니다.
      })
      .catch((error) => {
        setEmailAddress('')
        setPassword('')
        setError(error.message)
      })
    //에러 발생시 경고문을 띄웁니다.
  }

  return (
    <Form.Decorate src={Back}>
      {/* src 부분에 영상을 넣으면 백그라운드로 영상이 출력됩니다. */}
      <Form>
        <Form.Title>Sign In</Form.Title>
        {error && <Form.Error data-testid="error">{error}</Form.Error>}
        {/* error 메세지를 를 반환합니다. */}
        <Form.Base onSubmit={handleSignin} method="POST">
          <Form.Input
            placeholder="Email address"
            value={emailAddress}
            onChange={({ target }) => setEmailAddress(target.value)}
          />
          <Form.Input
            type="password"
            value={password}
            autoComplete="off"
            placeholder="Password"
            onChange={({ target }) => setPassword(target.value)}
          />
          <Form.Submit disabled={isInvalid} type="submit" data-testid="sign-in">
            Sign In
          </Form.Submit>
        </Form.Base>

        <Form.Text>
          Do you want Play? <Form.Link to="/signup">Sign up now.</Form.Link>
        </Form.Text>
        <Form.TextSmall>Hello adventure! we must Go on</Form.TextSmall>
      </Form>
    </Form.Decorate>
  )
}
