import React from 'react';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Settings from './components/Settings/Settings';
import Submit from './components/Submit/Submit';
import Display from './components/Display/Display';

const App = () => {

    localStorage.setItem('minValue', JSON.stringify(0))
    localStorage.setItem('maxValue', JSON.stringify(5))

    // Текущее значение
    const [inc, setInc] = React.useState(0);

    const [minValue, setMinValue] = React.useState<number | null>(JSON.parse(localStorage.getItem('minValue') || "{}"));
    const [maxValue, setMaxValue] = React.useState(5)

    // Переключим дисплей
    const [display, switchDisplay] = React.useState(false)

    function changeMinValue (value: string) {
        if(value !== null) {
            setMinValue(+value)
        }
    }

    function turnOffSettings() {
        localStorage.setItem('minValue', JSON.stringify(minValue))
        localStorage.setItem('maxValue', JSON.stringify(maxValue))
        switchDisplay(false)
    }

    function turnOnSettings() {
        switchDisplay(true)
    }

    // + 1
    function callBackInc() {
        setInc(inc + 1)
    }

    // Reset
    function callBackReset() {
        if(minValue !== null) {
            setInc(minValue)
        }
    }


    return (
        <Container fixed>
            <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid item md={4}>
                    <div className="incBox">
                        {
                            display
                            ? <Settings 
                                minValue={minValue} 
                                maxValue={maxValue} 
                                changeMinValue={changeMinValue}
                                turnOffSettings={turnOffSettings}
                            />
                            : <Display 
                                inc={inc} 
                                maxValue={maxValue} 
                                callBackInc={callBackInc}
                                callBackReset={callBackReset}
                                turnOnSettings={turnOnSettings}
                            />
                        }
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}

export default App;