import React from 'react';

const Pagination = (props) => {

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(props.totalPosts / props.LaunchesPerPage); i++) {
        pageNumbers.push(i)
    }

    return (
        <nav>
            <ul>
                {
                    pageNumbers.map(number => (
                        <span
                            key={number}
                        >
                            <a onClick={() => props.paginate(number)}
                               href={"!#"}
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
        </nav>
    );
};

export default Pagination;
