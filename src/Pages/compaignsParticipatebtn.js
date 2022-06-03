import React, { useState, useEffect } from "react";
import {
  Stack,
  TextField,
  FormControl,
  Box,
  Container,
  Typography,
  TextareaAutosize,
} from "@mui/material";
import DialogActions from "@mui/material/DialogActions";
import Grid from "@material-ui/core/Grid";
import Button from "@mui/material/Button";
import { useFormik, Form, FormikProvider } from "formik";
import { useMoralis, useMoralisCloudFunction } from "react-moralis";
import { useLocation, useParams } from "react-router-dom";

export default function Participatebtn(props) {
  // const { data, isLoading } = useMoralisCloudFunction("getAllUser");
  const location = useLocation();
  const { Moralis, user } = useMoralis();

  const param = useParams();
  // console.log(param,'param-->');

  const [tags, setTags] = React.useState(["Tags"]);
  const [bugTitle, SetbugTitle] = useState("");
  // const [bugTag, SetbugTag] = useState([]);
  const [bugDesc, SetbugDesc] = useState("");
  const [loading, setLoading] = useState(false);
  let tagInput;

  const [value, setValue] = React.useState(0);
  // useEffect(() => {
  //   fetch();
  // }, ['']);

  useEffect(() => {
    console.log(location, "path_location-->"); // result: '/secondpage'

    // console.log(location.state,"state"); // result: 'some_value'
  }, [location]);
  const handleChange = (event, val) => {
    setValue(val);
    console.log(val);
  };

  const participateCompaigns = Moralis.Object.extend("ParticipateCompaigns");
  const CompaignsParticipate = new participateCompaigns();

  const formik = useFormik({
    initialValues: {
      title: "",
      tags: "",
      description: "",
    },

    onSubmit: async (values, { resetForm }) => {
      const formData = {
        title: values.title,
        tags: tags,
        description: values.description,
      };
      console.log(formData, "formData");

      try {
        setLoading(true);

        CompaignsParticipate.set("from", user.attributes.username);
        CompaignsParticipate.set("title", formData.title);
        CompaignsParticipate.set("tag", formData.tags);
        CompaignsParticipate.set("description", formData.description);
        CompaignsParticipate.set("compaign_id", param.id);

        await CompaignsParticipate.save();
        setLoading(false);
      } catch (error) {
        setLoading(false);
        // console.log(error);
        alert(error);
      }
      resetForm();
    },
  });

  const removeTag = (i) => {
    const newTags = [...tags];
    newTags.splice(i, 1);

    // Call the defined function setTags which will replace tags with the new value.
    setTags(newTags);
  };

  const inputKeyDown = (e) => {
    const val = e.target.value;
    if (e.key === "Enter" && val) {
      if (tags.find((tag) => tag.toLowerCase() === val.toLowerCase())) {
        return;
      }
      setTags([...tags, val]);
      tagInput.value = null;
    } else if (e.key === "Backspace" && !val) {
      removeTag(tags.length - 1);
    }
  };

  // cloud function ---------------------------------------------------->>>>>>>>
  // const { fetch, data } = useMoralisCloudFunction("getParticipate", {
  //   autoFetch: true,
  // });
  // console.log(data, "cloud--->");
  // cloud function ---------------------------------------------------->>>>>>>>>

  return (
    <Container>
      <Typography
        variant="h5"
        sx={{
          pt: 16,
          fontWeight: "bolder",
          color: " rgb(216, 33, 72)",
          TextDecoder: "none",
          border: "none",
          textAlign: "center",
        }}
      >
        Participate in campaign
      </Typography>
      <form
        onSubmit={formik.handleSubmit}
        style={{
          justifyContent: "center",
          marginLeft: "12vw",
          marginRight: "12vw",
          marginTop: "110px",
        }}
      >
        <Stack spacing={3}>
          <TextField
            onChange={(e) => SetbugTitle(e.target.value)}
            required
            fullWidth
            label="Bug Title"
            name="title"
            id="to"
            type="text"
            {...formik.getFieldProps("title")}
          />{" "}
          <div
            className="input-tag"
            style={{
              width: "auto",
            }}
          >
            <ul className="input-tag__tags">
              {tags.map((tag, i) => (
                <li key={tag}>
                  {tag}
                  <button
                    type="button"
                    onClick={() => {
                      removeTag(i);
                    }}
                  >
                    {/* {console.log(tags,'tagg')} */}+
                  </button>
                </li>
              ))}
              <li className="input-tag__tags__input">
                <input
                  // required
                  // onChange={(e)=>bugTagschange(e)}
                  onChange={(e) => setTags(e.target.value)}
                  name="tags"
                  type="text"
                  onKeyDown={inputKeyDown}
                  ref={(c) => {
                    tagInput = c;
                  }}
                  {...formik.getFieldProps("tags")}
                />
                ;{/* })} */}
              </li>
            </ul>
          </div>
          <TextareaAutosize
            onChange={(e) => SetbugDesc(e.target.value)}
            fullWidth
            required
            name="description"
            aria-label="minimum height"
            minRows={5}
            placeholder="Description"
            style={{
              width: "auto",
              borderColor: "rgb(196 196 196)",
              borderRadius: "5px",
              marginTop: "60px",
            }}
            {...formik.getFieldProps("description")}
          ></TextareaAutosize>
          {/* ----------------------------------------------- */}
        </Stack>
        <DialogActions>
          <Grid container justifyContent="center">
            <Button
              variant="contained"
              type="submit"
              size="midium"
              style={{
                backgroundColor: "#D82148",
                textTransform: "capitalize",
                border: "2px solid #D82148",
                marginRight: "18px",
                fontWeight: "bold",
              }}
              sx={{ borderRadius: 2, mt: 5 }}
            >
              Submit
            </Button>
          </Grid>
        </DialogActions>
      </form>
    </Container>
  );
}
