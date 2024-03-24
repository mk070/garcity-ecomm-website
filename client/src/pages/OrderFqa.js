import React from 'react'
import Fqa from '../components/order&Fqa/Fqa'

import { Box , Container, CssBaseline, Paper} from '@mui/material'
import { Requirements } from '../components/order&Fqa/Requirements'
import Stepper from '../components/order&Fqa/Stepper'

export const OrderFqa = () => {
  return (
        <>
            <Box>
                <Requirements />
                <CssBaseline />
                <Container component={Box} p={4} bgcolor={'#FFF4F1'} marginBottom={5}>
                    <Paper component={Box} p={3} >
                        <Stepper/>
                    </Paper>
                </Container>
                <Fqa />

            </Box>
        </>
    )
}
