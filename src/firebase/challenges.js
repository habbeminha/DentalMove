import { getSavedArticlesNum } from "./services";

var numSaved = getSavedArticlesNum();

const challenges = [
    {
        title: 'Salvar 10 artigos',
        actual: numSaved,
        objective: 10,
        show: true,
    },
    {
        title: 'Salvar 20 artigos',
        actual: numSaved,
        objective: 20,
        show: numSaved >= 10,
    },
    {
        title: 'Ler 10 artigos',
        actual: numSaved,
        objective: 10,
        show: numSaved >= 10,
    },
    {
        title: 'Ler 20 artigos',
        actual: numSaved,
        objective: 10,
        show: numSaved >= 10,
    },
]

export function getChallenges(){
    console.log('GET CHALLENGES');
    numSaved = getSavedArticlesNum();
    return [
        {
            title: 'Salvar 10 artigos',
            actual: numSaved,
            objective: 10,
            show: true,
        },
        {
            title: 'Salvar 20 artigos',
            actual: numSaved,
            objective: 20,
            show: numSaved >= 10,
        },
        {
            title: 'Ler 10 artigos',
            actual: numSaved,
            objective: 10,
            show: numSaved >= 10,
        },
        {
            title: 'Ler 20 artigos',
            actual: numSaved,
            objective: 10,
            show: numSaved >= 10,
        },
    ];
}

export function getActiveChallengesNum(){
    let num = 0;
    getChallenges().forEach( cha => {
        if(cha.show){
            num++;
        }
    })
    return num;
}

export function getAccomplishedChallengesNum(){
    let num = 0;
    getChallenges().forEach( cha => {
        if(cha.actual >= cha.objective){
            num++;
        }
    })
    return num;
}