import * as Notifications from 'expo-notifications';
import { IPlants } from '@/interfaces';

const scheduleNotification = async (plant: IPlants) => {
  const nextTime = new Date(plant.dateTimeNotification);
  const now = new Date();

  const { repeat_every, times } = plant.frequency;
  if (repeat_every === 'week') {
    const interval = Math.trunc(7 / times);
    nextTime.setDate(now.getDate() + interval);
  } else nextTime.setDate(nextTime.getDate() + 1);

  const seconds = Math.abs(Math.ceil(now.getTime() - nextTime.getTime()) / 1000);

  const notificationId = await Notifications.scheduleNotificationAsync({
    content: {
      title: 'Heeey, 🌱',
      body: `Está na hora de cuidar da sua ${plant.name}.`,
      sound: true,
      priority: Notifications.AndroidNotificationPriority.HIGH,
      data: { plant },
    },
    trigger: {
      seconds: seconds < 60 ? 60 : seconds,
      repeats: true,
    },
  });

  // console.log('[NOTIFICATIONS]:', await Notifications.getAllScheduledNotificationsAsync());

  return notificationId;
};

const cancelScheduledNotification = (id: string) =>
  Notifications.cancelScheduledNotificationAsync(id);

export default { scheduleNotification, cancelScheduledNotification };
