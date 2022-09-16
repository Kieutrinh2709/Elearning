import * as React from "react";
import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { Button, Grid } from "@mui/material";
import { Box } from "@mui/system";

export default function UserSelector(props) {
  const dispatch = useDispatch();

  const { dataUserSelector, courseCode } = props;

  const userList = dataUserSelector?.map((user, index) => {
    return {
      label: user.taiKhoan,
      key: index,
    };
  });

  const courseInfo= {
    maKhoaHoc: courseCode,
    taiKhoan:''
  }
  console.log(userList)

  return (
    <>
      <h2>Chọn người dùng</h2>
      <Grid
        container
        alignItems="center"
        direction="row"
        justifyContent="center"
        marginBottom={3}
      >
        <Grid item xs={8}>
          <Autocomplete
            disablePortal
            id="combo-box-demo"
            options={userList}
            sx={{ width: "90%" }}
            renderOption={(props, option) => (
              <Box component="li" {...props}>
                {option.label}

              </Box>
            )}
            renderInput={(params) => (
              <TextField
                {...params}
                label="Chọn người dùng"
                inputProps={{
                  ...params.inputProps,
                  autoComplete: "new-password",
                }}
              />
            )}
          />
        </Grid>
        <Grid item xs={4}>
          <Button
            variant="contained"
            size="small"
            sx={{ m: 1 }}
            onClick={() => {
              //dispatch(actAdminRegisterCourse(courseInfo));

            }}
          >
            GHI DANH
          </Button>
        </Grid>
      </Grid>
    </>
  );
}
