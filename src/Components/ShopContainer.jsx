import React from 'react'
import {compose} from "redux";
import connect from "react-redux/lib/connect/connect";
import "./../Style/style.css"
import Shop from "./Shop";
import {getData} from "../Redux/Rocket-reducer";



class ShopContainer extends React.Component {

    componentDidMount() {
        this.props.getData()
    }

    render() {
        return <div>
            <Shop />
        </div>
    }
}


let mapStateToProps = (state) => {
    return {
    }
}

export default compose(connect(mapStateToProps, {
    getData
}))
(ShopContainer)
