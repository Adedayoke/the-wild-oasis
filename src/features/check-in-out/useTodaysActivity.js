import { useQuery } from "@tanstack/react-query";
import { getStaysTodayActivity } from "../../services/apiBookings";

export function useTodaysActivity(){
    const {data: activities, isLoading}= useQuery({
        queryFn: getStaysTodayActivity,
        queryKey: ["todays-activity"]
    })

    return {activities, isLoading}
}