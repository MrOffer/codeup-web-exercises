const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

 // 2.

 let threeLanguages = users.filter(lan => lan.languages.length >= 3);
console.log(threeLanguages);

// 3.

let email = users.map(n => n.email);
console.log(email);

// 4.

let experience = users.reduce((a,c) => {return a + c.yearsOfExperience},0);
console.log(experience);

let averageExperience = experience / users.length;
console.log(averageExperience);

// 5.
let longestEmail = users.reduce((a,c) => {a.email.length > c.email.length},`${c.emal}`);
console.log(longestEmail);
// 6.

let user = users.reduce((a,c) => {return `${a} ${c.name},`},"");
console.log(user);