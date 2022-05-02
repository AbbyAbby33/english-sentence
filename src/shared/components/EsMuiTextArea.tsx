import React from 'react';
import TextField from '@mui/material/TextField';

interface EsMuiTextAreaInterface {
    id: string;
    label: string;
    rows: number;
}

export default function EsMuiTextArea(props: EsMuiTextAreaInterface) {
    const { id, label, rows } = props;
    return (
        <TextField
            fullWidth
            id={id}
            label={label}
            type="text"
            multiline
            rows={rows}
        />
    )
};
