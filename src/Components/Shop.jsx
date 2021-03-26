import React from 'react'
import NewForm from "./Forms/NewForm";
import "./../Style/style.css"
import ShopMetaData from "./ShopMetaData";
import {updateDate} from "../Redux/Rocket-reducer";

const Shop = (props) => {
    return (
        <div className={"container"}>
            <div className={"container__header"}>
                <NewForm
                    updateDate={props.updateDate}
                />

                <div>
                    <ShopMetaData
                        Details={props.Details}
                        Success={props.Success}
                        Date={props.Date}
                        Patch={props.Patch}
                        Names={props.Names}
                        FilteredLaunches={props.FilteredLaunches}
                        CurrentPage={props.CurrentPage}
                        PostsPerPage={props.PostsPerPage}
                    />
                </div>
            </div>
        </div>
    )
}


export default Shop
