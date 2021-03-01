import React from "react"
import "./table.css"

function Table(props) {


    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th className="sort-style" onClick={props.sortData} scope="col">First (click to sort)</th>
                    <th scope="col">Last</th>
                    <th scope="col">Email</th>
                    <th scope="col">Phone</th>
                    <th scope="col">City</th>
                    <th scope="col">State</th>
                </tr>
            </thead>
            <tbody>
                {
                    props.data.map((e,i) => {
                        return (
                            <tr>
                                <td>{e.name.first}</td>
                                <td>{e.name.last}</td>
                                <td>{e.email}</td>
                                <td>{e.cell}</td>
                                <td>{e.location.city}</td>
                                <td>{e.location.state}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Table;