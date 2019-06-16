import React from 'react';
import { WithStyles } from "@material-ui/styles";
import { Button } from "@material-ui/core";
const styles = {}

interface IProps {
    text: string,
    clickEvent(): void,
    className:string,
    type:"contained"|"text"|"outlined",
    fullWidth:boolean
}

const CustomButton: React.SFC<IProps> = (props) => {

    return (
        <Button
            color="primary" size="large" 
            fullWidth={props.fullWidth}
            variant={props.type}
            onClick={props.clickEvent}
            className={props.className}
        >
            {props.text}
        </Button>
    )
}

export default CustomButton;