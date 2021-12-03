import * as React from 'react';
import Typography from '@mui/material/Typography/index';
import Pagination from '@mui/material/Pagination/index';
import Stack from '@mui/material/Stack/index';

export default function PaginationController() {
    const [page, setPage] = React.useState(1);
    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <Stack spacing={2}>
            <Typography>Page: {page}</Typography>
            <Pagination count={10} page={page} onChange={handleChange} />
        </Stack>
    );
}