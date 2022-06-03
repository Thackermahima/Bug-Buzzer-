import React from 'react'
import { Typography, Grid } from '@mui/material'
const Intro = () => {
  return (
<>
<Grid container display="column" alignItems="center" justifyContent='center' >
<Grid item>

<Typography fontSize={40} fontWeight='bold'  align="center" mt={23} textAlign='left'> 
Community sourced <span style={{color:'#D82148'}}>Bug reporting</span> and <span style = {{color:'#D82148'}}>Q&A</span> Platform
     </Typography>
     <Typography style={{margin:'91px', marginLeft:'14px', marginTop: '13px',
    marginRight: '-19px',
    marginBottom: '21px',
    }}>
     Not only Security Bugs are risky and create roadblock for the growth of the product but Functional Bugs to bad UI/UX can lead to decline in on baording new users and retaining existing users. 
     </Typography>

</Grid>
</Grid>

</>
    )
}

export default Intro;
