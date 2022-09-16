import {
    Box,
    Button,
    Typography,
    InputBase,
    Paper,
    IconButton,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import React, { Fragment } from "react";
import { Link as RouterLink } from "react-router-dom";

export default function HeaderAdmin(props) {
    const { heading, buttonLabel, placeholder, setKeyword, handleSearch, link } =
        props;
    const styles = {
        root: {
            paddingBottom: "30px",
            display: "flex",
            alignItems: "center",
            flexWrap: "wrap",
            "& h1": {
                flex: "1 1",
                fontSize: "28px",
                fontWeight: 600,
                width: "50%",
                padding: 0,
            },
            "& form": {
                flex: "2 1",
                p: "2px 4px",
                display: "flex",
                alignItems: "center",
                width: "100%",
                my: "20px",
                "& button": {
                    padding: "10px",
                },
                background: "#fff",
                boxShadow: "12px 12px 24px #d9d9d9, -12px -12px 24px #ffffff",
            },
            "& a": {
                padding: "10px 24px",
                fontSize: "16px",
                marginLeft: "auto",
            },
        },
    };

    const handleChangeKeyword = (event) => {
        const { value } = event.target;
        setKeyword(value);
    };

    return (
        <Fragment>
            <Box sx={styles.root}>
                <Typography variant="h1">{heading}</Typography>
                <Paper component="form">
                    <InputBase
                        sx={{ ml: 1, flex: 1 }}
                        placeholder={placeholder}
                        onChange={handleChangeKeyword}
                    />
                    <IconButton
                        type="button"
                        sx={{ p: "10px" }}
                        aria-label="search"
                        onClick={handleSearch}
                    >
                        <SearchIcon />
                    </IconButton>
                </Paper>
                <Box sx={{ flex: ".85 1", textAlign: "right" }}>
                    <Button variant="contained" component={RouterLink} to={link}>
                        {buttonLabel}
                    </Button>
                </Box>
            </Box>
        </Fragment>
    );
}
