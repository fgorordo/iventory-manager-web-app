import { getUsersFromServer } from "@/services";
import { useAxiosWithController } from "./useAxiosWithController";
import { onLoadUsersData } from "@/store/features";
import { useAppDispatch, useAppSelector } from "@/store";

export const useUserStore = () => {
    const { users_data } = useAppSelector(state => state.users)
    const dispatch = useAppDispatch();
    const { runAxiosRequest } = useAxiosWithController();

    const startOnLoadUsers = async () => {
        const httpCall = getUsersFromServer();
        const users = await runAxiosRequest(httpCall);
        dispatch(onLoadUsersData(users))
        return;
    } 

    return {
        // * Properties
        users_data,
        //* Methods
        startOnLoadUsers,
    }
}