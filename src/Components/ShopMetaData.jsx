import React from "react"
import "./../Style/style.css"

const ShopMetaData = (props) => {
    return (
        <div className={"container__header__data"}>
            <div className={"container__header__data__element"}>
                <div className={"container__header__data__element__header"}>
                    aircraft name
                </div>
                <div className={"container__header__data__element__bottom"}>
                    some name
                </div>
            </div>
            <div className={"container__header__data__element"}>
                <div className={"container__header__data__element__header"}>
                    Mission description
                </div>
                <div className={"container__header__data__element__bottom"}>
                    some mission
                </div>
            </div>

            <div className={"container__header__data__element"}>
                <div className={"container__header__data__element__header"}>
                    flight status successful or not
                </div>
                <div className={"container__header__data__element__bottom"}>
                    status
                </div>
            </div>

            <div className={"container__header__data__element"}>
                <div className={"container__header__data__element__header"}>
                    date in the format
                </div>
                <div className={"container__header__data__element__bottom"}>
                    date
                </div>
            </div>

             <div className={"container__header__data__element"}>
                <div className={"container__header__data__element__header"}>
                    patch
                </div>
                <div className={"container__header__data__element__bottom"}>
                    patch
                </div>
            </div>



        </div>
    )
}

export default ShopMetaData
