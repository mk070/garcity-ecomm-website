import React from 'react'
import Fqa from '../components/order&Fqa/Fqa'

import { Box } from '@mui/material'
import { Requirements } from '../components/order&Fqa/Requirements'

export const OrderFqa = () => {
  return (
        <>
            <Box>
                <Requirements />
                <Fqa />
            </Box>
        </>
    )
}
