'use client'

import React from 'react'

import { Box, useTheme } from '@mui/material'


function NewSectionView() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        mx: 'auto',
        width: {
          xs: 'calc(100% - 48px)',
          lg: 'calc(100% - 80px)'
        },
        maxWidth: 'md',
        background: theme.palette.grey[200]
      }}
    >
      sdfsf
    </Box>
  )
}

export default NewSectionView