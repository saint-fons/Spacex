import React from 'react'
import {render} from 'react-dom'
import Styles from '../../../Style/Form-Styles'
import {Form, Field} from 'react-final-form'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import TextField from 'material-ui/TextField'
import Toggle from 'material-ui/Toggle'
import Select from 'react-select'
import {NavLink} from "react-router-dom";


const TextFieldAdapter = ({input, meta, ...rest}) => (
    <TextField
        {...input}
        {...rest}
        onChange={(event, value) => input.onChange(value)}
        errorText={meta.touched ? meta.error : ''}
    />
)

const ToggleAdapter = ({input: {onChange, value}, label, ...rest}) => (
    <Toggle
        label={label}
        toggled={!!value}
        onToggle={(event, isInputChecked) => onChange(isInputChecked)}
        {...rest}
    />
)

const ReactSelectAdapter = ({input, ...rest}) => (
    <Select {...input} {...rest} searchable/>
)

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms))

const onSubmit = async values => {
}


const SearchForm = (props) => {

    const requiredYearPicker = value => (value ? updateNewDate(value) : 'Required')
    const requiredDatePicker = value => (value ? updateSearchedDate(value) : 'Required')

    function updateNewDate(date) {
        props.updateDate(date)
    }

    function updateSearchedDate(date) {
        props.updateSearchedDate(date)
    }


    return (
        <MuiThemeProvider muiTheme={getMuiTheme()}>
            <Styles>
                <Form
                    onSubmit={onSubmit}
                    render={({
                                 handleSubmit,
                                 form,
                                 submitting,
                                 pristine,
                                 values
                             }) => (
                        <form onSubmit={handleSubmit}>
                            <div>
                                <Field
                                    name="datePicker"
                                    component={TextFieldAdapter}
                                    validate={requiredYearPicker}
                                    hintText="Choose a year from 2006 to 2020"
                                    floatingLabelText="Choose a year from 2006 to 2020"
                                />
                            </div>
                            <div>
                                <label>Data picker</label>
                                <Field
                                    name="timePicked"
                                    component="select"
                                    validate={requiredDatePicker}
                                >
                                    {
                                        props.LaunchesDates.map(d =>
                                            <option
                                                key={d}
                                                value={d}
                                            >
                                                {d}

                                            </option>
                                        )
                                    }
                                </Field>
                            </div>
                            <div className="buttons">
                                <button
                                    type="button"
                                >
                                    <NavLink to={'/DatePicked/'}
                                    >
                                        Date picked
                                    </NavLink>
                                </button>
                                <button
                                    type="button"
                                >
                                    <NavLink to={'/'}
                                    >
                                        Main page
                                    </NavLink>
                                </button>

                                {/*<button
                                    type="button"
                                    onClick={form.reset}
                                    disabled={submitting || pristine}
                                >
                                    Reset
                                </button>*/}
                            </div>
                        </form>
                    )}
                />
            </Styles>
        </MuiThemeProvider>
    )

}

export default SearchForm
