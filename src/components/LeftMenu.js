import React from 'react'
import PropTypes from 'prop-types'
import Box from '@mui/material/Box'
import List, {
  ListItem,
} from '@costcolabs/forge-components/dist/components/List'
import { Link } from 'gatsby'
import { styled } from '@mui/material/styles'

const LeftMenuContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: '#f2f2f2',
  minWidth: '256px',
  paddingTop: '32px',
  paddingLeft: '32px',
  overflowY: 'scroll',
}))

const MainLeftMenu = styled(List)(({ theme }) => ({
  fontSize: '18px',
  lineHeight: '24px',
  fontWeight: 'bold',
}))

const LeftMenu = ({ children, data }) => {
  return (
    <LeftMenuContainer>
    <MainLeftMenu variant="SimpleList">
      {data.nodes.map((node) => (
        <ListItem key={node.slug}>
          <Link to={`/`+node.slug}>{node.frontmatter.title}</Link>
        </ListItem>
      ))}
    </MainLeftMenu>
    </LeftMenuContainer>

  )
}
LeftMenu.propTypes = {}

export default LeftMenu
