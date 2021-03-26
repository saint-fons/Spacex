import React from 'react'
import {compose} from "redux";
import connect from "react-redux/lib/connect/connect";
import "./../Style/style.css"
import Shop from "./Shop";
import {getData, updateDate} from "../Redux/Rocket-reducer";
import {
    getLaunchesSS
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
            />
        </div>
    }
}


let mapStateToProps = (state) => {
    return {
        getLaunchesSS: getLaunchesSS(state)
    }
}

export default compose(connect(mapStateToProps, {
    getData,
    updateDate
}))
(ShopContainer)
