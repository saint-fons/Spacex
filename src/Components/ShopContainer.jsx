import React from 'react'
import {compose} from "redux";
import connect from "react-redux/lib/connect/connect";
import "./../Style/style.css"
import Shop from "./Shop";
import {getData} from "../Redux/Rocket-reducer";
import {
    getNamesSelector,
    getLaunchesSC,
    getDetailsSelector,
    getSuccessSelector,
    getDateSelector, getPatchSelector
} from "../Redux/Launches-selector";



class ShopContainer extends React.Component {

    componentDidMount() {
        this.props.getData()
    }

    render() {
        return <div>
            <Shop
                Details={this.props.getDetailsSelector}
                Success={this.props.getSuccessSelector}
                Date={this.props.getDateSelector}
                Patch={this.props.getPatchSelector}
                Names={this.props.getNamesSelector}
            />
        </div>
    }
}


let mapStateToProps = (state) => {
    return {
        getLaunchesSC: getLaunchesSC(state),
        getDetailsSelector: getDetailsSelector(state),
        getSuccessSelector: getSuccessSelector(state),
        getDateSelector: getDateSelector(state),
        getPatchSelector: getPatchSelector(state),
        getNamesSelector: getNamesSelector(state)
    }
}

export default compose(connect(mapStateToProps, {
    getData
}))
(ShopContainer)
