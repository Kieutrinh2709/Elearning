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
import { Button } from '@mui/material';
import { actAdminRegisterCourse } from '../../../../redux/actions/UserAction';

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


export default function UserWaiting(props) {
  const classes=registerStyle();
  const dispatch=useDispatch();

  const {dataUserWaiting, courseKey} = props;
  const rows = 
   dataUserWaiting?.map((user,index)=>{
      return createData(index, user.taiKhoan, user.hoTen)
    });

  const [page, setPage] = React.useState(1);
  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <>
    <div className={classes.title}>
      <h2>Học viên chờ xét duyệt</h2>
    </div>
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 600, textAlign:'center' }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Số thứ tự</StyledTableCell>
            <StyledTableCell align="right">Tài khoản</StyledTableCell>
            <StyledTableCell align="right">Họ tên</StyledTableCell>
            <StyledTableCell align="right">Xác nhận</StyledTableCell>
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
                  className={classes.button}
                  onClick={()=>{
                    const courseInfo = {
                      maKhoaHoc: courseKey,
                      taiKhoan: row.account,
                    };
                    dispatch(actAdminRegisterCourse(courseInfo));
                  }}
                  >
                    Xác nhận
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
