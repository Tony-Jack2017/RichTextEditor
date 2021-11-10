import Header1 from "./Header"

import ManageLayoutTwo from "../../components/Layout/ManageLayoutTwo";

import {Fragment} from "react";


const Component1 = ManageLayoutTwo(Header1)

const Profile = (props) => {
    return (
        <Fragment>
            <Component1 />
        </Fragment>
    )
}

export default Profile