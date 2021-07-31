import React from 'react'
import { Container, Link, Nav } from './headerStyle'
import { Link as ReadctRouterLink } from 'react-router-dom'
export default function Header({ children, ...restprops }) {
  return <Container {...restprops}>{children}</Container>
}

Header.Nav = function HeaderNav({ children, ...restprops }) {
  return <Nav {...restprops}>{children}</Nav>
}
Header.Logo = function HeaderLogo({ to, children, ...restprops }) {
  return (
    <ReadctRouterLink to={to}>
      <Link {...restprops}>{children}</Link>
    </ReadctRouterLink>
  )
}

Header.Link = function HeaderLink({ children, ...restprops }) {
  return <Link {...restprops}>{children}</Link>
}
