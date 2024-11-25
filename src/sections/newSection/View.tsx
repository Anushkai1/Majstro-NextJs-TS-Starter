'use client'

import React from 'react'

import { Box, useTheme } from '@mui/material'

import { BorderRadiousLarge } from 'src/theme/core';

import QuestionsHeader from 'src/components/QuestionsHeader';


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
        background: theme.palette.grey[200],
        p: 3,
        borderRadius: BorderRadiousLarge
      }}
    >
      <QuestionsHeader />
    </Box>
  )
}

export default NewSectionView