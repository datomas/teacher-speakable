import React, { Component } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

class AddScheduleModal extends Component {
  state = {
    form: {
      title: "",
      time: "",
      end: ""
    }
  };

  onInputChange = e => {
    const name = e.target.name;
    const value = e.target.value;

    let form = { ...this.state.form };
    form[name] = value;
    this.setState({
      form
    });
  };

  render() {
    const { form } = this.state;
    const { isShown, toggle, addSchedule } = this.props;
    const { title, start, end } = form;
    return (
      <Modal isOpen={isShown} toggle={toggle}>
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
          <div className="form-group">
            <label htmlFor="usr">Title:</label>
            <input
              value={title}
              type="text"
              className="form-control"
              name="title"
              onChange={this.onInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="usr">Start Time:</label>
            <input
              value={start}
              type="text"
              className="form-control"
              name="start"
              onChange={this.onInputChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="usr">End Time:</label>
            <input
              value={end}
              type="text"
              className="form-control"
              name="end"
              onChange={this.onInputChange}
            />
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={() => addSchedule(form)}>
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
