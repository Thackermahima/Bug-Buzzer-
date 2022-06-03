import { Typography , Button, Container,Grid} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { useMoralisQuery } from 'react-moralis';

const QandAList = () => {
  const { data } = useMoralisQuery("AskQuestionModal");

  return (
      <>
<Container>

        <Typography  fontWeight='bold' variant='h4' mt={10} style={{ marginLeft:'-16px'}} mb={-4} >
Recently  <span style={{color:'#D82148'}}>Asked Questions</span>       

    </Typography>
  <Grid item>

<Box

display="flex"
justifyContent="flex-end"
>
  <Button style ={{color:'#D82148',borderColor:'#D82148', fontWeight:'bold', textTransform:'capitalize'}} size = "medium" variant="outlined"  sx={{borderRadius:2,mr:1}} >
View all
</Button>

<Button style ={{color:'#ffffff',background:'#D82148',borderColor:'#D82148', fontWeight:'bold',textTransform:'capitalize'}} size = "medium" variant="outlined"  sx={{borderRadius:2}}>
Answers</Button>
</Box>
</Grid>

<Box mt={5}>

{data.map((obj)=>{
  return(
    <>
<Box sx={{ borderBottom: 1, width: 1000, color: "#E5E5E5" }} mb={4}>
    
  <Typography color='black'>  
  <span style={{fontWeight:'bold'}}>  {obj.attributes.title}  </span> <br />
  <span>upvote Downvote Answers(5) </span>
<span style={{marginLeft:'500px'}}>{obj.attributes.createdAt.toString().slice(0, 27)}</span>
    </Typography>
  
   </Box>
   </>
  )
})
} 
   
</Box>
  
</Container>

  
      </>
  
    )
}

export default QandAList
