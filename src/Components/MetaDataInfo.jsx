import "./../Style/style.css"
import Pagination from "./Pagination";

const MetaDataInfo = (props) => {
    return (

        <div>
            <div className={"paginationBar"}>
                <Pagination
                    LaunchesPerPage={props.LaunchesPerPage}
                    TotalLaunches={props.TotalLaunches}
                    Paginate={props.Paginate}
                />
            </div>

            <div className={"container__header__data"}>
                <div className={"container__header__data__element"}>
                    <div className={"container__header__data__element__header"}>
                        Name
                    </div>
                    <div className={"container__header__data__element__bottom"}>
                        <div>
                            {props.FilteredLaunches.map(n =>
                                <div key={n.flight_number}>
                                    {
                                        n.rocket.rocket_name
                                    }
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
                            {props.FilteredLaunches.map(d =>
                                <div key={d.details}>
                                    {
                                        d.details
                                    }
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
                            {props.FilteredLaunches.map(s =>
                                <div key={s.launch_date_utc.toLocaleLowerCase()}>
                                    {
                                        s.launch_success ?
                                            <div className={"green"}>success</div> :
                                            <div className={"red"}>not success</div>
                                    }
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
                            {props.FilteredLaunches.map(d =>
                                <div key={d.launch_date_local.toString()}>
                                    {
                                        d.launch_date_local
                                    }
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
                            {props.FilteredLaunches.map(p =>
                                <div key={Math.random()}>
                                    <img src={
                                        p.links.mission_patch
                                    }
                                         alt={"patch"}
                                         width="50"
                                         height="60"/>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MetaDataInfo
