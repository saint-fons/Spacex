import React from 'react'
import NewForm from "./Forms/NewForm";
import "./../Style/style.css"
import ShopMetaData from "./ShopMetaData";

const Shop = (props) => {

    return (
        <div className={"container"}>
            <div className={"container__header"}>
                <NewForm
                />

                <div>
                    <ShopMetaData
                        address={props.address}
                        isp={props.isp}
                        country={props.country}
                        city={props.city}
                        provider={props.provider}
                        timezone={props.timezone}
                        cityToVisit={props.cityToVisit}
                    />
                </div>
            </div>
        </div>
    )
}


export default Shop
