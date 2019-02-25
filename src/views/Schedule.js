import React, { Component } from "react";
import { connect } from "react-redux";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Swal from "sweetalert2";

const localizer = BigCalendar.momentLocalizer(moment);

class Schedule extends Component {
  state = {
    userType: "teacher",
    isModalAddScheduleShown: false,
    addScheduleForm: {},
    events: [
      {
        id: 8,
        title: "Meeting",
        start: new Date(2019, 1, 17, 14, 0, 0, 0),
        end: new Date(2019, 1, 17, 15, 0, 0, 0),
        status: "closed"
      },
      {
        id: 9,
        title: "Class",
        start: new Date(2019, 1, 18, 17, 0, 0, 0),
        end: new Date(2019, 1, 18, 17, 30, 0, 0),
        desc: "Most important meal of the day",
        status: "closed"
      },
      {
        id: 10,
        title: "Class",
        start: new Date(2019, 1, 19, 17, 0, 0, 0),
        end: new Date(2019, 1, 19, 17, 30, 0, 0),
        desc: "Most important meal of the day",
        status: "available"
      }
    ]
  };

  handleUserTypeChange = e => {
    console.log(e.target.value);
    this.setState({ userType: e.target.value });
  };

  handleEventSelectEvent = event => {
    console.log(event, "event");
    const { userType } = this.state;
    console.log(userType, "event");

    if (userType === "student") {
      Swal.fire({
        title: "Book Class",
        text: "Are you sure you wanna book this class?",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Yes"
      }).then(res => {
        if (res.value) {
          Swal.fire("Booked!", "You've been booked to this class", "success");
        }
      });
    }
  };

  handleEventSelectSlot = ({ start, end }) => {
    console.log(start, end, "PARAMS");
    const { userType, events } = this.state;
    console.log(userType, "type");
    if (userType === "teacher" || userType === "admin") {
      this.toggleAddSchedule();
      this.setState({
        events: [
          ...events,
          {
            start,
            end,
            title: "title"
          }
        ]
      });
      return;
    }

    Swal.fire(
      "Ooops",
      "not a class for this sched yet. contact administrator for a clss request",
      "warning"
    );
  };

  toggleAddSchedule = () => {
    this.setState({
      isModalAddScheduleShown: !this.state.isModalAddScheduleShown
    });
  };

  render() {
    console.log(this.props);
    const { events, userType, isModalAddScheduleShown } = this.state;
    return (
      <div className="content">
        <div className="calendar-container">
          <select value={userType} onChange={this.handleUserTypeChange}>
            <option value="teacher">Teacher</option>
            <option value="student">Student</option>
          </select>
          <br />
          <br />
          <BigCalendar
            selectable
            localizer={localizer}
            events={events}
            defaultView={BigCalendar.Views.WEEK}
            defaultDate={new Date()}
            onSelectSlot={this.handleEventSelectSlot}
            onSelectEvent={this.handleEventSelectEvent}
            eventPropGetter={event => ({
              className: event.status
            })}
          />
        </div>
        <Modal isOpen={isModalAddScheduleShown} toggle={this.toggleAddSchedule}>
          <ModalHeader toggle={this.toggle}>Modal title</ModalHeader>
          <ModalBody>
            <input type="text" />
            <input type="text" />
            <input type="text" />
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.toggleAddSchedule}>
              Do Something
            </Button>{" "}
            <Button color="secondary" onClick={this.toggleAddSchedule}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = state => ({ data: state.dashboard });

export default connect(mapStateToProps)(Schedule);
