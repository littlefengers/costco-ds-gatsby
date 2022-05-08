import * as React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/layout'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const ContentPage = ({ data }) => {
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <article>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </article>
    </Layout>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
      }
      body
    }
  }
`

export default ContentPage
