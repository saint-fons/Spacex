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
                        Details={props.Details}
                        Success={props.Success}
                        Date={props.Date}
                        Patch={props.Patch}
                        Names={props.Names}
                    />
                </div>
            </div>
        </div>
    )
}


export default Shop
