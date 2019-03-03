import React, { Component } from "react";
import { connect } from "react-redux";
import BigCalendar from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import Swal from "sweetalert2";

import AddScheduleModal from "../components/Schedule/AddScheduleModal";
import ScheduleDetailsModal from "../components/Schedule/ScheduleDetailsModal";

const localizer = BigCalendar.momentLocalizer(moment);

class Schedule extends Component {
  state = {
    userType: "teacher",
    isModalAddScheduleShown: false,
    isScheduleDetailsShown: false,
    activeSchedule: {},
    startTime: null,
    endTime: null,
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

    if (userType === "teacher") {
      this.setState(
        {
          activeSchedule: event
        },
        () => {
          console.log(this.state, "STATE");
          this.toggleScheduleDetails();
          return;
        }
      );
    }

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
      this.setState(
        {
          startTime: start,
          endTime: end
        },
        () => {
          this.toggleAddSchedule();
        }
      );
      return;
    }

    Swal.fire(
      "Ooops",
      "not a class for this sched yet. contact administrator for a clss request",
      "warning"
    );
  };

  addNewSchedule = ({ title, start, end }) => {
    const { startTime, endTime, events } = this.state;
    this.setState(
      {
        events: [
          ...events,
          {
            start: startTime,
            end: endTime,
            title
          }
        ]
      },
      () => {
        this.toggleAddSchedule();
      }
    );
  };

  toggleAddSchedule = () => {
    this.setState({
      isModalAddScheduleShown: !this.state.isModalAddScheduleShown
    });
  };

  toggleScheduleDetails = () => {
    console.log("toggle sched");
    this.setState({
      isScheduleDetailsShown: !this.state.isScheduleDetailsShown
    });
  };

  render() {
    console.log(this.props);
    const {
      events,
      userType,
      activeSchedule,
      isModalAddScheduleShown,
      isScheduleDetailsShown
    } = this.state;
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
        <AddScheduleModal
          isShown={isModalAddScheduleShown}
          toggle={this.toggleAddSchedule}
          addSchedule={this.addNewSchedule}
        />
        <ScheduleDetailsModal
          isShown={isScheduleDetailsShown}
          toggle={this.toggleScheduleDetails}
          schedule={activeSchedule}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({ data: state.dashboard });

export default connect(mapStateToProps)(Schedule);
