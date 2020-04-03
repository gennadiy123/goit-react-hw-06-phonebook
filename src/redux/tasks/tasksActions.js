import { createAction } from "@reduxjs/toolkit";

const submitContact = createAction("contact/add");
const deleteContact = createAction("contact/remove");
const nameFilter = createAction("name/filter");

export default { submitContact, deleteContact, nameFilter };
