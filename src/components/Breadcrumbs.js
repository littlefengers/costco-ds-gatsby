import React from 'react'
import PropTypes from 'prop-types'
import {Breadcrumbs as MUIBreadcrumbs} from '@mui/material'
import { Typography } from '@mui/material'
import { Link } from 'gatsby'


//Breadcrumbs needs to take in an object of all the pages that are nested
//Iterate through them and link to the slugs

function Breadcrumbs(props) {
  return (
    <MUIBreadcrumbs aria-label="breadcrumb" sx={{marginBottom:"16px"}}>
    <Link underline="hover" color="inherit" to="/">
      MUI
    </Link>
    <Link
      to="/material-ui/getting-started/installation/"
    >
      Core
    </Link>
    <Typography color="text.primary">Breadcrumbs</Typography>
  </MUIBreadcrumbs>
  )
}

// Breadcrumbs.propTypes = {}

export default Breadcrumbs
