import React from "react"
import { NavLink, Link } from "react-router-dom"


export default function Header() {
    const isActiveLink= {
        fontWeight: "bold",
        color: "green"

    }
    return (
        <header>
            <Link className = "brand-name" to = "/brand">JustIn</Link>
            <nav>
                <NavLink to  = "/about" style = {({isActive}) => isActive ? isActiveLink : null }>
                    About
                </NavLink>
                <NavLink to  = "/projects" style = {({isActive}) => isActive ? isActiveLink : null } >
                    Projects
                </NavLink>
                <NavLink to  = "/contacts" style = {({isActive}) => isActive ? isActiveLink : null }>
                    Contacts
                </NavLink>
            </nav>

        </header>
    )
}