import s from "../../Style/style.module.css"
import elon from "../../Style/IMG/elon.jpg"

const SearchInfo = (props) => {
    return (
        <div>
            <div className={
                props.theme === 'light' ?
                    s.container__header__data :
                    s.container__header__data_black
            }>
                <div className={s.container__header__data__element}>
                    <div className={s.container__header__data__element__header}>
                        Name/Success/Launch date
                    </div>
                    <div className={s.container__header__data__element__bottom}>
                        <div>
                            {props.SortedLaunches.map(n =>
                                <div
                                    className={s.container__header__data__element__bottom__list}
                                    key={n.flight_number}>
                                    <div>
                                        {n.rocket.rocket_name}/
                                        {n.launch_success ?
                                            <span className={s.green}>success</span> :
                                            <span className={s.red}>not success</span>}/
                                        {n.launch_date_local.split("").splice(0, 16).join("")}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className={s.container__header__data__element}>
                    <div className={s.container__header__data__element__header}>
                        Mission description
                    </div>
                    <div className={s.container__header__data__element__bottom}>
                        <div>
                            {props.SortedLaunches.map(d =>
                                <div
                                    className={s.container__header__data__element__bottom__list}
                                    key={Math.random()}>
                                    <div>
                                        {
                                            d.details ?
                                                d.details :
                                                <div>No description</div>
                                        }
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className={s.container__header__data__element}>
                    <div className={s.container__header__data__element__header}>
                        patch
                    </div>
                    <div className={s.container__header__data__element__bottom}>
                        <div>
                            {props.SortedLaunches.map(p =>
                                <div
                                    className={s.container__header__data__element__bottom__list}
                                    key={Math.random()}>
                                    <img src={
                                        p.links.mission_patch}
                                         alt={elon}
                                         className={s.container__header__data__element__bottom__list__labels}
                                    />
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SearchInfo
