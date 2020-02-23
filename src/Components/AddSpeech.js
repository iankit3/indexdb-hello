import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";
import { addData } from "../Services/Storage";

const AddSpeech = (props) => {
  const [title, setTitle] = useState(props.selected.title);
  const [author, setAuthor] = useState(props.selected.author);
  const [date, setDate] = useState(props.selected.date);
  const [desc, setDesc] = useState(props.selected.desc);
  const [keywords, setKeywords] = useState(props.selected.keywords);

  let handleSubmit = ev => {
    ev.preventDefault();
    addData(title, author, date, desc, keywords, props.selectedId);
  };

  return (
    <form
      noValidate
      autoComplete="off"
      onSubmit={handleSubmit}
      className={" speech-form"}
    >
      <div style={{ width: "100%", margin: "20px 0" }}>
        <TextField
          id="standard-name"
          label="Author Name"
          value={author}
          style={{ width: "50%" }}
          onChange={ev => setAuthor(ev.target.value)}
          InputLabelProps={{
            shrink: true
          }}
        />

        <TextField
          id="date"
          label="Date"
          type="date"
          defaultValue="2017-05-24"
          style={{ width: "50%" }}
          value={date}
          onChange={ev => setDate(ev.target.value)}
          InputLabelProps={{
            shrink: true
          }}
        />
      </div>
        
      <div style={{ width: "100%", margin: "20px 0" }}>
        <TextField
          label="Title"
          defaultValue="Title"
          value={title}
          onChange={ev => setTitle(ev.target.value)}
          style={{ width: "90%", margin: "auto" }}
          InputLabelProps={{
            shrink: true
          }}
        />
      </div>

      <div style={{ width: "100%", margin: "20px 0" }}>
        <TextField
          id="standard-multiline-static"
          label="Speech"
          multiline
          rows="4"
          defaultValue="Default Value"
          value={desc}
          onChange={ev => setDesc(ev.target.value)}
          variant="outlined"
          style={{ width: "90%", margin: "auto" }}
        />
      </div>
      <div style={{ width: "100%", margin: "20px 0" }}>
        <TextField
          id="standard-name"
          label="Keywords (Comma Seperated)"
          value={keywords}
          onChange={ev => setKeywords(ev.target.value.split(","))}
          InputLabelProps={{
            shrink: true
          }}
          style={{ width: "40%" }}
        />
        {/* <Chip size="small" avatar={<Avatar>M</Avatar>} label="Clickable" onClick={handleClick} /> */}
      </div>
      <div>
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default AddSpeech;
