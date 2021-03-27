import React from 'react'
import {compose} from "redux";
import connect from "react-redux/lib/connect/connect";
import "./../Style/style.css"
import Launches from "./Launches";
import {getData, updateCurrentPage, updateDate} from "../Redux/Rocket-reducer";
import {
    getLaunchesSS, getTotalPostsLengthSelector
}
    from "../Redux/Launches-selector";


class Container extends React.Component {

    componentDidMount() {
        this.props.getData()
    }

    render() {
        return <div>
            <Launches
                updateDate={this.props.updateDate}
                FilteredLaunches={this.props.getLaunchesSS}
                Paginate={this.props.updateCurrentPage}
                LaunchesPerPage={this.props.LaunchesPerPage}
                TotalLaunches={this.props.getTotalPostsLengthSelector}
            />
        </div>
    }
}


let mapStateToProps = (state) => {
    return {
        getLaunchesSS: getLaunchesSS(state),
        getTotalPostsLengthSelector: getTotalPostsLengthSelector(state),
        CurrentPage:state.LaunchesPage.CurrentPage,
        LaunchesPerPage:state.LaunchesPage.LaunchesPerPage,
    }
}

export default compose(connect(mapStateToProps, {
    getData,
    updateDate,
    updateCurrentPage
}))
(Container)
