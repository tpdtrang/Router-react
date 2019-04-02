import React, { Component } from 'react';
import FormComponent from '../form/FormComponent';
import TableComponent from '../component/TableComponent';
class FormPage extends Component {
    constructor(props) {
        super(props);
        // Buoc 1
        this.state = {
            data: [
                { id: '1', lastName: "Title 2", firstName: 'Title 2', age: '09' },
                { id: '2', lastName: "Title 3", firstName: 'Title 2', age: '09' },
                { id: '3', lastName: "Title 4", firstName: 'Title 2', age: '09' },
                { id: '4', lastName: "Title 5", firstName: 'Title 2', age: '09' },
                { id: '5', lastName: "Title 6", firstName: 'Title 2', age: '09' },
                { id: '6', lastName: "Title 7", firstName: 'Title 2', age: '09' },
            ],
            dataEdit: {},
            edit: false
        }
        this.onDelete = this.onDelete.bind(this);
        this.onAdd = this.onAdd.bind(this);
        this.onEdit = this.onEdit.bind(this);
        this.onUpdate = this.onUpdate.bind(this);
    }
    // buoc 3
    onDelete(id) {
        var data = this.state.data.filter(data => data.id !== id);
        this.setState({
            data: data
        })

    }
    // buoc 6
    onAdd(data) {
        let id = Math.random();
        let ItemNew = [...this.state.data, { id: id, lastName: data.lastName, firstName: data.firstName, age: data.age }]
        this.setState({
            data: ItemNew
        })
    }
    onEdit(id) {
        let dataItem = this.state.data.filter(data => data.id === id)
        if (dataItem.length > 0) {
            this.setState({
                dataEdit: dataItem[0],
                edit: true
            })
        }

    }
    onUpdate(data) {
        let Index = this.state.data.findIndex(item => item.id === data.id);
        let dataEdit = this.state.data;
        dataEdit[Index].firstName = data.firstName;
        dataEdit[Index].lastName = data.lastName;
        dataEdit[Index].age = data.age;
        this.setState({
            data: dataEdit,
            edit: false
        })

    }
    render() {
        return (
            <div>
                {/* buoc 7 */}
                <FormComponent onAdd={this.onAdd} dataEdit={this.state.dataEdit} edit={this.state.edit} onUpdate={this.onUpdate}></FormComponent>
                <div className="list-card mt-5">
                    <div className="container">
                        <div className="row">
                            {/* buoc 2 */}
                            {/* delete buoc 4 */}
                            {this.state.data.map(data => (
                                <TableComponent key={data.id} data={data} onDelete={this.onDelete} onEdit={this.onEdit}></TableComponent>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormPage;