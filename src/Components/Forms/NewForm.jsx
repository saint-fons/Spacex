import React from 'react'
import { render } from 'react-dom'
import Styles from './Styles'
import { Form, Field } from 'react-final-form'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import TextField from 'material-ui/TextField'
import Toggle from 'material-ui/Toggle'
import Select from 'react-select'
import states from './states'
import {updateDate} from "../../Redux/Rocket-reducer";


const TextFieldAdapter = ({ input, meta, ...rest }) => (
    <TextField
        {...input}
        {...rest}
        onChange={(event, value) => input.onChange(value)}
        errorText={meta.touched ? meta.error : ''}
    />
)

const ToggleAdapter = ({ input: { onChange, value }, label, ...rest }) => (
    <Toggle
        label={label}
        toggled={!!value}
        onToggle={(event, isInputChecked) => onChange(isInputChecked)}
        {...rest}
    />
)

const ReactSelectAdapter = ({ input, ...rest }) => (
    <Select {...input} {...rest} searchable />
)

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
    await sleep(300)
    window.alert(JSON.stringify(values, 0, 2))
}



const NewForm = (props) => {

    const required = value => (value ? updateNewDate(value) : 'Required')

    function updateNewDate(date) {
        props.updateDate(date)
    }

    return (
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            <Styles>
                <Form
                    onSubmit={onSubmit}
                    render={({ handleSubmit,
                                 form,
                                 submitting,
                                 pristine,
                                 values }) => (
                        <form onSubmit={handleSubmit}>
                            <div>
                                <Field
                                    name="datePicker"
                                    component={TextFieldAdapter}
                                    validate={required}
                                    hintText="Pick date"
                                    floatingLabelText="Pick date"
                                />
                            </div>{/*
                            <div>
                                <Field
                                    name="state"
                                    component={ReactSelectAdapter}
                                    options={states}
                                />
                            </div>
                            <div>
                                <Field
                                    name="employed"
                                    label="Employed?"
                                    component={ToggleAdapter}
                                    labelPosition="right"
                                />
                            </div>*/}
                            <div className="buttons">
                                <button type="submit" disabled={submitting}>
                                    Log In
                                </button>
                                <button
                                    type="button"
                                    onClick={form.reset}
                                    disabled={submitting || pristine}
                                >
                                    Reset
                                </button>
                            </div>
                            <pre>{JSON.stringify(values, 0, 2)}</pre>
                        </form>
                    )}
                />
            </Styles>
        </MuiThemeProvider>
    )

}

export default NewForm
