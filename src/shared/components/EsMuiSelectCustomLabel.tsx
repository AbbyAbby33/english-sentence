import React from 'react';
import TextField from '@mui/material/TextField';

interface EsMuiSelectCustomLabelInterface {
    id: string;
    label: string;
    value: string;
    handleValueChange: any;
    children: any
}

export default function EsMuiSelectCustomLabel(props: EsMuiSelectCustomLabelInterface) {
    const { id, label, value, handleValueChange, children } = props;

    const valueChange = (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        handleValueChange(event);
    };

    return (
        <TextField
            id={id}
            name={id}
            select
            label={label}
            value={value}
            onChange={(event) => { valueChange(event) }}
        >
            {children}
        </TextField>
    )
};
