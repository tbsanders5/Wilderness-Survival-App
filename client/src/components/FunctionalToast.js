import React from "react";
import M from "materialize-css";
import "materialize-css/dist/css/materialize.min.css";
import { Button, Icon, Row, Col } from 'react-materialize';
import API from "../utils/API";

function FunctionalToast(props) {

  const updateNote = () => {

    let record = {
      _id: props.noteObjecttoBeUpdated._id,
      title: props.noteObjecttoBeUpdated.title,
      note: props.noteObjecttoBeUpdated.note, // New modified note is not getting passed to this field
    }

    /*  
        Once the correct data is passed in for the note field of record,
        then the update note functionality should be working!
        
    */
    console.log("record-message: ", record.note);
    // console.log("saveNotecall", record);

    API.updateNote(record);
  };

  const test = () => {
    const options = {
      html: "Note has been Updated!",
      inDuration: 300,
      outDuration: 375,
      displyLength: 4000,
      classes: "rounded",
      onClick: updateNote(),
      completeCallback: () => {
        console.log("dismissed");
      }
    };
    M.toast(options);
  }

  return (
    <Row className="btn-row">
      <Col className="btn-col">
        <Button
          className="functional-buttons"
          id="save-updated-note"
          node="button"
          type="submit"
          waves="light"
          onClick={test}
        >
          Save
      <Icon right>save</Icon>
        </Button>
      </Col>
    </Row>
  )
}

export default FunctionalToast;