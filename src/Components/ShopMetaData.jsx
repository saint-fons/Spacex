import React from "react"
import "./../Style/style.css"

const ShopMetaData = (props) => {
    return (
        <div className={"container__header__data"}>
            <div className={"container__header__data__element"}>
                <div className={"container__header__data__element__header"}>
                    Name
                </div>
                <div className={"container__header__data__element__bottom"}>
                    <div>
                        {props.Names.map(n =>
                            <div>
                                {n}
                            </div>
                        )}
                    </div>
                </div>
            </div>
            <div className={"container__header__data__element"}>
                <div className={"container__header__data__element__header"}>
                    Mission description
                </div>
                <div className={"container__header__data__element__bottom"}>
                    <div>
                        {props.Details.map(n =>
                            <div>
                                {n}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className={"container__header__data__element"}>
                <div className={"container__header__data__element__header"}>
                    flight status successful or not
                </div>
                <div className={"container__header__data__element__bottom"}>
                    <div>
                        {props.Success.map(n =>
                            <div>
                                {n}
                            </div>
                        )}
                    </div>
                </div>
            </div>

            <div className={"container__header__data__element"}>
                <div className={"container__header__data__element__header"}>
                    date in the format
                </div>
                <div className={"container__header__data__element__bottom"}>
                    <div>
                        {props.Date.map(n =>
                            <div>
                                {n}
                            </div>
                        )}
                    </div>
                </div>
            </div>

             <div className={"container__header__data__element"}>
                <div className={"container__header__data__element__header"}>
                    patch
                </div>
                <div className={"container__header__data__element__bottom"}>
                    <div>
                        {props.Patch.map(n =>
                            <div>
                                <img src={n} alt={"patch"} width="50" height="60"/>
                            </div>
                        )}
                    </div>
                </div>
            </div>



        </div>
    )
}

export default ShopMetaData
