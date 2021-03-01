import React, { Component } from "react";
import API from "../utils/API";
import Table from "../components/Table/Table"

// class component setting state
class ListPage extends Component {
    state = {
        employeeData: [],
        search: "",
        displayedData: []
    };

    // function to get data from apr
    componentDidMount() {
        API.getUsers()
            .then(res => this.setState({
                employeeData: res.data.results,
                displayedData: res.data.results
            }))
            .catch(err => console.log(err))
    }

    render() {
        return (
            <div>
                <Table data={this.state.displayedData}/>
            </div>
        )
    };
};

export default ListPage;