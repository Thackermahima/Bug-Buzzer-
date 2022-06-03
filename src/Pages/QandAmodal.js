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
import "./Style.css";
export default function QandAmodal() {
  const { Moralis, user } = useMoralis();

  const [loading, setLoading] = useState(false);

  const [askQue, setAskQue] = useState();
  const paperStyle = { height: "67vh", width: 500, marginTop: "123px" };
  let tagInput;
  const [tags, setTags] = React.useState(["Tags", "Input"]);

  const removeTag = (i) => {
    const newTags = [...tags];
    newTags.splice(i, 1);

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
  // ----------------------------formik----------------------------------------------
  const AskaQuestion = Moralis.Object.extend("AskQuestionModal");
  const askAque = new AskaQuestion();
  const formik = useFormik({
    initialValues: {
      question: "",
      tags: "",
    },

    onSubmit: async (values, { resetForm }) => {
      const formData = {
        question: values.question,
        tags: tags,
      };
      console.log(formData, "formData");

      try {
        setLoading(true);
        askAque.set("from", user.attributes.username);
        askAque.set("title", formData.question);
        askAque.set("tag", formData.tags);

        await askAque.save();
        setLoading(false);
      } catch (error) {
        setLoading(false);
        // console.log(error);
        alert(error);
      }
      resetForm();
    },
  });

  return (
    <>
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
            marginTop:'13.4%',
          }}
        >
          Ask A Question
        </Typography>
        <form
          onSubmit={formik.handleSubmit}
          style={{
            justifyContent: "center",
            marginLeft: "12vw",
            marginRight: "12vw",
            // marginTop: "110px",
          }}
        >
          <Stack spacing={3}>
            <TextareaAutosize
              // onChange={(e) => SetbugDesc(e.target.value)}
              fullWidth
              required
              name="description"
              aria-label="minimum height"
              minRows={5}
              placeholder="Ask your Question here !"
              style={{
                width: "auto",
                borderColor: "rgb(196 196 196)",
                borderRadius: "5px",
                marginTop: "60px",
              }}
              {...formik.getFieldProps("question")}
            ></TextareaAutosize>
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
                    // onChange={(e) => setTags(e.target.value)}
                    name="tags"
                    type="text"
                    onKeyDown={inputKeyDown}
                    ref={(c) => {
                      tagInput = c;
                    }}
                    // {...formik.getFieldProps("tags")}
                  />
                  ;{/* })} */}
                </li>
              </ul>
            </div>

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
                sx={{ borderRadius: 2, mt: 5, mb:5 }}
              >
                Submit
              </Button>
            </Grid>
          </DialogActions>
        </form>
      </Container>
    </>
  );
}

// export default QandAmodal;

// import React from "react";

// export default function QandAmodal(){
//     return(
//         <div>
//             <h1>QandAmodal..........</h1>
//         </div>
//     )
// }
