import { createMuiTheme } from "@material-ui/core";

const mainTheme = createMuiTheme({
    palette:{
        primary:{
            light:"#ff7073",
            main:"#f23847",
            dark:"#b8001f"
        },
        //secondary:{},
        //error:{}
    },
});

export {mainTheme}