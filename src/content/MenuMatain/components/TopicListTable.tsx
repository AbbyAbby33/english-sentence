import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled as muiStyled } from '@mui/material/styles';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

const StyledTableCell = muiStyled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette['title-background'].main,
        padding: '10px 16px'
    }
}));

interface TopicListTableInterface {
    topicList: Array<any>;
}

export default function TopicListTable(props: TopicListTableInterface) {
    const { topicList } = props;

    /** 新增MUI表格的列資料 */
    function createTableRow(
        id: string,
        name: string
    ) {
        const operate =
            (
                <div>
                    <EditIcon sx={{ marginRight: '6px' }}></EditIcon>
                    <DeleteIcon></DeleteIcon>
                </div>
            );
        return { id, name, operate };
    }

    const topicRows = topicList.map(v => {
        return createTableRow(v.id, v.name);
    });

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell style={{ width: '70px' }}>編號</StyledTableCell>
                        <StyledTableCell>主題</StyledTableCell>
                        <StyledTableCell style={{ width: '90px' }}>操作</StyledTableCell>
                        {/* <TableCell align="center">操作</TableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {topicRows.map((row: any, i: number) => (
                        <TableRow
                            key={row.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell>{i + 1}</TableCell>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell>{row.operate}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
