import React, { Component } from "react";
import "./AddStudent.css";
import { Button } from "react-bootstrap";
import { createStudent } from "../../actions/studentAction/studentAction";
import { connect } from "react-redux";

class AddStudent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      department: "",
      pass_year: "",
      errorMessages: false,
    };
  }
  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    // console.log({ [e.target.name]: e.target.value });
    if (this.state.fname.length > 10) {
      console.log("error");
      this.setState({ errorMessages: true });
    }
    if (this.state.fname.length < 5) {
      this.setState({ errorMessages: false });
    }
  };
  // validate = (e) => {
  //   if{e.}
  // }
  handleSubmitForm = (e) => {
    e.preventDefault();
    const student = {
      fname: this.state.fname,
      lname: this.state.lname,
      department: this.state.department,
      pass_year: parseInt(this.state.pass_year),
    };
    this.props.dispatch(createStudent(student));
    // e.target.reset();
  };

  handleResetButton = (e) => {
    console.log("hello resetting...");
    this.setState({
      fname: "",
      lname: "",
      department: "",
      pass_year: "",
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmitForm}>
          <div>
            <label>First Name</label>
            <br />
            <input
              // className={`${this.state.errorMessages && "fname"}`}
              type="text"
              value={this.state.fname}
              name="fname"
              onChange={this.handleOnChange}
              placeholder="write first name"
              required
            />
            {this.state.errorMessages && <p className="fname">Invalid !</p>}
          </div>
          <div>
            <label>Last Name</label>
            <br />
            <input
              onChange={this.handleOnChange}
              name="lname"
              value={this.state.lname}
              required
            />
          </div>
          <div>
            <label>Department</label>
            <br />
            <input
              onChange={this.handleOnChange}
              name="department"
              value={this.state.department}
              required
            />
          </div>
          <div>
            <label>Passing year</label>
            <br />
            <input
              type="number"
              onChange={this.handleOnChange}
              name="pass_year"
              value={this.state.pass_year}
              required
            />
          </div>

          <Button type="submit" variant="success">
            Submit
          </Button>
          <Button
            onClick={this.handleResetButton}
            variant="warning"
            style={{ marginLeft: "5px" }}
          >
            Reset
          </Button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    student: state.student,
  };
};

export default connect(mapStateToProps)(AddStudent);
