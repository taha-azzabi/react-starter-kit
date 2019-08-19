
# Très important:

Ce projet n'est pas stable et en cours de développement. Il est dans sa phase initiale.

# Introduction:

Kit de démarrage ReactJS en utilisant les dernières technologies disponibles et en mettant l'accent sur les meilleures pratiques :

### Fonctionnalités

***Un code de qualité:***

***Todo - Prise en considération du référencement:***

***Todo - Optimisation et performance:***

***Documentation interactive des composants:***

Nous utilisons le guide de style [Storybook](https://storybook.js.org/) pour organiser et générer une documentation interactive des composants,

Cela permettrait de visualiser dans un seul endroit le guide de style utilisé (topographie, couleurs, mise en forme...) pour les différents composants.

Pour lancer le storyBook , veuillez saisir la commande suivante: 

```` yarn storybook ````

Voir plus de détails dans la section [Storybook](https://storybook.js.org/)

***Composants indépendants et réutilisables:***

***Séparation entre l'environnement de la production et du développement.***

***Todo - Tests unitaires et tests d'intégrations***

***Hot Loader:***

Visualiser les changements au niveau du code à temps réel et sans initialisation des states ReactJS

## Installation:

1.  Cloner le repository [Kit de démarrage ReactJs](https://github.com/taha-azzabi/react-starter-kit)
    

git clone https://github.com/taha-azzabi/react-starter-kit.git

2.  Installation des dépendances Npm
    

````yarn```` ou ````npm i````

3.  Lancer le serveur de développement:
    

````yarn start ou npm start````

4.  Compiler une version optimisée pour le déploiement en production
    

````yarn build```` ou ````npm build````

## Code qualité et mise en forme du code(Linting):

Pour s’assurer de produire un code propre et de qualité qui suit les meilleures pratiques, nous utilisons :

[ESLint](http://eslint.org/)

[Prettier](https://prettier.io/)

Remarque: Les règles d'Eslint utilisés : Configuration [Airbnb ESLint](https://www.npmjs.com/package/eslint-config-airbnb) basée sur le guide de [style d’Airbnb](https://github.com/airbnb/javascript)

### Configuration éditeur vscode:

Cette partie est très utile et ça permettrait de voir rapidement et à temps réel les erreurs signalées par Eslint et Prettier sans attendre les commits ou lancer une commande supplémentaire.

#### 1) Ajouter Eslint à votre éditeur de code:

1.  Installer l’extension editorconfig vscode pour remplacer les paramètres par défaut de votre éditeur afin de suivre le fichier .editorconfig
    
2.  Installer l'extension vscode [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
    

#### 2) Ajouter Prettier à votre éditeur de code:

1.  Installer l'extension [Prettier vscode extension](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode) pour rendre Prettier le formateur par défaut le code JavaScript
    
2.  Activer l’option ````"editor.formatOnSave": true,"eslint.autoFixOnSave": true```` dans les préférences.
    

## TODO

-   Ajouter les configurations nécessaires pour les tests unitaires
    
-   Optimiser la génération du projet pour la production dans Webpack
    
-   SSR: Server side rendering
<!--stackedit_data:
eyJoaXN0b3J5IjpbLTE0NTc3ODAzNzddfQ==
-->