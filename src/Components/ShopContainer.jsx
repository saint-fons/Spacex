import React from 'react'
import {compose} from "redux";
import connect from "react-redux/lib/connect/connect";
import "./../Style/style.css"
import Shop from "./Shop";
import {getData, updateCurrentPage, updateDate} from "../Redux/Rocket-reducer";
import {
    getLaunchesSS, getTotalPostsLengthSelector
}
    from "../Redux/Launches-selector";


class ShopContainer extends React.Component {

    componentDidMount() {
        this.props.getData()
    }

    render() {
        return <div>
            <Shop
                FilteredLaunches={this.props.getLaunchesSS}
                updateDate={this.props.updateDate}
                paginate={this.props.updateCurrentPage}
                PostsPerPage={this.props.PostsPerPage}
                totalPosts={this.props.getTotalPostsLengthSelector}
            />
        </div>
    }
}


let mapStateToProps = (state) => {
    return {
        getLaunchesSS: getLaunchesSS(state),
        getTotalPostsLengthSelector: getTotalPostsLengthSelector(state),
        CurrentPage:state.LaunchesPage.CurrentPage,
        PostsPerPage:state.LaunchesPage.PostsPerPage,
    }
}

export default compose(connect(mapStateToProps, {
    getData,
    updateDate,
    updateCurrentPage
}))
(ShopContainer)
