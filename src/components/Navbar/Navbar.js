import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "./navStyle.css"
import React from "react"

export default function Navbar() {
  return (
    <nav className="nav">

      <Link to="/" className="site-title">
        Ken Wong
      </Link>

      <ul>
        <CustomLink to="/About">About</CustomLink>
        <CustomLink to="/Projects">Projects</CustomLink>
        <CustomLink to="/Contact">Contact</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}