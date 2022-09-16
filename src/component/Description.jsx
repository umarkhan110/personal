import { Box, Button, styled, Typography} from '@mui/material'
import React from 'react'

const Desc = styled(Box)(({ theme }) => ({
  padding: 180,
  paddingTop:200,
  textAlign:"left",
  lineHeight:2,
  letterSpacing:1,
  [theme.breakpoints.down("sm")]:{
    padding:"150px 50px 10px 50px",
  },
  '& .text':{
    color:"red",
  }
}))
const Description = () => {
  return (
    <Desc>
      <Typography paragraph sx={{color:"black",fontWeight:{xs:300,md:800},  textTransform:"uppercase"}}>
        This is me</Typography>
        <Typography variant='h1' sx={{color:"black", fontWeight:500, fontSize:{xs:"30px", sm:"30px", md:"45px"}}}>UMAR DRAZ</Typography>
        <Typography variant='paragraph' sx={{ textTransform:"capitalize"}}>Hi I'm Full Stack Developer & Programmer Living in Pakistan. | Make Web Application, Usually with Reactjs.</Typography><br></br>
        <Button variant='outlined' sx={{mt:2}}>Discover Now</Button>
    </Desc>

  )
}

export default Description