import { privateAuthApiService } from "@/api";
import { User } from "@/models/users";

export const getUsersFromServer = () => {
    const controller = new AbortController();
    const request = privateAuthApiService.get<User[]>("/users", {signal: controller.signal});

    return { controller, request };
};

export const craeteUserOnServer = (candidate: any) => {
    const controller = new AbortController();
    const request = privateAuthApiService.post<User>("/users", candidate, {signal: controller.signal});

    return { controller, request };
};

export const updateUserOnServer = (updates: Partial<User>, userId: string) => {
    const controller = new AbortController();
    const request = privateAuthApiService.patch<User>(`/users/${userId}`, updates, {signal: controller.signal});

    return { request, controller };
};

export const deleteUserOnServer = (userId: string) => {
    const controller = new AbortController();
    const request = privateAuthApiService.delete<void>(`/users/${userId}`, {signal: controller.signal});

    return { request, controller };
};

export const suspendUserOnServer = (userId: string) => {
    const controller = new AbortController();
    const request = privateAuthApiService.patch(`/users/${userId}`, null, {signal: controller.signal});

    return { request, controller };
};