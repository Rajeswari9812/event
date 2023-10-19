import { postBookingDetails } from "./post_booking_details_route.js";
import { postLoginDetails } from "./post_login_details.js";
import { getBookedEventsDetails } from "./get_booked_events.js";
import { deleteEvent } from "./delete_booked_event.js";
import { postUserDetails } from "./post_user_details_route.js";
import { getAllDepartments } from "./get_all_departments.js";
import { deleteDepartment } from "./delete_department.js";
import { getSingleEventDetails } from "./get_single_booked_event.js";
import { updateBookedEventRoute } from "./event_update_route.js";

export const routes=[
    postBookingDetails,
    postLoginDetails,
    getBookedEventsDetails,
    deleteEvent,
    postUserDetails,
    getAllDepartments,
    deleteDepartment,
    getSingleEventDetails,
    updateBookedEventRoute
]