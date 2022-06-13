import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from './layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const ContentPage = ({ data: { mdx } }) => {
  return (
    <Layout pageTitle={mdx.frontmatter.title}>
      <article>
        <MDXRenderer>{mdx.body}</MDXRenderer>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
      }
    }
  }
`

export default ContentPage
