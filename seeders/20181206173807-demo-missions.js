module.exports = {
  up: (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Missions',
      [
        {
          CompanyId: 1,
          titleMission: 'Field Opération',
          dateStart: new Date('201/01/20'),
          dateEnd: new Date('2019/06/20'),
          description: `Descriptif du poste
            Être responsable de la qualité et du bon fonctionnement de nos stations:
            1. Visibilité et parcours client
            2. Relation avec le gestionnaire parking

            Etre responsable du bon état de marche des véhicules:
            1. Vérification des véhicules
            2. Gestion de petites réparations
            3. Vérification des éléments de sécurité

            Être responsable de de la qualité de nos partenaires:
            1. On-boarding et Formation
            2. Matériel à disposition
            3. Suivi qualité et remise à niveau

            Être responsable de la tenue des inventaires & de la gestion des produits nécessaire à Virtuo:
            1. Nettoyants véhicules
            2. Inventaire Amenities & matériel partenaire
            3. Inventaire Stations

            Profil recherché:
            Rigueur & autonomie & Organisation
            Perfectionniste & Pointilleux
            Permis B indispensabl
            `,
          town: 'Paris',
          intro: 'Être responsable de la qualité et du bon fonctionnement de nos stations',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          CompanyId: 2,
          titleMission: 'Office Manager',
          dateStart: new Date('2019/01/25'),
          dateEnd: new Date('2020/01/25'),
          description: `Descriptif du poste
            YouLoveWords cherche son Office Manager.
            Vous serez :
            En charge de la vie d’équipe (organisation des team building, petits déjeuner d’équipe, séminaires, événements au bureau...).
            En charge du bon fonctionnement du bureau et de la relation avec nos prestataires (fournitures, équipements, solution de paiements).
            En charge de différentes tâches administratives (onboarding et offboarding des collaborateurs, actualisation des contrats des collaborateurs avec notre cabinet d’avocat).
            En charge de la relation à notre expert comptable en support du CEO et du contrôleur de gestion.
            En charge de l’accueil des clients dans les bureaux, des appels entrants, du courrier entrant et sortant.
            Profil recherché
            Connaissances spécifiques
            L’Office Manager maîtrise parfaitement la Suite Microsoft Office et nosu fera découvrir les solutions et logiciels qui nous feront gagner en productivité et qualité de vie au bureau.

            Qualités majeures
            Polyvalence, méthode, organisation, anticipation, autonomie, réactivité, bon sens relationnel et très bonne maîtrise de la langue française sont autant de qualités nécessaires pour réussir dans ce métier.
            `,
          town: 'Paris',
          intro: 'YouLoveWords cherche son Office Manager',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          CompanyId: 3,
          titleMission: 'Developpeur Back',
          dateStart: new Date('2019/01/25'),
          dateEnd: new Date('2020/01/25'),
          description: `
          Descriptif du poste
            Pour relever ces défis, nous recrutons un(e) Développeur Front-End en stage ou en alternance.

            Tu seras directement intégré(e) à une équipe Scrum de Développement (comprenant développeurs back & front, design, QA, et équipe produit).

            Tes missions
            Architecture et conception de notre application web Angular 6 - Redux
            Intégration des maquettes de l’application, au pixel près !
            Développement des fonctionnalités front-end
            Gestion du modèle de données front et liaison avec les APIs
            Assurer la performance et qualité des interfaces notamment en évoluant vers une "progressive web app"
            Réaliser et maintenir la base de tests unitaires front-end

            Stack actuelle

              Backend : Python / Django, Django REST Framework, Flask
              Frontend : Angular 6, Redux (Ngrx), TypeScript, SCSS, Angular Universal
              Servers : Nginx, Postgres, Gunicorn, Docker, etc.
              Others: Celery, Redis, RabbitMQ, Phantom JS, Selenium, etc.
              Profil recherché
              Tu es passionné(e) par les nouvelles technologies
              Tu fais preuve de rigueur et d’autonomie
              Tu es force de proposition
              Tu aimes apprendre des autres et apprendre aux autres
              Tu as des connaissances en HTML, CSS et JavaScript
              L’utilisation des frameworks JS dans tes projets passés (Angular, React, Vue, etc.) est un plus
              L’expérience utilisateur est un aspect produit que tu affectionnes tout particulièrement
              Tu cherches à travailler en équipe
            `,
          town: 'Paris',
          intro:
            'Pour relever ces défis, nous recrutons un(e) Développeur Front-End en stage ou en alternance.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          CompanyId: 3,
          titleMission: 'Développeur Front-End',
          dateStart: new Date('2019/02/10'),
          dateEnd: new Date('2019/12/10'),
          description: `Descriptif du poste
            Pour relever ces défis, nous recrutons un(e) Développeur Front-End expérimenté.

            Tu seras directement intégré(e) à une équipe Scrum de Développement (comprenant développeurs back & front, design, QA, et équipe produit).

            Tes missions
            Architecture et conception de notre application web Angular 5 - Redux
            Développement des fonctionnalités front-end
            Gestion du modèle de données front et liaison avec les APIs
            Assurer la performance et qualité des interfaces notamment en évoluant vers une "progressive web app"
            Réaliser et maintenir la base de tests unitaires front-end
            Mentoring des développeurs plus juniors
            La stack actuelle de papernest est la suivante :

            Backend : Python / Django, Django REST Framework, Flask
            Frontend : Angular 5, Redux (Ngrx), TypeScript, SCSS, Angular Universal
            Servers : Nginx, Postgres, Gunicorn, Docker, etc.
            Others: Celery, Redis, RabbitMQ, Phantom JS, Selenium, etc.
            Profil recherché
            Tu as une expérience précédente en développement front-end d'au moins 2/3 ans
            Tu as déjà une expérience frontend avec un framework JS (Angular JS, 2+, React, Vue, Ember ou autre)
            Tu as des connaissances solides en software engineering et dans ces applications front. Tu as notamment une solide maîtrise de la programmation objet, des designs patterns, ...
            Tu as un goût pour le produit et envie de développer des interfaces orientées client
            Tu es évidemment à l'aise avec le HTML, le CSS, le JavaScript/TypeScript, les préprocesseurs CSS, etc.
            Tu fais preuve d'autonomie et tu es force de proposition`,
          town: 'Paris',
          intro: 'Pour relever ces défis, nous recrutons un(e) Développeur Front-End expérimenté.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          CompanyId: 2,
          titleMission: 'Bras droit du CEO',
          dateStart: new Date('2019/03/10'),
          dateEnd: new Date('2020/03/10'),
          description: `Descriptif du poste
            Pour relever ces défis, nous recrutons un(e) stagiaire Bras Droit de CEO.

            Très exposé(e), au sein de l’équipe Stratégie & Partenariats, tu travailleras en interaction fréquente avec le CEO et les autres chefs de pôle. Les missions, responsabilisantes et très variées, ont une dominante analytique mais également une composante opérationnelle. Elles requièrent un fort investissement, en échange duquel tu vas apprendre sur de nombreux sujets à nos côtés !

            Tu évolueras sur les missions suivantes, en fonction de tes compétences et de tes appétences / axes de développement :

            Stratégie
            International
            ●	Analyses stratégiques liées à l’actuel lancement dans un nouveau pays
            ●	Coordination et suivi de la roadmap
            ●	Développement de partenariats (prise de contact, analyses financières, négociations contractuelles)
            ●	Analyses concurrentielles

            France
            ●	Analyses stratégiques et dashboarding pour les fondateurs
            ●	Analyses sur l’environnement concurrentiel

            Prévisions financières & data
            ● Mise à jour, suivi et construction du business plan
            ● Reporting financiers en vue des réunions du comité exécutif et réunions investisseurs
            ● Deep-dives analytiques pour s’assurer de la cohérence et de la complétude des données de notre BI
            ● Modélisations Excel / analyses ad-hoc

            Support au corporate development et au management des interlocuteurs clé
            ● Prospection et suivi de nouveaux partenaires B2B
            ● Lancement de nouvelles “verticales” (diversification de l’offre papernest)
            ● Dossier de subventions et de prêts
            ● Actions de représentations pour le compte du CEO

            Et bien plus encore selon les besoins de papernest et tes envies !

            Profil recherché
            Top tiers école d'ingénieur ou de commerce
            Très analytique (excellente maîtrise d’Excel) et si possible familier avec un langage de “programmation” (VBA, SQL)
            Autonome
            Capable d'apprendre très vite
            Esprit d’initiative, enthousiaste, team-player
            La maîtrise de l’anglais est essentielle ; la maîtrise de l’espagnol est un véritable plus`,
          town: 'Paris',
          intro: 'Pour relever ces défis, nous recrutons un(e) stagiaire Bras Droit de CEO.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          CompanyId: 1,
          titleMission: 'Product Manager B2B',
          dateStart: new Date('2019/02/15'),
          dateEnd: new Date('2019/12/15'),
          description: `Descriptif du poste
            Pour relever ces défis, nous recrutons un(e) stagiaire Product Manager.

            Au sein de l’équipe produit, tu seras rattaché(e) au Product Manager B2B et amené(e) à travailler en étroite collaboration avec nos développeurs, designers, analystes ainsi que l’équipe Sales.

            Tes missions
            Tu participes à la définition de la roadmap produit et à sa mise en place afin de répondre à la stratégie de l’entreprise et faire croître nos métriques business.

            Pour cela, tu seras amené(e) :

            A générer et structurer de nouvelles idées / suggestions de fonctionnalités pour améliorer nos KPIs (réalisation de mockups et prototypes, itérations design) ;
            A collaborer avec l’UX/UI designer tes fonctionnalités (réalisation de mockups et prototypes, itérations design) ;
            Découper tes fonctionnalités en user stories afin qu’elles soient développées par notre équipe de développeurs.
            Coordonner le lancement de tes fonctionnalités et les tester
            Analyser et suivre la performance de tes nouvelles fonctionnalités
            Profil recherché
            Empathie utilisateur : doté(e) d’excellentes intuitions, tu es capable de te mettre dans la peau de ton utilisateur
            Tu te sens parfaitement à l’aise dans un environnement “test and learn”, où tout va très (très) vite
            Tu aimes décomposer des problèmes complexes afin de les résoudre
            Tu sais faire preuve de discernement et sais tirer du positif de chaque critiques, même mal formulées
            Geek inassumé(e) et extrêmement à l’aise avec les outils & plateformes tech
            Tu aimes les chiffres et les données, tu tires un épanouissement profond lorsque tu arrives à les faire parler.
            Précis(e), organisé(e), rigoureux(se)`,
          town: 'Paris',
          intro: 'Pour relever ces défis, nous recrutons un(e) stagiaire Product Manager.',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          CompanyId: 1,
          titleMission: 'Mission ',
          dateStart: new Date('2018/12/10'),
          dateEnd: new Date('2018/12/10'),
          description: `Neque porro quisquam est qui dolorem ipsum quia dolor
                        sit amet, consectetur, adipisci velit..."Il n’y a personne
                         qui n’aime la souffrance pour elle-même, qui ne la recherche
                         et qui ne la veuille pour elle-même…`,
          town: 'Paris',
          intro: 'Neque porro quisquam est qui dolorem ipsum quia dolor',
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    ),

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
