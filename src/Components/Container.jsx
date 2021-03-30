import React from 'react'
import {compose} from "redux";
import connect from "react-redux/lib/connect/connect";
import {getData, updateCurrentPage, updateDate, updateSearchedDate} from "../Redux/Rocket-reducer";
import {
    getLaunchesSS,
    getTotalPostsLengthSelector,
    getSortedLaunchesSS, getLaunchesDatesSS,
} from "../Redux/Launches-selector";
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
                updateSearchedDate={this.props.updateSearchedDate}
                SortedLaunches={this.props.getSortedLaunchesSS}
                LaunchesDates={this.props.getLaunchesDatesSS}
            />
        </div>
    }
}

let mapStateToProps = (state) => {
    return {
        getLaunchesSS: getLaunchesSS(state),
        getSortedLaunchesSS: getSortedLaunchesSS(state),
        getTotalPostsLengthSelector: getTotalPostsLengthSelector(state),
        getLaunchesDatesSS: getLaunchesDatesSS(state),
        CurrentPage: state.LaunchesPage.CurrentPage,
        LaunchesPerPage: state.LaunchesPage.LaunchesPerPage,

    }
}

export default compose(withRouter, connect(mapStateToProps, {
    getData,
    updateDate,
    updateCurrentPage,
    updateSearchedDate
}))
(Container)
