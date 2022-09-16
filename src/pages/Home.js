import { Paper, Stack, styled } from '@mui/material'
import React from 'react'
import Description from '../component/Description';
import Image from '../component/Image';
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
   
  }));
const Home = () => {
    return (
        <Stack direction="row" sx={{display:{xs:"block", lg:"inline-flex"}}}>
            <Item>
                <Description />
            </Item>
            <Item>
                <Image />
            </Item>
        </Stack>
    )
}

export default Home