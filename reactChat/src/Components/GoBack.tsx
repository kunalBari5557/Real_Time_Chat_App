import { Backdrop, CircularProgress } from "@mui/material";

export function Loader(){
    
    return(
        <Backdrop open={true} sx={{ color: '#fff' }}>
            <CircularProgress color="inherit" />
        </Backdrop>
    );
}
