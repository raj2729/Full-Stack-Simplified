import React from "react";
import UserTable from "./AdminUsers";
import { useDispatch } from "react-redux";

// actions
import { getAllUsers } from "../actions/adminActions";

function AdminDashboard() {
    const dispatch = useDispatch()
    dispatch(getAllUsers());
    return (
        <div>
              <h1>Dashboard in progress</h1>
              <UserTable/>
        </div>
     );
}

export default AdminDashboard;
