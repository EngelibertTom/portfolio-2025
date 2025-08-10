'use client';

import {
    VerticalTimeline,
    VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { FaGraduationCap, FaBriefcase } from 'react-icons/fa';

const Timeline = () => {
    return (
        <div  className="py-20">
            <VerticalTimeline lineColor="#ddd">
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#f3f4f6', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid #f3f4f6' }}
                    date="2023 - 2025"
                    iconStyle={{ background: '#000', color: '#fff' }}
                    icon={<FaBriefcase />}
                >
                    <h4 className="vertical-timeline-element-title">
                        Mastère développement web en alternance
                    </h4>
                    <h3 className="vertical-timeline-element-subtitle">
                        Alliance Optique - Développeur fullstack
                    </h3>
                    <p>En 2023, j’ai rejoint l’entreprise Alliance Optique pour réaliser mon Mastère en développement web en alternance. Pendant ces deux années, j’ai continué à travailler sur Symfony, puisque la majorité des outils internes de l’entreprise reposaient sur ce framework.
                        J’ai ainsi contribué à leur évolution en y intégrant de nouvelles fonctionnalités, comme par exemple :

                        création d’un module CRM permettant de gérer les questionnaires de satisfaction envoyés aux clients,

                        développement d’API pour faire transiter les données entre différents outils,

                        refonte et amélioration de certaines pages pour optimiser l’expérience utilisateur.

                        J’ai également approfondi mes compétences en React et Next.js avec TypeScript, notamment en participant à la réécriture de certains outils afin de les migrer entièrement vers Next.js.</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#f3f4f6', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid #f3f4f6' }}
                    date="2023 - 2024"
                    iconStyle={{ background: '#000', color: '#fff' }}
                    icon={<FaBriefcase />}
                >
                    <h4 className="vertical-timeline-element-title">
                        Licence Professionnelle - Conception, rédaction et création web en alternance
                    </h4>
                    <h3 className="vertical-timeline-element-subtitle">
                        Top Office - Développeur fullstack
                    </h3>
                    <p>Premier contrat d'apprentissage dans le domaine du développement web. Chez Top Office, j’ai pu approfondir les connaissances acquises lors de mon stage précédent. En un an, j’ai intégré de nouvelles fonctionnalités aux outils utilisés par l’entreprise et j’ai été initié au développement sur PowerApps. Avec cet outil, j’ai conçu plusieurs applications, notamment une permettant aux employés en magasin de gérer la réception des marchandises auprès des fournisseurs. J’ai également développé des API pour faire transiter les données entre les outils internes basés sur Symfony et les applications PowerApps.</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#f3f4f6', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid #f3f4f6' }}
                    date="Avril - Mai 2022"
                    iconStyle={{ background: '#000', color: '#fff' }}
                    icon={<FaBriefcase />}
                >
                    <h4 className="vertical-timeline-element-title">Stage DUT MMI</h4>
                    <h3 className="vertical-timeline-element-subtitle">
                        Bonsaï, la part du Colibri
                    </h3>
                    <p className={'font-normal'}>Lors de ce stage d’un mois, j’ai eu ma première introduction à Symfony.
                        J’ai ajouté de nouvelles fonctionnalités à l’application interne utilisée par l’association pour gérer son matériel lors des ateliers.
                        Cela a notamment consisté à créer un module de gestion permettant de suivre les réservations des outils, de vérifier s’ils avaient bien été rendus et d’identifier les personnes qui les avaient utilisés.</p>
                </VerticalTimelineElement>

                <VerticalTimelineElement
                    className="vertical-timeline-element--education"
                    contentStyle={{ background: '#f3f4f6', color: '#000' }}
                    contentArrowStyle={{ borderRight: '7px solid #f3f4f6' }}
                    date="2021 - 2023"
                    iconStyle={{ background: '#2563eb', color: '#fff' }}
                    icon={<FaGraduationCap />}
                >
                    <h4 className="vertical-timeline-element-title">DUT MMI</h4>
                    <h3 className="vertical-timeline-element-subtitle">
                        IUT de Lens
                    </h3>
                    <p>Suite à une réorientation, et ayant toujours eu un intérêt marqué pour l’informatique, j’ai choisi de m’orienter vers le monde du digital.
                        Pendant ces deux années, j’ai pu explorer plusieurs domaines : la communication, l’audiovisuel et le développement web.
                        La première année m’a permis d’acquérir de solides bases dans ces trois domaines.
                        En deuxième année, j’ai décidé de me spécialiser dans celui qui me passionnait le plus : le développement web.
                        J’ai alors eu l’opportunité de réaliser un stage d’un mois dans ce domaine, ce qui a conforté mon choix.
                        C’est ainsi que j’ai poursuivi mon parcours avec une Licence professionnelle – Création Web dans le même établissement.</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </div>
    );
};

export default Timeline;
