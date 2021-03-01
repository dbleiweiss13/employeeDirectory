import React from "react"

function Table(props) {


    return (
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">First</th>
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
                                {/* <th scope="row">{i}</th> */}
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