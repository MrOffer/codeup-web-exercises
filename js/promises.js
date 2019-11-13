"use strict";

const wait = (num) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }, num);
    });
};

wait(1000).then(() => console.log("You'll see this after 1 second"));
wait(3000).then(() => console.log("You'll see this after 3 seconds"));


let dateOfLastCommit = username => {
    let url = `https://api.github.com/users/${username}/events`;
    let event = {headers: {'Authorization': gitHubKey}};
    return fetch(url, event)
        .then(response => response.json())
        .then(data => data[0].created_at);

};

console.log(dateOfLastCommit('MrOffer').then(lastCommitDate =>
    console.log(lastCommitDate)));
