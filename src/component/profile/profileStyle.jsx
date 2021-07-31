import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #dddddd;
  background-color: black;
  color: white;
  width: 300px;
  text-shadow: 1px 1px 1px ${(props) => props.theme.colors.textshadow};
  height: 100%;
  margin-right: 60px;
  @media (max-width: 600px) {
    display: none;
  } ;
`
export const Section = styled.div``

export const Character = styled.div`
  width: 100%;
  border: 5px dotted #afd222;
`
export const Img = styled.img`
  width: 100%;
  object-fit: contain;

  /* max-width: 400px; */
`
export const Inventory = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 30px;
  background-color: black;
`
export const Item = styled.div`
  display: inline-flex;
  width: 23.9999%;
  height: 57px;
  text-align: center;
  justify-content: center;
  align-items: center;
  background-color: black;
  margin: 10px;
  border: 1px solid ${(props) => props.theme.colors.textshadow};
  cursor: pointer;
`
export const RowItemWrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  border: 2px solid ${(props) => props.theme.colors.punkred};
`
export const ColumnItemWrap = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #ccc;
`

export const ExpbarWrap = styled.div`
  width: 100%;
  background-color: aqua;
`
export const Expbar = styled.div`
  background-color: blue;
  height: 30px;
  width: 30%;
`
export const Headline = styled.h1`
  text-align: center;
  margin: 10px;
  background-color: black;
  color: white;
`
export const Text = styled.p`
  background-color: black;
  color: white;
`
