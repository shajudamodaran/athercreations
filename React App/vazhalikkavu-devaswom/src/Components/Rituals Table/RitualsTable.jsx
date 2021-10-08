import React from 'react'

import './rituals.css'

function RitualsTable() {
    return (
        <div className="routines w-100 mt-2 ps-2 pe-2">
            <div className="row">
                <div className="col-md-2 col-sm-0 col-0">
                </div>
                <div className="col-md-8 col-sm-12 col-12">
                    <span className="session-header" style={{ width: 'fit-content' }}>Routine Rituals</span>
                    <table className="rituals-table mt-3 mb-3">
                        <tbody>
                            <tr>
                                <td>4:00 AM</td>
                                <td>Opening Time</td>
                            </tr>
                            <tr>
                                <td>6:00 AM - 6:30 AM</td>
                                <td>Usha Pooja</td>
                            </tr>
                            <tr>
                                <td>9:00 AM - 9:45 AM</td>
                                <td>Ucha Pooja</td>
                            </tr>
                            <tr>
                                <td>11:00 AM</td>
                                <td>Closing</td>
                            </tr>
                            <tr>
                                <td>5:00 PM</td>
                                <td>Opening Time (Evening)</td>
                            </tr>
                            <tr>
                                <td>6:15 PM</td>
                                <td>Dheeparadhana</td>
                            </tr>
                            <tr>
                                <td>7:00 PM - 7:45 PM</td>
                                <td>Athazha Pooja</td>
                            </tr>
                            <tr>
                                <td>8:00 PM - 8:20 PM</td>
                                <td>Thripuka</td>
                            </tr>
                            <tr>
                                <td>8:30 PM</td>
                                <td>Closing</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="col-md-2 col-sm-0 col-0">
                </div>
            </div>
        </div>
    )
}

export default RitualsTable
