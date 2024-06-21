import { useAppDispatch } from "@/store";
import { onStartLoading, onStopLoading } from "@/store/features";
import { AxiosResponse } from "axios";
import { useEffect } from "react";

interface AxiosRequestWithController<T> {
    controller: AbortController,
    request: Promise<AxiosResponse<T>>
}

export const useAxiosWithController = () => {
    const dispatch = useAppDispatch();
    let hookController: AbortController;

    const runAxiosRequest = async <T>(axiosRequest: AxiosRequestWithController<T>) => {
        const { controller, request } = axiosRequest;
        if (controller) hookController = controller;

        let response: AxiosResponse<T>;

        try {
            dispatch(onStartLoading())
            response = await request
        } catch (error) {
            dispatch(onStopLoading())
            throw error;
        }
        dispatch(onStopLoading())
        return response.data
    };

    const cancelRequest = () => {
        hookController && hookController.abort();
        dispatch(onStopLoading())
    };

    useEffect(() => {
        return () => {
            cancelRequest();
        };
    }, []);

    return {
        runAxiosRequest,
    }
};