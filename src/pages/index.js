import * as React from 'react'
import { graphql, Link } from 'gatsby'
import Layout from '../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'

// styles

// markup

export const query = graphql`
  query {
    allMdx {
      nodes {
        frontmatter {
          title
        }
        slug
      }
    }
  }
`

const IndexPage = ({ data }) => {
  return (
    <Layout pageTitle="Content">
      <ul>
        {data.allMdx.nodes.map((node) => (
          <li key={node.slug}>
            <Link to={node.slug}>{node.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </Layout>
  )
}

export default IndexPage
