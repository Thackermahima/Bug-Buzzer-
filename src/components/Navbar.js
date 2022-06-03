import React from "react";
import { useMoralis } from "react-moralis";
import { useNavigate } from "react-router-dom";
import { AppBar, Toolbar, Button, Typography, Divider } from "@mui/material";
import { Box } from "@mui/system";
import DashboardNav from "../Pages/DashboardNav";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  const { authenticate, isAuthenticated, isAuthenticating, logout, user } =
    useMoralis();

  // for displaying user name from Moralis use --> user.attributes.username <--
  // if (isAuthenticated) {
  //   return (
  //     <div>
  //       <h1>
  //         <div>helooooo</div>Nav bar{user.attributes.username}{" "}
  //       </h1>
  //       {/* {console.log(user.attributes, "userr")} */}
  //       <div id="address" class="text-muted my-3"></div>

  //       <Button onClick={() => logout()}>Log out</Button>
  //     </div>
  //   );
  // }
  return (
    <AppBar color="inherit" position="fixed" sx={{ height: "70px" }}>
      <Toolbar>
        <Typography flexGrow={1}>
          <img src="BugBuzzer-Logo-Web.png" alt="logo" />
        </Typography>

        <Box m={1} p={2}>
          {/* <Link to = "/reportbug"> */}
          <Button
            style={{
              color: "black",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
            size="medium"
            variant="text"
          >
            Report Bug
          </Button>
          {/* </Link> */}
          {/* <Link to="/Q&A"> */}
          <Button
            style={{
              color: "black",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
            size="medium"
            variant="text"
          >
            Q&A
          </Button>
          {/* </Link> */}
          {/* <Link to="bountycompaigns"> */}
          <Button
            style={{
              color: "black",
              fontWeight: "bold",
              textTransform: "capitalize",
            }}
            size="medium"
            variant="text"
          >
            Bounty Campaign
          </Button>

          <Button
            style={{
              color: "#D82148",
              fontWeight: "bold",
              textTransform: "capitalize",
              border: "1px solid #D82148",
            }}
            size="small"
            variant="outlined"
            sx={{ borderRadius: 2 }}
            isLoading={isAuthenticating}
            onClick={async () => {
              await authenticate();
              navigate("/dashboard");
            }}
          >
            Connect
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
