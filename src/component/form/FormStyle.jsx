import styled from 'styled-components/macro'
import { Link as ReachRouterLink } from 'react-router-dom'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 350px;
  background-color: rgba(0, 0, 0, 0.658);
  border-radius: 5px;
  width: 100%;
  margin: auto;
  max-width: 450px;
  padding: 60px 40px;
  margin-bottom: 100px;
  margin-top: 40px;
`
export const Decorate = styled.div`
  z-index: 0;
  position: absolute;
  overflow: hidden;
  width: 100%;
  video {
    position: fixed;
    top: 0;
    left: 0;
    min-width: 100%;
    min-height: 100%;
    width: auto;
    height: auto;
    z-index: -1;
  }
`

export const Error = styled.div`
  background: #e87c03;
  border-radius: 4px;
  font-size: 14px;
  margin: 0 0 16px;
  color: white;
  padding: 15px 20px;
`

export const Base = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
`

export const Title = styled.h1`
  color: #fff;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 28px;
  text-shadow: 1px 1px 1px #00f7ff;
`

export const Text = styled.p`
  color: #ffd900;
  text-shadow: 1px 1px 1px #00f7ff;
  font-size: 16px;
  font-weight: 500;
`

export const TextSmall = styled.p`
  margin-top: 10px;
  font-size: 13px;
  line-height: normal;
  color: white;
`

export const Link = styled(ReachRouterLink)`
  color: #fff;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`

export const Input = styled.input`
  border-radius: 4px;
  border: 0;
  color: green;
  height: 50px;
  line-height: 50px;
  padding: 5px 20px;
  margin-bottom: 20px;
  &:last-of-type {
    margin-bottom: 30px;
  }
`

export const Submit = styled.button`
  background: #ffd900;
  font-size: 25px;
  font-weight: bold;
  margin: 24px 0 12px;
  padding: 16px;
  border: 0;
  color: black;
  text-shadow: 1px 1px 1px #00f7ff;
  border-right: 5px solid lightblue;
  cursor: pointer;
  &:disabled {
    opacity: 0.5;
  }
`
