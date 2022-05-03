import React from 'react';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';

interface EsMuiSelectInterface {
    id: string;
    label: string;
    value: string;
    handleValueChange: any;
    list: Array<EsSelectInterface>;
}

interface EsSelectInterface {
    id: string;
    name: string;
    key?: string;
}

export default function EsMuiSelect(props: EsMuiSelectInterface) {
    const { id, label, value, handleValueChange, list } = props;

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
            {list.map((option: EsSelectInterface) => (
                    <MenuItem key={option.id} value={option.id}>
                        {option.name}
                    </MenuItem>
                ))}
        </TextField>
    )
};
