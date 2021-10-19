import Header from "./Header/header1"
import Header1 from "./Header/header2"

import ManageLayout from "../../components/Layout/ManageLayout"
import {Fragment} from "react";

const Component = ManageLayout(Header)
const Component1 = ManageLayout(Header1)

const Profile = (props) => {
    return (
        <Fragment>
            {
                props.location.pathname === '/profile/personal' ?  <Component1/> : <Component/>
            }
        </Fragment>
    )
}

export default Profile