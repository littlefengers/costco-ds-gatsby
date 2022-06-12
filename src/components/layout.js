import * as React from 'react'
import { graphql, useStaticQuery} from 'gatsby'
import { Container, Typography } from '@mui/material'
import { MuiCostcoTheme } from '@costcolabs/forge-components/dist/global/CostcoTheme'
import CssBaseline from '@mui/material/CssBaseline'
import { styled, ThemeProvider } from '@mui/material/styles'
import Box from '@mui/material/Box'
import LeftMenu from './LeftMenu'

const MainLayout = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'row',
  height: '100vh',
  paddingRight: '32px',
}))

// GraphQL call for menu

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          description
        }
      },
      allMdx {
        nodes {
          frontmatter {
            title
          }
          slug
        }
      }
    }
  `)

  return (
    <>
      <CssBaseline />
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      <meta name="description" content={data.site.siteMetadata.description} />
      <ThemeProvider theme={MuiCostcoTheme}>
        <MainLayout>
       
          <LeftMenu data={data.allMdx}/>
          <Container maxWidth="md" sx={{ marginTop: '2em' }}>
            <header>
              <Typography variant="h3">{pageTitle}</Typography>
            </header>
            <main>{children}</main>
          </Container>
        </MainLayout>
      </ThemeProvider>
    </>
  )
}

export default Layout