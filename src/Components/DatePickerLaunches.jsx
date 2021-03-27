import React from 'react'
import NewForm from "./Forms/NewForm";
import "./../Style/style.css"
import MetaDataInfo from "./MetaDataInfo";
import DatePickedInfo from "./DatePickedInfo";

const Launches = (props) => {
    return (
        <div className={"container"}>
            <div className={"container__header"}>
                <NewForm
                    updateDate={props.updateDate}
                />
                <div>
                    <DatePickedInfo
                        SortedLaunches={props.SortedLaunches}
                    />
                </div>
            </div>
        </div>
    )
}


export default Launches
