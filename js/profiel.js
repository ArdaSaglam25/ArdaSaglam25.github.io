
console.log("main.js.loaded");


const myObject = {
    email: 'arda2505@outlook.com',
    userName: 'Arda Saglam 25',
    birthDate: '25-05-2005',
    profilPicture: 'hier komt profiel foto !',
    biography: 'komt nog later ',
    projects: 'boter kaas en eieren, escape room, whack a mole, kleding website',
    educationes: 'software developer niveau 4',
    skills: 'tekenen en voetballen',
    bannerColor: 'blauw',
    socialMedias: 'Instagram',
};


for (key in myObject) {
    console.log(key);
    console.log(myObject[key]);
};

document.querySelector('.Banner');