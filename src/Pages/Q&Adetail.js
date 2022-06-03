import { Typography, Button, Container, Grid } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from 'react-router-dom'
import { useMoralisQuery } from 'react-moralis';

const QandAdetail = () => {
  const { data } = useMoralisQuery("AskQuestionModal");

  return (
    <>
      <Container>
        <Typography fontWeight="bold" variant="h4" mt={20} mb={-4}>
          Recently <span style={{ color: "#D82148" }}>Asked Questions</span>
        </Typography>
        {/* <Grid item>
          <Box display="flex" justifyContent="flex-end">
            <Button
              style={{
                color: "#ffffff",
                background: "#D82148",
                borderColor: "#D82148",
                fontWeight: "bold",
                textTransform: "capitalize",
              }}
              size="medium"
              variant="outlined"
              sx={{ borderRadius: 2 }}
            >
              Answers
            </Button>
          </Box>
        </Grid> */}
        {data.map((obj) =>{
                 return(
                   <>
                   <Box mt={7} >
          <Box
            sx={{ borderBottom: 1, width: 1150, color: "#E5E5E5" }}
            mb={4}
            ml={-2}
          >
            <Link to="/dashboard/QueAns/questiondetail" style={{textDecoration:"none"}}>
           
              <Typography color="black">
              
                <span style={{ fontWeight: "bold" }}>
                  {" "}
                 {obj.attributes.title}
                 {" "}
                </span>{" "}
                <br />
                <span>upvote Downvote Answers(5) </span>
                <span style={{ marginLeft: "713px" }}>
                {obj.attributes.createdAt.toString().slice(0, 27)}
                </span>
              </Typography>
            </Link>
          </Box>
          </Box>

                   </>
                 )
               })}
      
      </Container>
    </>
  );
};

export default QandAdetail;
