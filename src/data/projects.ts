import {Project} from "@/types/project";

export const projects: Project[] = [

    {
        title: "Simularbre",
        description: "Application web de simulation de plantation d'arbre en milieu urbain permettant de sensibiliser les utilisateurs aux défis et enjeux du réchauffement climatique. Cet outil permet d4estimer l'impact en temps réel de la plantation d'arbres sur la température des ilots de chaleur identifiés.",
        tech: ["React", "Next.js", "Mapbox", "OpenWeather API"],
        image: "/assets/images/simularbre.png",
        link: "https://epreuve-rentree-d6dp.vercel.app/map",
        video: null
    },
    {
        title: "Mélogéo",
        description: "Application web immersive utilisant les données de la météo pour générer une expérience audiovisuelle. Découvrez comment les données géographiques et météorologiques se transforment en une symphonie immersive.",
        tech: ["React", "Next.js", "Tone.js", "Mapbox", "OpenWeather API"],
        image: "/assets/images/melogeo.png",
        link: "https://epreuve-rentree-d6dp.vercel.app/map",
        video: null
    },
    {
        title: "IA et Armement",
        description: "Site dont l'objectif est de sensibiliser le public aux enjeux de l'IA dans le domaine militaire. Il propose une experience immersive et interactive, permettant aux utilisateurs de découvrir les implications de l'IA dans les conflits armés.",
        tech: ["Next.js", "Tailwind CSS"],
        image: "/assets/images/outofschool.png",
        link: "https://gastronogeek-lsgy.vercel.app/",
        video: null
    },
    {
        title: "Delicious",
        description: "Site de recettes interactif utilisant l'API de Gastronogeek et Next.js. Ce site m'a permis de mettre en avant mes compétences en design en créant une interface attrayante et fonctionnelle, en intégrant des animations et transitions de pages.",
        tech: ["Next.js", "Tailwind CSS", "API Rest"],
        image: "/assets/images/delicious.png",
        link: "https://gastronogeek-lsgy.vercel.app/",
        video: null
    },
    {
        title: "RPGIne",
        description: "Outil dont l'objectif est de permettre aux utilisateurs de créer des campagnes pour le jeu de rôle de façon simple et intuitive. Il propose une interface utilisateur conviviale et les premières fonctionnalités de création de personnages et de gestion de campagnes.",
        tech: ["Next.js", "Tailwind CSS", "AuthJS","Java", "Figma"],
        image: "/assets/images/rpgine.png",
        link: null,
        video: "/assets/videos/rpgine.mov"
    },

];