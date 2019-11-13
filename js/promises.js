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


const dateOfLastCommit = username => {
    let url = `https://api.github.com/users/${username}/events`;
    let event = {headers: {'Authorization': gitHubKey}};
    return fetch(url, event)
        .then(response => response.json())
        .then(data => data.find(event => event.type === "PushEvent"))
        .then(event => event.created_at)
        .then(date => console.log(date));
};

dateOfLastCommit('MrOffer');

