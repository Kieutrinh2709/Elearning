import React, { Fragment } from 'react'
import {
    Backdrop,
    Box, Modal,
    Fade, Button,
    Typography
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

export default function CourseModal(props) {
    const { openModal, setOpenModal } = props;

    const style = {
        boxModal: {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
        },
        boxFlex: {
            display: 'flex',
            justifyContent: 'space-between',
            p: '10px 0'
        }
    };

    return (
        <Fragment>
            <Modal
                aria-labelledby="transition-modal-title"
                aria-describedby="transition-modal-description"
                open={openModal}
                onClose={() => setOpenModal(false)}
                closeAfterTransition
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                }}
            >
                <Fade in={openModal}>
                    <Box sx={style.boxModal}>
                        <Typography id="transition-modal-title" variant="h6" component="h2">
                            THÔNG BÁO
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            Một khóa học vừa được đăng ký thành công.
                        </Typography>
                        <Box sx={style.boxFlex}>
                            <Button onClick={() => setOpenModal(false)} variant='contained'>Xem sau</Button>
                            <Button component={RouterLink} to='/user-profiles/1' variant='contained'>Khóa học của tôi</Button>
                        </Box>
                    </Box>
                </Fade>
            </Modal>
        </Fragment>
    )
}
