import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import moment from "moment";

function ScheduleDetailsModal(props) {
  const { isShown, toggle, schedule } = props;

  return (
    <Modal isOpen={isShown} toggle={toggle}>
      <ModalHeader toggle={toggle}>Modal title</ModalHeader>
      <ModalBody>
        <p>
          <strong>Title</strong>
        </p>
        <p> {schedule.title} </p>
        <p>
          <strong>Start Time</strong>
        </p>
        <p> {moment(schedule.start).format("MM-YYYY")} </p>
        <p>
          <strong>End Time</strong>
        </p>
        <p> {moment(schedule.end).format("MM-YYYY")} </p>
      </ModalBody>
      <ModalFooter>
        <Button color="danger" onClick={this.addNewSchedule}>
          Delete
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Close
        </Button>
      </ModalFooter>
    </Modal>
  );
}

export default ScheduleDetailsModal;
