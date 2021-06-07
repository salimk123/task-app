import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import '../App.css';
class Task extends Component {
    constructor() {
        super();
        this.state = {
            list: null,
        }
    }
    componentDidMount() {
        this.getData()
    }
    getData() {
        fetch("http://jsonplaceholder.typicode.com/todos").then((response) => {
            response.json().then((result) => {
                this.setState({ list: result })
            })
        })
    }
    delete(item) {
        const list = this.state.list.filter(i => i.id !== item.id)
        this.setState({ list })
    }

    render() {
        return (
            <div>
                {
                    this.state.list ?
                        <Table striped bordered hover className="task-list">

                            <tbody>
                                {
                                    this.state.list.map((item, i) =>
                                        <tr className="list-row">
                                            <td>{item.id}</td>
                                            <td>{item.title}</td>
                                            <td>{item.completed}</td>
                                            <td><div key={item.id}><button onClick={this.delete.bind(this, item)} className="delete">Delete</button>
                                            </div></td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </Table>
                        : <p>Please Wait...</p>
                }
            </div>
        );
    }
}

export default Task;
