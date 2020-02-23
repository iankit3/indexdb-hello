import React from "react";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import DraftsIcon from "@material-ui/icons/Drafts";

const GList = ({ data, setSelectedId }) => {
  return (
    <List aria-label="main mailbox folders">
      {data.map((e, i) => {
        return (
          <ListItem key={i} style={{cursor: "pointer"}}>
            <ListItemIcon>
              <DraftsIcon />
            </ListItemIcon>
            <ListItemText primary={e.title} data-id={e.id} onClick={() => {              
               setSelectedId(e.id)
              }
            }
            />
          </ListItem>
        );
      })}
    </List>
  );
};

export default GList;
