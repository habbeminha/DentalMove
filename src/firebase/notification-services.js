import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
//import firebase from 'firebase';

export const getDevicePushToken = async () => {
    try {
        let res = await Permissions.getAsync(Permissions.NOTIFICATIONS);
        if(res.status !== 'granted'){
            res = await Permissions.askAsync(Permissions.NOTIFICATIONS)
        }
        if(res.status !== 'granted'){
            return Promise.reject(new Error('Push notifications permission was rejected'));
        }
        if (Platform.OS === 'android') {
            Notifications.setNotificationChannelAsync('default', {
                name: 'default',
                importance: Notifications.AndroidImportance.MAX,
                vibrationPattern: [0, 250, 250, 250],
                lightColor: '#FF231F7C',
            });
        }
        const pushToken = (await Notifications.getExpoPushTokenAsync()).data;
        return pushToken;

    } catch(error){

        console.log('Error while registering device push token', error);

    }
};