import * as React from 'react'
import { graphql, useStaticQuery,Link } from 'gatsby'

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      }
    }
  `)

  return (
    <>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <meta name="description" content={data.site.siteMetadata.description} />
      <header><h1>{pageTitle}</h1></header>
      <main>
        {children}
      </main>

    </>
  )
}

export default Layout
