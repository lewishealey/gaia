/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Hero from "../images/Illustration.svg"

import Header from "./header"

const Layout = ({ title, subtitle, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
    {title ?
        <div className="hero">
            <div className="layout">
                <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
                <h1>{title}</h1>
                <h2>{subtitle}</h2>
            </div>
            <div className="hero__container">
                <img src={Hero} className="hero__banner"/>
            </div>
        </div>
: <div className="hero">
<div className="layout">
    <Header siteTitle={data.site.siteMetadata?.title || `Title`} /></div></div> }
        <main>{children}</main>
        <div className="layout">
            <footer style={{
            marginTop: `2rem`
            }}>
            © {new Date().getFullYear()} Gaia Store
            </footer>
         </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
