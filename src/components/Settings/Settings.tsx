import React from 'react';
import TextField from '@mui/material/TextField';
import Submit from '../Submit/Submit';

function f4() {}

type PropsType = {
    minValue: number | null
    maxValue: number
    changeMinValue: (value: string) => void
    turnOffSettings: () => void
}


const Settings = (props: PropsType) => {
    return (
        <div>
            <TextField 
                value={props.maxValue}
                label="Max value" 
                color="primary" 
                type="number" 
                focused 
            />

            <TextField 
                value={props.minValue}
                onChange={e => props.changeMinValue(e.currentTarget.value)}
                className="incBox__input" 
                label="Min value" 
                color="primary" 
                type="number" 
                focused 
            />

            <div className="btnBox btnBox_set">
                <Submit title='SET' callBack={props.turnOffSettings}/>
            </div>
        </div>
    )

}

export default Settings;