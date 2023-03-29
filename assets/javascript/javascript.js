const projectsData = [
    {
        id: 1,
        title: "Resto",
        date: "Juillet 2022",
        languages: ["Html", "Css"],
        infos:
            "Le Responsive Web Design pour la 'One Page' d'un restaurant fictif",
        img: "./assets/img/projet-1.webp",
        link: "https://sebasayan.github.io/Resto/",
    },
    {
        id: 2,
        title: "Gaming Campus",
        date: "Septembre 2022",
        languages: ["Html", "Css"],
        infos:
            "Le site de gaming campus réalisé a partir d'une maquette desktop et mobile.",
        img: "./assets/img/projet-2.webp",
        link: "https://sebasayan.github.io/gc-integration-responsive/",
    },
    {
        id: 3,
        title: "Country App",
        date: "Septembre 2022",
        languages: ["Javascript", "React"],
        infos:
            "Application React pour trier les pays par continent et population par ordre decroissant à l'aide de l'API 'REST Countries'.",
        img: "./assets/img/projet-3.webp",
        link: "https://sweet-fairy-4d3b74.netlify.app/",
    },
    {
        id: 4,
        title: "Cooking App",
        date: "Septembre 2022",
        languages: ["Javascript", "React"],
        infos:
            "Application React pour chercher des recettes de cuisine (en anglais) à l'aide de l'API 'TheMealDB'.",
        img: "./assets/img/projet-4.webp",
        link: "https://comforting-sfogliatella-a4cf68.netlify.app/",
    },
    {
        id: 4,
        title: "Cinema App",
        date: "Janvier 2023",
        languages: ["Javascript", "React"],
        infos:
            "Application React pour chercher des films à l'aide de l'API 'TMDB'.",
        img: "./assets/img/projet-5.webp",
        link: "https://zingy-khapse-360583.netlify.app/",
    },
    {
        id: 5,
        title: "Crypto-money App",
        date: "Janvier 2023",
        languages: ["Javascript", "React"],
        infos:
            "Application React pour consulter les cours des principales crypto-monnaies en direct à l'aide de l'API 'CoinGecko'.",
        img: "./assets/img/projet-6.webp",
        link: "https://neon-zabaione-66599f.netlify.app",
    },
];

const technosData = [
    {
        id: 1,
        name: "HTML5",
        infos: "HyperText Markup Language 5",
        img: "./assets/img/html5.svg",

    },
    {
        id: 2,
        name: "CSS3",
        infos: "Cascading Style Sheets",
        img: "./assets/img/css3.svg",

    },
    {
        id: 3,
        name: "Javascript",
        infos: "Langage de programmation",
        img: "./assets/img/javascript.svg",

    },
    {
        id: 4,
        name: "ReactJS",
        infos: "React (aussi appelé React.js ou ReactJS) est une bibliothèque JavaScript libre développée par Facebook (maintenant Meta) depuis 2013",
        img: "./assets/img/react.svg",

    },
    {
        id: 5,
        name: "VueJS",
        infos: "Vue.js (aussi appelé plus simplement Vue), est un framework JavaScript open-source utilisé pour construire des interfaces utilisateur et des applications web monopages.",
        img: "./assets/img/vue.svg",

    },
    {
        id: 6,
        name: "PHP",
        infos: "Langage de programmation",
        img: "./assets/img/php.svg",

    },
    {
        id: 7,
        name: "Symfony",
        infos: "Symfony est un ensemble de composants PHP ainsi qu'un framework MVC libre écrit en PHP. Il fournit des fonctionnalités modulables et adaptables qui permettent de faciliter et d’accélérer le développement d'un site web",
        img: "./assets/img/symfony.svg",

    },
    {
        id: 8,
        name: "API Rest",
        infos: "La fonction Appel Rest permet aux administrateurs d'appeler un service Web externe depuis une tâche de workflow automatique sans programmation.",
        img: "./assets/img/api.svg",

    },
    {
        id: 9,
        name: "SEO",
        infos: "L'optimisation pour les moteurs de recherche, aussi connue sous le sigle SEO, inclut l'ensemble des techniques qui visent à améliorer le positionnement d'une page, d'un site ou d'une application web dans la page de résultats d'un moteur de recherche.",
        img: "./assets/img/seo.svg",

    },
    {
        id: 10,
        name: "RGPD",
        infos: "Règlement du Parlement européen et du Conseil relatif à la protection des personnes physiques à l'égard du traitement des données à caractère personnel et à la libre circulation de ces données, et abrogeant la directive 95/46/CE",
        img: "./assets/img/rgpd.svg",

    },
    {
        id: 11,
        name: "Accessibilité",
        infos: "L'accessibilité du web est la problématique de l'accès aux contenus et services web par les personnes handicapées (déficients visuels, sourds, malentendants, etc.) et plus généralement par tous les utilisateurs, quels que soient leurs dispositifs d’accès (mobile, tablette, etc.) ou leurs conditions d’environnement (niveau sonore, éclairement, etc.). ",
        img: "./assets/img/wcag2.svg",

    },
]

const portfolioProjects = document.querySelector('.cardProject')
const portfolioTechnos = document.querySelector('.cardTechnos')

const projectDisplay = () => {
    portfolioProjects.innerHTML = projectsData
        .map(
            (project) =>
                `             
            <div class="col-6 projectCard" style="width: 24rem;">
                <a href="${project.link}" title="${project.infos}" target="_blank"><img src="${project.img}" class="card-img-top m-b2" alt="${project.title}"></a>
            </div>
    `
        )
        .join("");
};

const technoDisplay = () => {
    portfolioTechnos.innerHTML = technosData
        .map(
            (tech) =>
                `             
            <div class="col-12 technoCard mx-auto mt-4" style="width: 10rem;">
                <img src="${tech.img}" title="${tech.infos}" class="card-img-top m-b2" alt="${tech.name}">
            </div>
    `
        )
        .join("");
};

function validateForm() {
    const name = document.forms["myForm"]["name"].value;
    const email = document.forms["myForm"]["email"].value;
    const sujet = document.forms["myForm"]["sujet"].value;
    const message = document.forms["myForm"]["message"].value;
    const checkbox = document.forms["myForm"]["checkbox"].checked;

    if (name == "") {
        alert("Veuillez renseigner votre nom.");
        return false;
    }
    const emailRegex = /^\S+@\S+\.\S+$/;
    if (!emailRegex.test(email)) {
        alert("Veuillez renseigner une adresse email valide.");
        return false;
    }
    if (sujet == "") {
        alert("Veuillez renseigner le sujet de votre message.");
        return false;
    }
    if (message == "") {
        alert("Veuillez renseigner votre message.");
        return false;
    }
    if (checkbox == false) {
        alert("Veuillez cocher la case si vous êtes humain.");
        return false;
    }
}

projectDisplay();
technoDisplay();
