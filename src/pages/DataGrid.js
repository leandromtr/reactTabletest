import React from 'react'
import DataGridList from '../components/DataGridList'
import createRowData from "../services/createRowData";

export default function DataGrid() {
    return (<DataGridList initialRows={createRowData(50)}/>
    )
}