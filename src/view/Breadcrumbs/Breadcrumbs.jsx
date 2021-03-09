import React from "react";
import { Link, Route } from "react-router-dom";


const Breadcrumbs = (props) => (
    <div className="breadcrumbs">
        <ul className='container'>
            <Route path='/:path' component={BreadcrumbsItem} />
        </ul>
    </div>
)
export default Breadcrumbs;

const BreadcrumbsItem = ({  match }) => (
    <span>
        <li className={match.isExact ? 'breadcrumb-active' : undefined}>
            <Link to={match.url || ''}>
                {match.url}
            </Link>
        </li>
        <Route path={`${match.url}/:path`} component={BreadcrumbsItem} />
    </span>
)