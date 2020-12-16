import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from "../images/logo.svg"
import Menu from "../images/menu.svg"
import Cart from "../images/cart.svg"

const Header = ({ siteTitle }) => (
  <header className="header">
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <img src={Logo} width="72" alt="Gaia logo"/>
        </Link>

        <Link
          to="/"
          activeStyle={{ color: "#ECD2B5" }}
          style={{
            color: `#2a2a2a`,
            textDecoration: `none`,
          }}
        >Back to ingredients</Link>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
