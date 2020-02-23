import React, {useState, useEffect} from "react";
import { Container, Paper, Grid, AppBar, Toolbar, IconButton, Input} from "@material-ui/core";
import MenuIcon from '@material-ui/icons/Menu';

import "./App.css";
import GList from "./Components/GList";

import { getList } from "./Services/Storage";
import AddSpeech from "./Components/AddSpeech";

function App() {
  const [list, setList] = useState([]);
  const [selectedId, setSelectedId] = useState(0);

  // useEffect(() => {
  //   getList().toArray((d) => {
  //     setList(d);
  //   })
  // },[])

  useEffect(() => {
    getList().toArray((d) => {
      setList(d);
    })
  },[selectedId])

  let search = (v) => {
    //setList(DB.speeches.where('author').contains(v));
  }
  return (
    <div className="App">
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <h2>Speechs</h2>
          <Input
            defaultValue=""
            inputProps={{ "aria-label": "description" }}
            onChange={ev => {
              if (ev.key == "Enter") {
                search(ev.target.value);
              }
            }}
          />
        </Toolbar>
      </AppBar>
      <Container fixed>
        <Grid container spacing={30}>
          <Grid item xs={3}>
            <Paper style={{ height: "calc(100vh - 70px)", marginRight: "5px" }}>
              <GList data={list} setSelectedId={setSelectedId}/>
            </Paper>
          </Grid>
          <Grid item xs={9}>
            <Paper style={{ height: "calc(100vh - 70px)" }}>
              <AddSpeech
                selected={list.filter(e => e.id == selectedId).length > 0
                   ? list.filter(e => e.id == selectedId)[0] : {}}
                selectedId={selectedId}
              />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
