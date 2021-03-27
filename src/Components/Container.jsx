import React from 'react'
import {compose} from "redux";
import connect from "react-redux/lib/connect/connect";
import "./../Style/style.css"
import Launches from "./Launches";
import DatePickerLaunches from "./DatePickerLaunches";
import {getData, updateCurrentPage, updateDate} from "../Redux/Rocket-reducer";
import {
    getLaunchesSS,
    getTotalPostsLengthSelector,
    getSortedLaunchesSS,

} from "../Redux/Launches-selector";
import {Route} from "react-router-dom";
import {withRouter} from "react-router";

class Container extends React.Component {

    componentDidMount() {
        this.props.getData()
    }

    render() {
        return <div>
            <Route path='/' render={() =>
                <Launches
                    FilteredLaunches={this.props.getLaunchesSS}
                    Paginate={this.props.updateCurrentPage}
                    LaunchesPerPage={this.props.LaunchesPerPage}
                    TotalLaunches={this.props.getTotalPostsLengthSelector}
                />}
            />


            <Route exact path='/datepicker/datepicker' render={() =>
                <DatePickerLaunches
                    updateDate={this.props.updateDate}
                    SortedLaunches={this.props.getSortedLaunchesSS}
                />}
            />

        </div>
    }
}


let mapStateToProps = (state) => {
    return {
        getLaunchesSS: getLaunchesSS(state),
        getSortedLaunchesSS: getSortedLaunchesSS(state),
        getTotalPostsLengthSelector: getTotalPostsLengthSelector(state),
        CurrentPage: state.LaunchesPage.CurrentPage,
        LaunchesPerPage: state.LaunchesPage.LaunchesPerPage,

    }
}

export default compose(withRouter, connect(mapStateToProps, {
    getData,
    updateDate,
    updateCurrentPage
}))
(Container)
