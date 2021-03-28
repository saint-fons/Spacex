import s from "./../Style/style.module.css"

const DatePickedInfo = (props) => {
    return (
        <div>
            <div className={s.container__header__data}>
                <div className={s.container__header__data__element}>
                    <div className={s.container__header__data__element__header}>

                    </div>
                    <div className={s.container__header__data__element__bottom}>
                        <div>
                            {props.SortedLaunches.map(n =>
                                <div key={n.flight_number}>
                                    {
                                        n.rocket.rocket_name
                                    }
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className={s.container__header__data__element}>
                    <div className={s.container__header__data__element__header}>

                    </div>
                    <div className={s.container__header__data__element__bottom}>
                        <div>
                            {props.SortedLaunches.map(d =>
                                <div key={Math.random()}>
                                    {
                                        d.details ?
                                            d.details :
                                            <div>No description</div>
                                    }
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className={s.container__header__data__element}>
                    <div className={s.container__header__data__element__header}>

                    </div>
                    <div className={s.container__header__data__element__bottom}>
                        <div>
                            {props.SortedLaunches.map(su =>
                                <div key={su.launch_date_utc.toLocaleLowerCase()}>
                                    {
                                        su.launch_success ?
                                            <div className={"green"}>success</div> :
                                            <div className={"red"}>not success</div>
                                    }
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className={s.container__header__data__element}>
                    <div className={s.container__header__data__element__header}>

                    </div>
                    <div className={s.container__header__data__element__bottom}>
                        <div>
                            {props.SortedLaunches.map(d =>
                                <div key={d.launch_date_local.toString()}>
                                    {
                                        d.launch_date_local
                                    }
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                <div className={s.container__header__data__element}>
                    <div className={s.container__header__data__element__header}>

                    </div>
                    <div className={s.container__header__data__element__bottom}>
                        <div>
                            {props.SortedLaunches.map(p =>
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

export default DatePickedInfo
