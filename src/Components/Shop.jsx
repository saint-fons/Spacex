import React from 'react'
import NewForm from "./Forms/NewForm";
import "./../Style/style.css"
import ShopMetaData from "./ShopMetaData";

const Shop = (props) => {
    return (
        <div className={"container"}>
            <div className={"container__header"}>
                <NewForm
                    updateDate={props.updateDate}
                />

                <div>
                    <ShopMetaData
                        FilteredLaunches={props.FilteredLaunches}
                        CurrentPage={props.CurrentPage}
                        LaunchesPerPage={props.LaunchesPerPage}
                        totalPosts={props.totalPosts}
                        paginate={props.paginate}
                    />
                </div>
            </div>
        </div>
    )
}


export default Shop
