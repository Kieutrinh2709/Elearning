import * as React from 'react';
import { useDispatch } from 'react-redux';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { ThemeProvider } from '@mui/material/styles';
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@mui/styles';
import { actCancelCourse } from '../../../../redux/actions/UserAction';
import { Button } from '@mui/material';

const theme = createTheme({
    components: {
      MuiPagination: {
        styleOverrides: {
          ul: {
            justifyContent: "right",
          },
        },
      },
    },
});

const registerStyle = makeStyles({
    pagination: {
      textAlign: "right",
      marginTop: 15,
    },
    title: {
      "& h2": {
        marginBottom: 10,
      },
    },
    modalRegister: {
      position: "absolute",
      top: "250%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      width: '65%',
      backgroundColor: "white",
      border: "2px solid #000",
      boxShadow: 24,
      p: 4,
      padding: 40
    },
    button: {
      padding: "10px 24px",
      fontSize: "16px",
      margin: "5px",
    },
  
});
export { theme, registerStyle };
const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(number, account, name, confirmation) {
  return { number, account, name, confirmation };
}


export default function UserJoined(props) {
  const classes=registerStyle();

  const {dataUserJoined, courseKey} = props;
  const dispatch=useDispatch();
  const rows = 
  dataUserJoined?.map((user,index)=>{
      return createData(index, user.taiKhoan, user.hoTen)
    });
  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <>
    <div className={classes.title}>
      <h2>H???c vi??n ???? ghi danh kh??a h???c</h2>
    </div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600, textAlign:'center' }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>S??? th??? t???</StyledTableCell>
            <StyledTableCell align="right">T??i kho???n</StyledTableCell>
            <StyledTableCell align="right">H??? t??n</StyledTableCell>
            <StyledTableCell align="right">H???y ghi danh</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows?.map((row) => (
            <StyledTableRow key={row.number}>
              <StyledTableCell component="th" scope="row">
                {row.number+1}
              </StyledTableCell>
              <StyledTableCell align="right">{row.account}</StyledTableCell>
              <StyledTableCell align="right">{row.name}</StyledTableCell>
              <StyledTableCell align="right">
                <Button   
                variant="contained"
                className={classes.button} onClick={()=>{
                  const courseInfo = {
                    maKhoaHoc: courseKey,
                    taiKhoan: row.account,
                  };
                  dispatch(actCancelCourse(courseInfo));
                }}>
                  H???y ghi danh
                </Button>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    <ThemeProvider theme={theme}>
    <Stack spacing={2}>
      <p className={classes.pagination} >Trang: {page}</p>
      <Pagination variant="outlined" count={5} page={page} onChange={handleChange} />
    </Stack>
    </ThemeProvider>
    </>
  );
}
