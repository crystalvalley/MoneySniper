import { createMuiTheme } from "@material-ui/core";



/*
xs : 0~599px
sm : 600~959px
md : 960~1279px
lg : 1280 ~ 1919px
xl : 1920~ px
*/

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