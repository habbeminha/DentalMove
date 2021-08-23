import * as Notifications from 'expo-notifications';
import * as Permissions from 'expo-permissions';
import { Alert } from 'react-native';
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

export const dailyNotifications = () => {
    Notifications.scheduleNotificationAsync({
        content: {
            title: 'Bom dia! Já fez sua leitura de hoje? 🤓',
        },
        trigger: {
            hour: 9,
            minute: 0,
            repeats: true
        },
      });
    Notifications.scheduleNotificationAsync({
        content: {
            title: 'Quase fim do dia... ',
            body: 'Que tal tirar um tempinho com seus artigos recomendados? 📚'
        },
        trigger: {
            hour: 18,
            minute: 0,
            repeats: true
        },
    });
    Notifications.scheduleNotificationAsync({
        content: {
            title: 'Dia corrido? ',
            body: 'Não deixe de investir no que não tem preço! Seu conhecimento 🚀✨'
        },
        trigger: {
            hour: 21,
            minute: 0,
            repeats: true
        },
    });
}

export const welcomeNotifications = () => {
    Notifications.scheduleNotificationAsync({
        content: {
            title: 'Seja bem vindo ao Dental Move',
            body: 'Esperamos que esse aplicativo se torne útil no seu dia a dia ✨🦷'
        },
        trigger: {
            seconds: 60 * 60,
            repeats: false,
        },
    });
    Notifications.scheduleNotificationAsync({
        content: {
            title: 'Preparado para a leitura do dia?',
            body: 'Cumpra seus desafios lendo um pouquinho por dia 🦷📚'
        },
        trigger: {
            seconds: 60 * 60,
            repeats: false,
        },
    });
}

export const savingNotification = () => {
    Notifications.scheduleNotificationAsync({
        content: {
            title: 'Continue salvando artigos!',
            body: 'Continue salvando artigos que tem a ver com você! E comece a ler hoje mesmo 💕'
        },
        trigger: {
            seconds: 3*60*60,
            repeats: false,
        },
    });
}

export const challengeNotification = (challengeTitle) => {
    console.log("Completou: " + challengeTitle);
    Notifications.scheduleNotificationAsync({
        content: {
            title: `Parabéns você completou o desafio "${challengeTitle}"! 💪`,
            body: 'Continue salvando e lendo artigos para obter mais conquistas!'
        },
        trigger: {
            seconds: 5
        },
    });
    Alert.alert(
        `Parabéns você completou o desafio "${challengeTitle}"! 💪`,
        'Continue salvando e lendo artigos para obter mais conquistas!',
        ['OK']
    )
}

export const cancelAllScheduledNotifications = Notifications.cancelAllScheduledNotificationsAsync;

export const testNotification = () => {
    Notifications.scheduleNotificationAsync({
        content: {
            title: 'TESTE!1234',
            body: 'Continue salvando artigos que tem a ver com você! E comece a ler hoje mesmo 💕'
        },
        trigger: {
            seconds: 30,
            repeats: false,
        },
    });
}