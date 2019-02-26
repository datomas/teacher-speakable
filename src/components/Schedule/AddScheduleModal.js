import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class AddScheduleModal extends Component {
  state = {
    title: "",
    time: "",
    end: ""
  };

  render() {
    const { isShown, toggle, addSchedule } = this.props;
    return (
      <Modal isOpen={isShown} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label htmlFor="usr">Title:</label>
            <input type="text" className="form-control" id="usr" />
          </div>
          <div className="form-group">
            <label htmlFor="usr">Start Time:</label>
            <input type="text" className="form-control" id="usr" />
          </div>
          <div className="form-group">
            <label htmlFor="usr">End Time:</label>
            <input type="text" className="form-control" id="usr" />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={addSchedule}>
            Add Schedule
          </Button>{" "}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
    );
  }
}

export default AddScheduleModal;
