// rrd imports
import { redirect } from "react-router-dom";

// helpers import
import { deleteItem } from "../helpers";

export async function logoutAction() {

    // delete user
    deleteItem("userName");
    // return redirect
    return redirect("/");

}