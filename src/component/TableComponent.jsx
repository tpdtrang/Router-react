import React, { Component } from 'react'

export default class TableComponent extends Component {
    constructor(props) {
        super(props);
        this.onDelete = this.onDelete.bind(this);
        this.onEdit = this.onEdit.bind(this);
    }
    // buoc 5
    onDelete() {
        this.props.onDelete(this.props.data.id);
    }
    onEdit() {
        this.props.onEdit(this.props.data.id);
    }
    render() {
        return (
            <div className="col-lg-3 mt-2">
                <div className="card" >

                    <div className="card-body">
                        <h5 className="card-title">{this.props.data.firstName}</h5>
                        <p className="card-text">{this.props.data.lastName}</p>
                    </div>
                    <div className="card-body">
                        <button className="btn btn-danger" onClick={this.onDelete}>Delete</button>
                        <button className="btn btn-success" onClick={this.onEdit}>Update</button>
                    </div>
                </div>
            </div>
        )
    }
}
