import React, { useState, useRef, useEffect } from 'react';
// import { Dropdown, Modal } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { fetchResident } from '@/state/Resident/Action';
// import { Link } from 'react-router-dom';

// import { fetchAuthSession } from "aws-amplify/auth";

const Resident = () => {
    const dispatch = useDispatch();
    const  residents  = useSelector((store) => store.resident.listResidents);
    console.log(residents);
    
    useEffect(()=>{
        let session= localStorage.getItem("userDetails-jwt")
        console.log(">>>>>>>----/..............", session)
       session= session.toString();
         dispatch(fetchResident(session))
   },[dispatch])

    return (
        <>
            <h2 className="text-black font-w600">Resident</h2>
            {/* {loading && <p>Loading...</p>} */}
            {/* {error && <p className="text-danger">{error}</p>} */}
            <div className="table-responsive">
                <table className="table">
                    <thead>
                        <tr>
                          
                            <th>Resident Name</th>
                            <th>Resident ID Number</th>
                            <th>Room Orientation Preference</th>
                            <th>Relationship To Resident</th>
                            <th>Contact Number</th>
                            <th>Staff Completing Checklist</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {residents && residents.length > 0 ? (
                            residents.map((item, ind) => (
                                <tr key={ind}>
                                   
                                    <td>{item.resident_full_name}</td>
                                    <td>{item.resident_id_number}</td>
                                    <td>{item.room_orientation_preference}</td>
                                    <td>{item.relationship_to_resident}</td>
                                    <td>{item.contact_number}</td>
                                    <td>{item.staff_completing_checklist}</td>
                                    
                                    

                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan="4" className="text-center">No residents found</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default Resident;
