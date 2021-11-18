import Header1 from "./Header"

import ManageLayoutTwo from "../../components/Layout/ManageLayoutTwo";
import ManageLayout from "../../components/Layout/ManageLayout";

import {Fragment} from "react";

const Component1 = ManageLayoutTwo(Header1)
const Component = ManageLayout()

const Profile = (props) => {
    console.log(props)
    return (
        <Fragment>
            {
                props.location.pathname === "/profile/setting" ? <Component /> : <Component1 />
            }
        </Fragment>
    )
}

export default Profile