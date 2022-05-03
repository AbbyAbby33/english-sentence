import React from 'react';
import TextField from '@mui/material/TextField';

interface EsMuiTextAreaInterface {
    id: string;
    label: string;
    rows: number;
    handleValueChange: any;
}

export default function EsMuiTextArea(props: EsMuiTextAreaInterface) {
    const { id, label, rows, handleValueChange } = props;

    const valueChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        handleValueChange(event);
    };

    return (
        <TextField
            fullWidth
            id={id}
            name={id}
            label={label}
            type="text"
            multiline
            rows={rows}
            onChange={(event) => { valueChange(event) }}
        />
    )
};
