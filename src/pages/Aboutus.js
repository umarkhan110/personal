import { Typography, Box } from '@mui/material'
import { styled } from '@mui/system'
import React from 'react'
import { Element } from 'react-scroll'
import About from './About'

const Desc = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: 'center',
  textAlign: "center",
  // backgroundColor: "#6E07F3",
  background: "linear-gradient(to right top, #212121, #424242)",
  borderBottomRightRadius:"500px",
  color: "white",
  padding: "5rem 1.5rem",
  height: "60vh",
  [theme.breakpoints.down("sm")]:{
    padding: "3rem 0.5rem",
    borderBottomRightRadius:"0px",
    height: "90vh",
  },
  h1:{ [theme.breakpoints.down("sm")]:{
    fontSize: '1.5rem',
    fontWeight: 600,
  },
}
}))
const Desc1 = styled(Box)(({theme})=>({
  backgroundColor: "white",
  margin: "0 80px",
  position: "relative",
  top:"-170px",
  height: "32vh",
  borderRadius: "10px",
  padding: "10px",
  [theme.breakpoints.down("sm")]:{
    margin: "0 40px",
    height: "40vh",
    top:"-330px"
  },
}))
const Aboutus = () => {
  return (
    <Element name={"About"} id="about">
      <Desc>
        <Box
          sx={{ width: {md:"52%", xs:"100%"}, padding: "0.75rem" }}>
          <Typography variant='h1' sx={{
            fontSize: '2rem',
            fontWeight: 800, lineHeight: 1.125,
            mb: 2,
           
          }}>Hi, I’m Umar. Nice to meet you.</Typography>
          <Typography variant="h2"
            sx={{
              fontSize: '1.25rem',
              fontWeight: 400, lineHeight: 1.75,
              wordBreak: "break-word",
              fontFamily: 'europa, sans-serif',
            }}>Since beginning my journey as a freelance designer over 11 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.</Typography>
        </Box>
      </Desc>
      <Desc1>
        <About />
      </Desc1>
    </Element>
  )
}

export default Aboutus