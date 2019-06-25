import { createMuiTheme } from "@material-ui/core";

const mainTheme = createMuiTheme({
    palette:{
        primary:{
            light:"#4f5b62",
            main:"#393939",
            dark:"#141414"
        },
        //secondary:{},
        //error:{}
    },
});

export {mainTheme}