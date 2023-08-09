import React from "react"
import { NavLink } from "react-router-dom"


export default function Header() {
    const isActiveLink= {
        textDecoration: "underline",
        fontWeight: "bold",
        color: "green"

    }
    return (
        <header>
            <NavLink to  = "/home" style = {({isActive}) => isActive ? isActiveLink : null } >
                Home
            </NavLink>
            <NavLink to  = "/about" style = {({isActive}) => isActive ? isActiveLink : null }>
                About
            </NavLink>
            <NavLink to  = "/projects" style = {({isActive}) => isActive ? isActiveLink : null } >
                Projects
            </NavLink>
            <NavLink to  = "/album" style = {({isActive}) => isActive ? isActiveLink : null }>
                Album
            </NavLink>
        </header>
    )
}