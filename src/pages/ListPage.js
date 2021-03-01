import React, { Component } from "react";
import API from "../utils/API";
import Table from "../components/Table/Table"
import Search from "../components/Search/Search"

// class component setting state
class ListPage extends Component {
    state = {
        employeeData: [],
        displayedData: [],
        sorted: null,
        search: ""
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

    handleSortData = () => {
        let data = this.state.displayedData

        if (this.state.sorted === null || this.state.sorted === false) {
            data.sort(function (a, b) {

                var nameA = a.name.first.toUpperCase();
                var nameB = b.name.first.toUpperCase();
                if (nameA < nameB) {
                    return -1;
                }
                if (nameA > nameB) {
                    return 1;
                }

                return 0;
            })
            this.setState({sorted: true})
        }
        else {
            data.sort(function (a, b) {

                var nameA = a.name.first.toUpperCase();
                var nameB = b.name.first.toUpperCase();
                if (nameA > nameB) {
                    return -1;
                }
                if (nameA < nameB) {
                    return 1;
                }

                return 0;
            })
            this.setState({sorted: false})
        }

        this.setState({ displayedData: data })
    }

    handleInputChange = event => {
        this.setState({search: event.target.value})
    }

    handleSearch = event => {
        event.preventDefault()
        if (this.state.search === "") {
            this.setState({displayedData: this.state.employeeData})
        }
        else {
            const newData = this.state.displayedData.filter(obj => {
                let name = obj.name.first.toLowerCase()
                let search = this.state.search.toLowerCase()

                if(name.includes(search)) {
                    return(obj)
                }
            })
            this.setState({displayedData: newData})
        }
    }

    render() {
        return (
            <div >
                <Search 
                    handleInputChange = {this.handleInputChange}
                    handleSearch = {this.handleSearch}
                />
                <Table
                    data={this.state.displayedData}
                    sortData={this.handleSortData}

                />
            </div>
        )
    };
};

export default ListPage;