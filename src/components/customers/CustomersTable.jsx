import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchResident } from "@/state/Resident/Action";
import Table from "@/components/shared/table/Table";
import { FiEdit3, FiPrinter, FiClock, FiArchive, FiAlertOctagon, FiTrash2, FiEye, FiMoreHorizontal } from "react-icons/fi";
import Dropdown from "@/components/shared/Dropdown";
import Select from "react-select";
import { Link } from "react-router-dom";

// Action options for the dropdown
const actions = [
    { label: "Edit", icon: <FiEdit3 /> },
    { label: "Print", icon: <FiPrinter /> },
    { label: "Remind", icon: <FiClock /> },
    { type: "divider" },
    { label: "Archive", icon: <FiArchive /> },
    { label: "Report Issue", icon: <FiAlertOctagon /> },
    { type: "divider" },
    { label: "Delete", icon: <FiTrash2 /> },
];

// Dropdown for status selection (Active, Discharged, Under Care)
const StatusDropdown = memo(({ options, defaultSelect }) => {
    const [selectedStatus, setSelectedStatus] = useState(defaultSelect);

    return (
        <Select
            options={options}
            value={options.find(opt => opt.value === selectedStatus)}
            onChange={(selected) => setSelectedStatus(selected.value)}
            className="basic-single-select"
            classNamePrefix="select"
            isSearchable={false}
        />
    );
});

const CustomerTable = () => {
    const dispatch = useDispatch();
    const residents = useSelector((store) => store.resident.listResidents);

    useEffect(() => {
        let session = localStorage.getItem("userDetails-jwt");
        if (session) {
            dispatch(fetchResident(session));
        }
    }, [dispatch]);

    const columns = [
        {
            accessorKey: "resident_full_name",
            header: "Resident Name",
            cell: ({ getValue }) => {
                const name = getValue();
                return (
                    <div className="d-flex align-items-center">
                        <div className="avatar-md text-white bg-primary">{name[0]}</div>
                        <span className="ms-2">{name}</span>
                    </div>
                );
            },
        },
        {
            accessorKey: "resident_id_number",
            header: "Resident ID",
        },
        {
            accessorKey: "room_orientation_preference",
            header: "Room Orientation",
        },
        {
            accessorKey: "relationship_to_resident",
            header: "Relationship",
        },
        {
            accessorKey: "contact_number",
            header: "Contact Number",
            cell: ({ getValue }) => <a href={`tel:${getValue()}`}>{getValue()}</a>,
        },
        {
            accessorKey: "staff_completing_checklist",
            header: "Staff Assigned",
        },
        {
            accessorKey: "status",
            header: "Status",
            cell: ({ getValue }) => {
                const statusOptions = [
                    { value: "active", label: "Active" },
                    { value: "discharged", label: "Discharged" },
                    { value: "under-care", label: "Under Care" },
                ];
                return <StatusDropdown options={statusOptions} defaultSelect={getValue()} />;
            },
        },
        {
            accessorKey: "actions",
            header: "Actions",
            cell: () => (
                <div className="d-flex justify-content-end">
                    <Link to="/residents/view" className="icon-button">
                        <FiEye />
                    </Link>
                    <Dropdown dropdownItems={actions} triggerClass="icon-button" triggerIcon={<FiMoreHorizontal />} />
                </div>
            ),
        },
    ];

    return (
        <div>
            <h2 className="text-black font-w600">Residents</h2>
            <Table data={residents} columns={columns} />
        </div>
    );
};

export default CustomerTable;
