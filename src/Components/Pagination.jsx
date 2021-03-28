import React from 'react';
import {NavLink} from "react-router-dom";

const Pagination = (props) => {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(props.TotalLaunches / props.LaunchesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul>
                <span>
                prev
            </span>
                <span>
                next
            </span>
                {
                    pageNumbers.map(number => (
                        <span
                            key={number}
                        >
                            <a onClick={() => props.Paginate(number)}
                            >
                                {number}
                                    <span>
                                        .
                                    </span>
                            </a>
                        </span>
                    ))
                }
            </ul>
            <div>
                <NavLink to={'/datepicker/datepicker'}
                >
                    datepicker
                </NavLink>

            </div>
        </nav>
    );
};

export default Pagination;
