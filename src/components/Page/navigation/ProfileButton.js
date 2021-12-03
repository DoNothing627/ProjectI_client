import React from "react";
import Button from "../../UI/Button";
import { Person } from "@material-ui/icons";

const ProfileButton = props => {
    return <>
        <Button>
            <Person />
        </Button>
    </>
}

export default ProfileButton;