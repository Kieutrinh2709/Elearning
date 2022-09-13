import { TextField } from '@mui/material';
import { Box } from '@mui/system';
import React, { Fragment } from 'react';

export default function CourseCategory(props) {
    const { courseCategory, selectCategory, setSelectCategory, setPage } = props;
    let categories = null;
    if (courseCategory) {
        categories = [
            {
                maDanhMuc: 'All',
                tenDanhMuc: 'Tất cả'
            },
            ...courseCategory
        ];
    }

    const handleChange = (event) => {
        setSelectCategory(event.target.value);
        setPage(1);
    }

    const styles = {
        root: {
            mx: '15px',
            mb: '15px',
            py: '10px',
            borderBottom: '2px solid #FE79A2',
        }
    }

    return (
        <Fragment>
            <Box sx={styles.root}>
                <TextField
                    id='category-select'
                    select
                    label='Danh mục Khóa học'
                    value={selectCategory}
                    variant='filled'
                    onChange={handleChange}
                    SelectProps={{
                        native: true,
                    }}
                    sx={{ width: '200px' }}
                >
                    {categories?.map((category) => (
                        <option key={category.maDanhMuc} value={category.maDanhMuc}>
                            {category.tenDanhMuc}
                        </option>
                    ))}
                </TextField>
            </Box>
        </Fragment>
    )
}
