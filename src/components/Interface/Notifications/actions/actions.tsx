import {
  ADD_NOTIFICATIONS,
  REMOVE_NOTIFICATIONS,
  AddNotificationAction,
  RemoveNotificationAction,
} from '../types';

export const removeNotification = (
  notifications: number[],
  item: number
): RemoveNotificationAction => ({
  type: REMOVE_NOTIFICATIONS,
  notifications,
  item,
});

export const addNotification = (notifications: number[]): AddNotificationAction => ({
  type: ADD_NOTIFICATIONS,
  notifications,
});
