import React from 'react';
import {NavLink} from "react-router-dom";
import s from "../../Style/style.module.css";
import search from "./../../Style/IMG/search.png"
import moon from "./../../Style/IMG/moon.png"
import sun from "./../../Style/IMG/sun.png"

const Pagination = (props) => {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(props.TotalLaunches / props.LaunchesPerPage); i++) {
        pageNumbers.push(i)
    }

    function PrevPage() {
        if (props.CurrentPage <= 1) {
            alert("Ur on first page")

        } else {
            props.prevPage()
        }
    }

    return (
        <nav>
            <ul>
                <a onClick={
                    () =>
                        PrevPage()
                }
                >
                    <button>
                        Prev
                    </button>
                </a>
                {
                    pageNumbers.map(number => (
                        <span
                            key={number}
                        >
                            <button>
                                <a onClick={() => props.Paginate(number)}>
                                {number}
                                </a>
                            </button>

                        </span>
                    ))
                }
                <div className={s.container__header_nav}>
                    {/*Ссылка на страницу поиска*/}
                    <NavLink to={'/search/'}
                    >
                        <img
                            src={search}
                            className={s.container__header_nav__img}
                            alt={"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/271/magnifying-glass-tilted-right_1f50e.png"}/>
                    </NavLink>

                    {/*Переключатель цветовой темы*/}
                    <span
                        onClick={props.toggleTheme}
                    >
                        {props.theme === 'light' ?
                            <div>
                                <img
                                    src={moon}
                                    className={s.container__header_nav__img}
                                    alt={"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/271/last-quarter-moon_1f317.png"}/>
                            </div>
                            :
                            <div>
                                <img
                                    src={sun}
                                    className={s.container__header_nav__img}
                                    alt={"https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/320/apple/271/sun_2600-fe0f.png"}/>
                            </div>
                        }
                    </span>

                </div>
            </ul>
        </nav>
    );
};


export default Pagination;
