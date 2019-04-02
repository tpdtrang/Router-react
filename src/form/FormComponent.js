import React, { Component } from 'react';

class FormComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '',
            firstName: '',
            lastName: '',
            age: ''
        }
        this.onChanger = this.onChanger.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }
    componentDidUpdate(prevProps) {
        if (this.props.dataEdit !== prevProps.dataEdit && this.props.dataEdit !== {}) {
            this.setState({
                id: this.props.dataEdit.id,
                firstName: this.props.dataEdit.firstName,
                lastName: this.props.dataEdit.lastName,
                age: this.props.dataEdit.age,
            })
        }
    }
    onChanger(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    // buoc 8
    onSubmit(event) {
        event.preventDefault();
        if (this.props.edit) {
            this.props.onUpdate(this.state);
            this.resetForm();
        } else {
            this.props.onAdd(this.state);
            this.resetForm();
        }

    }
    resetForm() {
        this.setState({
            firstName: '',
            lastName: '',
            age: ''
        })
    }
    render() {
        return (
            <div className="container">
                <form className="navbar-form pull-right" onSubmit={this.onSubmit}>

                    <label htmlFor="input-id" className="col-sm-2">FirstName</label>
                    <input type="text" name="firstName" onChange={this.onChanger} value={this.state.firstName} />
                    <br />
                    <label htmlFor="input-id" className="col-sm-2">LastName</label>
                    <input type="text" name="lastName" onChange={this.onChanger} value={this.state.lastName} />
                    <br />
                    <label htmlFor="input-id" className="col-sm-2">Age</label>
                    <input type="text" name="age" onChange={this.onChanger} value={this.state.age} />
                    <br />
                    <button type="submit" className="btn btn-success">Submit</button>
                </form>
            </div>
        );
    }
}

export default FormComponent;