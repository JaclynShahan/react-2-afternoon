import React, { Component } from 'react';

class Employee extends Component {
  constructor(id, name, phone, title) {
    super();
    this.id = id;
    this.name = name;
    this.phone = phone;
    this.title = title;
  }
  updateName(name) {
    this.name = name;
  }
  updatePhone(phone) {
    this.phone = phone;
  }
  updateTitle(title) {
    this.title = title;
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

export default Employee;