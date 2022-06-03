import React, { useState } from "react";
import { Stack, Typography, Button, Container } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";

import { useParams, generatePath, useNavigate } from "react-router-dom";

const pratbtn = [
  {
    id: "1",
    title: "Security Bounty report Challange by Polygon",
    prize: " 1000 USDC and polygon Dev NFT",
    category: " Security | Functional | UI/UX",
    duration: "10 March 2022 to 22 April 2022",
  },
  {
    id: "2",
    title: "Title 2",
    prize: "Prise 2",
    category: "Category 2",
    duration: "duretion 2",
  },
  {
    id: "3",
    title: "Title 3",
    prize: "Prise 3",
    category: "Category 3",
    duration: "duretion 3",
  },
  {
    id: "4",
    title: "Title 4",
    prize: "Prise 4",
    category: "Category 4",
    duration: "duretion 4",
  },
];
// const Pratbtn = () => {
//   const { id } = useParams();

//   console.log(id, "id--->");
// };

const Compaigns = () => {
  // console.log(pratbtn,'objid--->');
  // const [id, setId] = useState();
  const navigate = useNavigate();
  const { id } = useParams();

  console.log(pratbtn.id, "iddddd");

  

  // const handleProceed = (id) => {
  //   navigate(`/dashboard/bugcampaigns/praticipatebtn/:${id}`, {
  //     // state: { id: id },
  //   });
  // };
  return (
    <>
      <Container>
        <Typography variant="h4" fontWeight="bold" mt={23} mb={-4}>
          Join <span style={{ color: "#D82148" }}>BugBounty</span> campaigns
        </Typography>

        {/* <Box display="flex" justifyContent="flex-end">
          <Button
            style={{
              color: "#D82148",
              textTransform: "capitalize",
              border: "1px solid #D82148",
              marginRight: "8x",
              fontWeight: "bold",
            }}
            size="small"
            variant="outlined"
            sx={{ borderRadius: 2, mr: 1 }}
          >
            view all
          </Button>

          <Button
            variant="contained"
            size="small"
            style={{
              backgroundColor: "#D82148",
              textTransform: "capitalize",
              border: "2px solid #D82148",
              marginRight: "18px",
              fontWeight: "bold",
            }}
            sx={{ borderRadius: 2 }}
          >
            Create Bugbounty
          </Button>
        </Box> */}

        <Stack direction="row" mt={4} flexWrap="wrap">
          {/* -=-=-=======-------------==============------------------===============----===- */}
          {pratbtn.map((part) => {
            return (
              <Box
                sx={{
                  height: "193px",
                  width: "473px",
                  border: "1px solid #D82148",
                  background: "#FFFFFF",
                  p: 1,
                  m: 1,
                }}
              >
                <Typography
                  variant="subtitle1"
                  fontStyle="bold"
                  fontWeight="700"
                  ml={1}
                  mb={1}
                  mt={1}
                >
                  {part.title}
                </Typography>
                <Typography
                  variant="subtitle2"
                  fontStyle="bold"
                  fontWeight="550"
                  ml={1}
                  mt={1}
                >
                  {" "}
                  Prize :
                  <span style={{ color: "#D82148", fontWeight: "10" }}>
                    {" "}
                    {part.prize}{" "}
                  </span>
                </Typography>
                <Typography
                  variant="subtitle2"
                  fontStyle="bold"
                  fontWeight="550"
                  ml={1}
                  mt={1}
                >
                  Category :
                  <span style={{ fontWeight: "10" }}> {part.category} </span>
                </Typography>
                <Typography
                  variant="subtitle2"
                  fontStyle="bold"
                  fontWeight="550"
                  ml={1}
                  mt={1}
                >
                  Duration :{" "}
                  <span style={{ fontWeight: "10" }}> {part.duration} </span>
                </Typography>
                <div style={{ textAlign: "center" }}>
                  <div key={part.id}>
                    <Link
                      style={{ textDecoration: "none" }}
                      to={{
                        pathname: `/dashboard/bugcampaigns/praticipate/${part.id}`,
                        state: { pratbtn: part},
                      }}
                    >
                      {/* </div> */}

                      <Button
                        // onClick={(handleProceed())}

                        size="medium"
                        style={{
                          fontSize: "11px",
                          fontWeight: "bold",
                          backgroundColor: "#D82148",
                          color: "white",
                          marginTop: "18px",
                          // justifyContent:"center",
                          textTransform: "capitalize",
                        }}
                      >
                        Participate
                      </Button>
                    </Link>
                    <Link
                      style={{ textDecoration: "none" }}
                      to={{
                        pathname: `/dashboard/bugcampaigns/detail/${part.id}`,
                        state: { pratbtn: part},
                      }}
                    >
                    <Button
                      href="/dashboard/bugcampaigns/detailbtn"
                      size="medium"
                      style={{
                        fontSize: "11px",
                        fontWeight: "bold",
                        backgroundColor: "#D82148",
                        color: "white",
                        marginTop: "18px",
                        marginLeft: "3%",
                        textTransform: "capitalize",
                      }}
                    >
                      Detail
                    </Button>
                    </Link>
                  </div>
                </div>
              </Box>
            );
          })}
        </Stack>
      </Container>
    </>
  );
};

export default Compaigns;
