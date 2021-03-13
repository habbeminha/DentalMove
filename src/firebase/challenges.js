import { getReadArticlesNum, getSavedArticlesNum } from "./services";

var numSaved = getSavedArticlesNum();
var numRead = getReadArticlesNum();

export function getChallenges(){
    numSaved = getSavedArticlesNum();
    numRead = getReadArticlesNum();
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
            actual: numRead,
            objective: 10,
            show: true,
        },
        {
            title: 'Ler 20 artigos',
            actual: numRead,
            objective: 20,
            show: numRead >= 10,
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