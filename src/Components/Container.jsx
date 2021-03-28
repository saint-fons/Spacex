import React from 'react'
import {compose} from "redux";
import connect from "react-redux/lib/connect/connect";
import Launches from "./Launches";
import DatePickerLaunches from "./DatePickerLaunches";
import {getData, updateCurrentPage, updateDate} from    "../Redux/Rocket-reducer";
import {
    getLaunchesSS,
    getTotalPostsLengthSelector,
    getSortedLaunchesSS,
} from "../Redux/Launches-selector";
import {Route} from "react-router-dom";
import {withRouter} from "react-router";
import ContainerStyle from "./ContainerStyle";

class Container extends React.Component {

    componentDidMount() {
        this.props.getData()
    }
    render() {
        return <div>
            <ContainerStyle
                FilteredLaunches={this.props.getLaunchesSS}
                Paginate={this.props.updateCurrentPage}
                LaunchesPerPage={this.props.LaunchesPerPage}
                TotalLaunches={this.props.getTotalPostsLengthSelector}
                updateDate={this.props.updateDate}
                SortedLaunches={this.props.getSortedLaunchesSS}
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
