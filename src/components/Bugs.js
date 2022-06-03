import React from 'react'
import { Typography, Stack, Card, CardContent} from '@mui/material'
const Bugs = () => {
  return (
    <>


      <Typography fontWeight='bold' variant='h4' ml={1.5} mt={10}>
        Let's Report:
      </Typography>
      <Typography m={1.8}>
      Help projects succeed by Reporting bugs, share your knowledge in Q&A and earn Tokens and NFTs as rewards.      </Typography>
      
      <Stack direction="row" justifyContent="space-between" sx={{flexWrap:"wrap"}}>
    <Card sx={{ width:170, height: 140 ,color:"white", mb:2, backgroundColor:"#D82148" }}>
    <CardContent>
      <Typography variant="subtitle2"  mt={4} fontWeight = 'bold' gutterBottom justifycontent="center" textAlign="center">
      Smart contract Blockchain Bugs      </Typography>
    </CardContent>
  </Card>
  <Card  variant='outlined'sx={{ width:170, height: 140 ,mb:2, color:"#D82148",borderColor:"#D82148" }}>
    <CardContent>
      <Typography variant="subtitle2" mt={4} fontWeight = 'bold' gutterBottom justifycontent="center" textAlign="center">
      Security Vulnerabilites
 </Typography>
    </CardContent>
  </Card>
  <Card sx={{ width:170, height: 140  ,color:"white",mb:2, backgroundColor:"#D82148" }}>
    <CardContent>
      <Typography variant="subtitle2" mt={5} fontWeight = 'bold' gutterBottom justifycontent="center" textAlign="center">
      Functional issues      </Typography>
    </CardContent>
  </Card>
  <Card variant='outlined' sx={{ width:170, height: 140 ,color:"#D82148", borderColor:"#D82148" }}>
    <CardContent>
      <Typography variant="subtitle2" mt={4} fontWeight = 'bold'  gutterBottom justifycontent="center" textAlign="center">
      Hardware/
            IOT device bug     </Typography>
    </CardContent>
  </Card>
  <Card sx={{ width:170, height: 140 ,color:"white",mb:2, backgroundColor:"#D82148" }}>
    <CardContent>
      <Typography variant="subtitle2" mt={5} fontWeight = 'bold' gutterBottom justifycontent="center" textAlign="center">
      UI/UX improvement      </Typography>
    </CardContent>
  </Card>
  <Card variant="outlined" sx={{ width:170, height: 140,mb:2  ,color:"#D82148", borderColor:"#D82148"}}>
    <CardContent>
      <Typography variant="subtitle2" mt={4} fontWeight = 'bold' gutterBottom justifycontent="center" textAlign="center">
Crypto/Flat Scams.Rug Pool     </Typography>
    </CardContent>
  </Card>
  </Stack>


    </>

  )
}

export default Bugs
