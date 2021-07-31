import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  background-color: black;
  color: white;
  font-weight: 300;
  font-size: large;
  text-shadow: 1px 1px 1px ${(props) => props.theme.colors.textshadow};
`
export const Tutorial = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: black;
  padding: 30px;
  border: 1px solid ${(props) => props.theme.colors.yellow};
  box-shadow: 1px 1px 12px ${(props) => props.theme.colors.textshadow};
`
export const ListItem = styled.li`
  padding: 10px;
  border: 1px solid #ccc;
  background-color: ${(props) => props.theme.colors.yellow};
  width: 90%;
  list-style: none;
`
export const Section = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #ccc;
  flex: 0.2;
  justify-content: center;
  align-items: center;
  box-shadow: 1px 1px 12px ${(props) => props.theme.colors.textshadow};
  padding: 30px;
`

export const ListWrap = styled.ul`
  width: 100%;
  flex: 1;
  padding: 0;
`
export const ListType = styled.li`
  width: 100%;
  height: 30px;
  border: 1px solid #ccc;
  clear: both;
  list-style: none;
`

export const InputToDoList = styled.div``
export const DoneButton = styled.a`
  width: 30px;
  height: 20px;
  background-color: ${(props) => props.theme.colors.punkblue};
  cursor: pointer;
  margin: 0 7px;
  float: right;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
export const DeleteButton = styled.a`
  width: 30px;
  height: 20px;
  background-color: ${(props) => props.theme.colors.punkred};
  cursor: pointer;
  float: right;
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  margin-right: 7px;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
`
export const Img = styled.div``

export const Bucket = styled.div``
