import React, { Component } from 'react';

class EmployeeEditor extends Component {
    constructor () {
        super();
        this.state = {
            employee: null,
            originalEmployee: null,
            notModified: true
        };
        this.save = this.save.bind(this);
        this.cancel = this.cancel.bind(this);
    }
    componentWillReceiveProps(props) {
        this.setState({
            employee: Object.assign({}, props.selected),
            originalEmployee: props.selected,
            notModified: true
        });
    }
    handleChange(prop, val) {
        if (this.state.notModified) {
            this.setState({notModified: false})
        }
        var employeeCopy = Object.assign({}, this.state.employee);
        employeeCopy[prop] = val;
        this.setState({employee: employeeCopy});
    }
    save() {
        this.state.originalEmployee.updateName(this.state.employee.name);
        this.state.originalEmployee.updatePhone(this.state.employee.phone);
        this.state.originalEmployee.updateTitle(this.state.employee.title);
        this.setState({notModified: true});
        this.props.refreshList();
    }
    cancel() {
        var employeeCopy = Object.assign({}, this.state.originalEmployee);
        this.setState({employee: employeeCopy, notModified: true});
    }

    render() {
        return(
            <div>

            </div>
        )
    }
}

export default EmployeeEditor;