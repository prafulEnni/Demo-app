import React from 'react';
import Typography from '@material-ui/core/typography'
;
const Header = () =>{
return (
    <div style={{color: "blue", height: "50px", background:"gold"}}>
        <Typography variant="h4" component="h2" gutterBottom>
            Demo App
        </Typography>
    </div>
);
}
export default Header;