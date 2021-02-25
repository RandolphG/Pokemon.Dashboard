import { NotificationsReducer } from "../types";

export const getNotfications = (state: NotificationsReducer): number[] => state.notifications;
