import { privateAuthApiService } from "@/api";
import { User } from "@/models/users";

export const getUsersFromServer = () => {
    const controller = new AbortController();
    const request = privateAuthApiService.get<User[]>("/users", {signal: controller.signal});

    return { controller, request }
}