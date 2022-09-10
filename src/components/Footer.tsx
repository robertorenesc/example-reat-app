import { AppBar, Box, Toolbar, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" color="transparent" elevation={0}>
                <Toolbar>
                    <Typography variant="body2" color="text.secondary" align="center">
                        {'© '}
                        {new Date().getFullYear()}
                        {'.'}
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
