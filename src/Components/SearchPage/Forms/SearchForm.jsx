import React from 'react'
import Styles from '../../../Style/Form-Styles'
import {Form, Field} from 'react-final-form'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import {NavLink} from "react-router-dom";
import {TextField} from "material-ui";


const TextFieldAdapter = ({input, meta, ...rest}) => (
    <TextField
        {...input}
        {...rest}
        onChange={(event, value) => input.onChange(value)}
        errorText={meta.touched ? meta.error : ''}
    />
)



const onSubmit = async values => {
}


const SearchForm = (props) => {

    /*Валидация на наличие данных*/
    const requiredYearPicker = value => (value ? updateNewDate(value) : 'Required')
    const requiredDatePicker = value => (value ? updateSearchedDate(value) : 'Required')

    /*Диспатч введенной даты*/
    function updateNewDate(date) {
        props.updateDate(date)
    }

    /*Диспатч даты выбранной из списка*/
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
                                <label>Date picker</label>
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
                                                {d.split("").splice(0, 19).join("")}

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
                            </div>
                        </form>
                    )}
                />
            </Styles>
        </MuiThemeProvider>
    )

}

export default SearchForm
