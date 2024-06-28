import { craeteUserOnServer, deleteUserOnServer, getUsersFromServer } from "@/services";
import { useAxiosWithController } from "./useAxiosWithController";
import { onCreateUser, onDeleteUser, onLoadUsersData } from "@/store/features";
import { useAppDispatch, useAppSelector } from "@/store";
interface CreateUserDto {
    full_name: string;
    email: string;
    role: string;
}

export const useUserStore = () => {
    const { users_data } = useAppSelector(state => state.users)
    const dispatch = useAppDispatch();
    const { runAxiosRequest } = useAxiosWithController();

    const startOnLoadUsers = async () => {
        const httpCall = getUsersFromServer();
        const users = await runAxiosRequest(httpCall);
        dispatch(onLoadUsersData(users))
        return;
    };

    const startOnCreateUser = async (candidateUser: CreateUserDto) => {
        // * Http call to server
        const htttpCall = craeteUserOnServer(candidateUser);
        const user = await runAxiosRequest(htttpCall);
        dispatch(onCreateUser(user));
        return;
    };

    const startOnUpdateUser = async () => {
        // * Http call to server
    };

    const startOnDeleteUser = async (userId: string) => {
        // * Http call to server
        const httpCall = deleteUserOnServer(userId);
        await runAxiosRequest(httpCall);
        dispatch(onDeleteUser(userId));
        return;
    }

    const startOnSuspendUser = async () => {
        // * Http call to server
    };

    const startOnLogoutUser = async () => {
        // * Http call to server
    };

    const startOnRecoverPassword = async () => {
        // * Http call to server
    };

    return {
        // * Properties
        users_data,

        //* Methods
        startOnLoadUsers,
        startOnCreateUser,
        startOnUpdateUser,
        startOnDeleteUser,
        startOnLogoutUser,
        startOnSuspendUser,
        startOnRecoverPassword,
    }
}