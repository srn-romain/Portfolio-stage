/*INDEX*/

function displayJournalEntries() {
  var weekSelect = document.getElementById("week-dropdown");
  var selectedWeek = weekSelect.value;
  var journalEntriesContainer = document.querySelector(".journal-entries");

  // Effacer les entrées précédentes
  journalEntriesContainer.innerHTML = "";

  // Ajouter les nouvelles entrées correspondant à la semaine sélectionnée
  if (selectedWeek === "week1") {
    var entriesWeek1 = `
    <div class="cv-container container">

    <h2>Lundi 15 mai 2023</h2>
    <div class="service__icon" style="float: right;">
      <img src="img/flavio.jpg" alt="Votre photo" style="border-radius: 50%; object-fit: cover; width: 100%; height: 100%;">
    </div>
    <h3 style="display: inline;"> Matin :</h3><span> Arrivée à l'entreprise puis découverte des locaux, de l'entreprise et de
      l'équipe</span><br>
    <h3 style="display: inline;">Après-midi : </h3><span>Rencontre avec Flavio, un stagiaire de seconde année de
      bachelor informatique avec qui je partagerai un projet futur</span>

    <h2>Mardi 16 mai 2023</h2>
    <div class="service__icon" style="float: right;">
      <img src="img/margot.jpg" alt="Votre photo" style="border-radius: 50%; object-fit: cover; width: 100%; height: 100%;">
    </div>
    <h3 style="display: inline;">Matin : </h3><span>Rencontre avec Margot, une stagiaire RH qui travaillera également avec moi sur un projet futur</span><br>
    <h3 style="display: inline;">Après-midi : </h3><span>Création de mon espace intranet en ligne</span>
      

    <h2>Mercredi 17 mai 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span>Entretien avec Arnaud ROUSSET, un Product Owner (PO) Informatique qui m'a fait
    découvrir le projet CRM. Réunion de présentation du code de l'éthic' acteur ensuite à 12h.</span>
    <div class="image-container">
      <img src="img/ethic.png" class="image-cadre">
      <img src="img/ethic2.png" class="image-cadre">
    </div>


    <h2>Jeudi 18 mai 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> FERIE </span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> FERIE </span>

  
    <h2>Vendredi 19 mai 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> FERIE </span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> FERIE  </span>

  </div>
    `;
    journalEntriesContainer.innerHTML = entriesWeek1;
  } else if (selectedWeek === "week2") {
    var entriesWeek2 = `
    <div class="cv-container container">

    <h2>Lundi 22 mai 2023</h2>
    <h3 style="display: inline;"> Matin :</h3><span> A 9h réunion daily du projet CRM. Ensuite c'est réunion de démonstration au client car ce jour marque la 
    fin du sprint 4</span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> Remise d'un ordinateur professionnelle puis installations des applications nécessaire au projet CRM 
    comme Git, InteliJ...</span>

    <h2>Mardi 23 mai 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> A 9h réunion daily du projet CRM. Entretient en visioconférence avec Michael GIRY, un developpeur très 
    expérimenté qui m'a expliqué le fonctionnement des applications nécessaire au projet</span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> 
    J'ai suivi mon premier cours sur Angular via une plateforme en ligne renommée, Udemy. Cette application de formation m'a permis d'accéder à une série de
     vidéos explicatives soigneusement classées selon des axes thématiques pertinents.</span>
     <div class="image-container">
     <img src="img/udemycestquoi.png" class="image-cadre">
      <img src="img/udemycestquoi2.png" class="image-cadre">
    </div>
    

    <h2>Mercredi 24 mai 2023</h2>
    <div class="service__icon" style="float: right;">
      <img src="img/hinda.png" alt="Votre photo" style="border-radius: 50%; object-fit: cover; width: 100%; height: 100%;">
    </div>
    <h3 style="display: inline;">Matin : </h3><span> A 9h réunion daily du projet CRM. Puis accueil de Hinda, une nouvelle employée Norsys en tant qu'ingénieure 
    en Java au de l'entreprise. Durant la fin de matinée j'ai continué mes cours sur Udemy avec un language supplémentaire que j'ai découvert : Java.</span><br>

    <h2>Jeudi 25 mai 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> A 9h réunion daily du projet CRM. J'ai ensuite poursuivis mes cours sur Udemy en Angular et Java.</span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> Cet après-midi, j'ai également continué mes cours sur Angular et Java. Puis en fin de journée j'ai dû 
    organiser au côté de Margot Duroule le traditionnel concours de pétanque qui aura lieu à partir de juin.</span>

    <h2>Vendredi 26 mai 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> Je suis toujours mes cours sur Udemy aujourd'hui. Malgrés tout, je suis également le rendez-vous quotidient a 
    9h pour la réunion daily du projet CRM. A 10h, j'ai pu faire avec toute l'équipe du projet CRM afin de faire le point sur l'avancement de celui-ci.</span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> J'ai une fois de plus continué les cours Udemy en Java et Angular. Cela m'a permis d'installer mon premier 
    projet solo en Angular !</span>
    <img src="img/my-first-app.png" class="image-cadre">

  </div>
    `;
    journalEntriesContainer.innerHTML = entriesWeek2;
  } else if (selectedWeek === "week3") {
    var entriesWeek3 = `
    <div class="cv-container container">

    <h2>Lundi 29 mai 2023</h2>
    <h3 style="display: inline;"> Matin :</h3><span> FERIE </span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> FERIE </span>

    <h2>Mardi 30 mai 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> Une réunion journalière du projet CRM a été tenue à neuf heures. Par la suite, 
    à dix heures, une rencontre impliquant Hinda, Michael moi a été planifiée afin de présenter le code du projet CRM, en mettant un
     accent particulier sur l'explication des "tests unitaires". Cette réunion s'est avérée être d'une complexité notable, en raison 
     de l'ampleur des informations abordées, néanmoins, elle s'est révélée extrêmement enrichissante. La pyramide des tests, dont une 
     illustration est présente ci-dessous, est l'un des sujets abordés.</span><br>
     <img src="img/pyramideDesTests.png" class="image-cadre">
    <h3 style="display: inline;">Après-midi : </h3><span> La réunion s'est poursuivie avec Michael et Hinda, mais cette fois-ci au sujet 
    d'Hibernate. Michael nous a recommandé deux livres à lire : "Clean code" et "Unit Testing".</span>

    <h2>Mercredi 31 mai 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> La journée a commencé avec la réunion quotidienne du projet CRM à 9 heures. 
    Ensuite, j'ai poursuivi mes cours sur Angular et Java sur la plateforme Udemy.  Par la suite, j'ai eu une réunion avec Flavio Henriques et 
    Margot Duroule pour discuter de l'évènement prévues à la fin du mois de juin avec l'ensemble des employés de Norsys Lyon.</span><br>

    <h2>Jeudi 1 juin 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> La journée a débuté avec la réunion quotidienne du projet CRM à 9 heures. Par la suite, 
    j'ai continué mes cours sur la plateforme Udemy. </span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> Dans l'après-midi, j'ai eu une réunion avec Hinda concernant l'architecture du 
    projet CRM. Enfin, à 17h30, j'ai eu un entretien avec M. Schaffter concernant Angular.</span>

    <h2>Vendredi 2 juin 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> Aujourd'hui dernier jour du sprint 5. A 9h réunion daily du projet CRM puis préparation 
    de la réunion de l'après-midi.</span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> Après-midi réunion : à 14h réunion de rétrospection de fin de sprint puis à 16h suite de la réunion 
    en mode "Sprint Planning". On se donne les grandes lignes des prochaines semaines sur le projet. </span>

  </div>
    `;
    journalEntriesContainer.innerHTML = entriesWeek3;
  } else if (selectedWeek === "week4") {
    var entriesWeek4 = `
    <div class="cv-container container">

    <h2>Lundi 5 juin 2023</h2>
    <h3 style="display: inline;"> Matin :</h3><span> A 9h réunion daily du projet CRM. Puis aujourd'hui, est marqué par mon entrée dans le code CRM en tant que dev. 
    Avec Hinda nous nous sommes donc occupé de notre premier US en peer-programming. Il s'agit d'ajouter dans le front des contacts à un service. Ci-dessous, la
    capture d'écran de notre US ainsi que les tâches à réaliser.</span><br>
    <img src="img/tachearealiser.png" class="image-cadre">
    <h3 style="display: inline;">Après-midi : </h3><span> J'ai poursuivis mon US au côté d'Hinda : Après avoir fait le front dans la matinée 
    nous avons en peer-programming toujours rentrée les données avec des reqêtes SQL dans le logiciel DBeaver.</span>

    <h2>Mardi 6 juin 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> A 9h réunion daily du projet CRM. Ce matin avec Hinda nous avons continué notre US en peer-programming 
    sur l'ajout des contacts au projet CRM. J'ai pu mobilisé mes compétences tant en back avec Java que en front avec Angular.</span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> A 14h réunion d'équipe avec l'ensemble des développeurs actifs du projet : Flavio, Hinda, Jeremy et moi.
    Flavio et Jeremy ont pu nous rendre compte des bonnes et mauvaises chose de ce que faisions depuis lundi matin.</span>

    <h2>Mercredi 7 juin 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> A 9h réunion daily du projet CRM. Ensuite j'ai pu avoir un entretien avec Jeremy Crosby qui m' expliqué le 
    fonctionnement de GitKraken ainsi que le principe du pull, push et MR qui sont les principales commandes sur ce logiciel.</span><br>

    <h2>Jeudi 8 juin 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> A 9h réunion daily du projet CRM. Ensuite, j'ai pu approfondir mes connaissances sur les modules en 
    Angular grâce aux cours disponibles sur Udemy. </span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> Cet après-midi, j'ai eu l'opportunité de réaliser mon premier ticket en autonomie. J'ai réussi
     à ajouter le favicon Norsys au projet CRM. En clôture de journée, s'est déroulé le "Jeudi Drinks", un rendez-vous mensuel au deuxième jeudi de chaque 
     mois, célébrant les anniversaires et favorisant la convivialité entre les employés autour d'un verre dans une ambiance chaleureuse.</span>

    <h2>Vendredi 9 juin 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> A 9h réunion daily du projet CRM. Par la suite, j'ai entrepris mon second ticket de manière autonome. 
    Cette tâche consistait à rendre les textes du menu cliquables, étant donné que seule l'icône l'était jusqu'alors. Vous pourrez voir ci-dessous, 
    la capture d'écran de l'US de cette mission avec le logiciel Jira Software. Une fois effectuer cette tâche permettra une navigation plus interactive
     et intuitive pour les utilisateurs.</span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> Au cours de cette après-midi, en compagnie de Flavio, j'ai eu l'opportunité de retravailer cette tâche 
    qui, finalement, se révèle plus complexe que prévu. Par la suite, j'ai revisité certains points de cours sur la plateforme Udemy.</span>
    <img src="img/menuCliquable.png" class="image-cadre">

  </div>
    `;
    journalEntriesContainer.innerHTML = entriesWeek4;
  } else if (selectedWeek === "week5") {
    var entriesWeek5 = `
    <div class="cv-container container">

    <h2>Lundi 12 juin 2023</h2>
    <h3 style="display: inline;"> Matin :</h3><span> À neuf heures, une réunion quotidienne du projet CRM a eu lieu. Par la suite, j'ai rejoint Flavio et Hinda, 
    qui étaient engagés dans une session de programmation en binôme, se concentrant sur l'implémentation et l'affichage des contacts et des compétences. 
    J'ai eu l'opportunité d'observer leur méthodologie de travail ainsi que leur approche de résolution des problèmes de code. </span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> </span>

    <h2>Mardi 13 juin 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> À 9h, j'ai assisté à la réunion quotidienne du projet CRM, puis j'ai enfin eu l'occasion de discuter 
    avec Guillaume, le responsable du développement front-end en CSS, SCSS et Vue.js. Grâce à lui, j'ai pu m'entraîner et trouver la solution à mon user 
    story (US) qui consistait à rendre le texte cliquable. Cela m'a permis de prendre conscience des problèmes auxquels les développeurs peuvent être confrontés
     lorsque des problèmes persistent pendant plusieurs jours.</span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> </span>

    <h2>Mercredi 14 juin 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> A 9h réunion daily du projet CRM.</span><br>

    <h2>Jeudi 15 juin 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> A 9h réunion daily du projet CRM.</span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> Cet après-midi, j'ai rédigé une page sur le GitLab de Norsys à l'attention de toute l'équipe de 
    développement du CRM. En m'appuyant sur la réunion du 30 mai que j'ai pu avoir avec Michael et Hinda, cette page récapitule ce que sont les tests unitaires.
     J'ai réalisé cette tâche en pensant que, étant donné les difficultés que j'ai moi-même rencontrées, les futurs intervenants sur le projet pourront 
     découvrir plus facilement les tests grâce à mon document. Vous pourrez voir ci-dessous, une capture d'écran de cette page.!!!!!!!!!!!!!!!!!!!!!!!!!</span>

    <h2>Vendredi 16 juin 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> A 9h réunion daily du projet CRM.</span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> </span>

  </div>
    `;
    journalEntriesContainer.innerHTML = entriesWeek5;
  } else if (selectedWeek === "week6") {
    var entriesWeek6 = `
    <div class="cv-container container">

    <h2>Lundi 19 juin 2023</h2>
    <h3 style="display: inline;"> Matin :</h3><span> A 9h réunion daily du projet CRM.</span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> </span>

    <h2>Mardi 20 juin 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> A 9h réunion daily du projet CRM.</span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> </span>

    <h2>Mercredi 21 juin 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> A 9h réunion daily du projet CRM.</span><br>

    <h2>Jeudi 22 juin 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> A 9h réunion daily du projet CRM.</span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> </span>

    <h2>Vendredi 23 juin 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span>  A 9h réunion daily du projet CRM.</span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> </span>

  </div>
    `;
    journalEntriesContainer.innerHTML = entriesWeek6;
  }


}

// insertion dom et navigation dans le dom

let div = document.createElement('div');
div.classList.add('top');
div.innerHTML = `<span>Top zone</span>`;
// console.log(header.nextElementSibling);

// fin de la théorie 

/* Menu mobile */

function menuMobile() {
  const btn = document.querySelector('.burger');
  const header = document.querySelector('.header');
  const links = document.querySelectorAll('.navbar a');

  btn.addEventListener('click', () => {
    header.classList.toggle('show-nav');
  });

  links.forEach(link => {
    link.addEventListener('click', () => {
      header.classList.remove('show-nav');
    });
  });
}

menuMobile();

/*chiffre entreprise */

const chiffres = document.querySelectorAll('.numbers span');
const duree = 1000; // Durée de l'animation en millisecondes

function fonduVertical(element) {
  let chiffreInitial = parseInt(element.textContent);
  let chiffreFinal = parseInt(element.textContent);

  const increment = chiffreFinal / (duree / 50); // Incrément pour chaque intervalle de temps (50ms)

  let tempsEcoule = 0;

  function miseAJourChiffre() {
    tempsEcoule += 9;
    let chiffreAffiche = Math.round(increment * (tempsEcoule / 50));

    if (chiffreAffiche <= chiffreFinal) {
      element.textContent = chiffreAffiche;
    } else {
      element.textContent = chiffreFinal;
      clearInterval(animation);
    }
  }

  const animation = setInterval(miseAJourChiffre, 50);
}

chiffres.forEach(chiffre => {
  fonduVertical(chiffre);
});


/* Porfolio */

function tabsFilters() {
  const tabs = document.querySelectorAll('.portfolio-filters a');
  const projets = document.querySelectorAll('.portfolio .card');

  const resetActiveLinks = () => {
    tabs.forEach(elem => {
      elem.classList.remove('active');
    })
  }

  const showProjets = (elem) => {
    console.log(elem);
    projets.forEach(projet => {

      let filter = projet.getAttribute('data-category');

      if (elem === 'all') {
        projet.parentNode.classList.remove('hide');
        return
      }


      filter !== elem ? projet.parentNode.classList.add('hide') : projet.parentNode.classList.remove('hide');

    });
  }

  tabs.forEach(elem => {
    elem.addEventListener('click', (event) => {
      event.preventDefault();
      let filter = elem.getAttribute('data-filter');
      showProjets(filter)
      resetActiveLinks();
      elem.classList.add('active');
    });
  })
}

tabsFilters()

function showProjectDetails() {
  const links = document.querySelectorAll('.card__link');
  const modals = document.querySelectorAll('.modal');
  const btns = document.querySelectorAll('.modal__close');

  const hideModals = () => {
    modals.forEach(modal => {
      modal.classList.remove('show');
    });
  }

  links.forEach(elem => {
    elem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector(`[id=${elem.dataset.id}]`).classList.add('show');
    });
  });

  btns.forEach(btn => {
    btn.addEventListener('click', (event) => {
      hideModals();
    });
  });

}

showProjectDetails();

// effets

const observerIntersectionAnimation = () => {
  const sections = document.querySelectorAll('section');
  const skills = document.querySelectorAll('.skills .bar');

  sections.forEach((section, index) => {
    if (index === 0) return;
    section.style.opacity = "0";
    section.style.transition = "all 1.6s";
  });

  skills.forEach((elem, index) => {

    elem.style.width = "0";
    elem.style.transition = "all 1.6s";
  });

  let sectionObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let elem = entry.target;
        elem.style.opacity = 1;
      }
    });
  });

  sections.forEach(section => {
    sectionObserver.observe(section);
  });

  let skillsObserver = new IntersectionObserver(function (entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        let elem = entry.target;
        elem.style.width = elem.dataset.width + '%';
      }
    });
  });

  skills.forEach(skill => {
    skillsObserver.observe(skill);
  });
}

observerIntersectionAnimation();

/*caroussel*/

// Sélectionner les éléments du carrousel
const carouselContainer = document.querySelector('.carousel-container');
const carouselItems = document.querySelectorAll('.carousel-item');
const prevButton = document.querySelector('.carousel-prev');
const nextButton = document.querySelector('.carousel-next');
const indicators = document.querySelectorAll('.carousel-indicator');

// Variables de suivi
let currentIndex = 0;
let intervalId;

// Fonction pour changer la diapositive
function changeSlide(index) {
  // Mettre à jour l'index de la diapositive active
  currentIndex += index;

  // Vérifier les limites du carrousel
  if (currentIndex < 0) {
    currentIndex = carouselItems.length - 1;
  } else if (currentIndex >= carouselItems.length) {
    currentIndex = 0;
  }

  // Déplacer le conteneur du carrousel pour afficher la diapositive active
  carouselContainer.style.transform = `translateX(${currentIndex * -100}%)`;

  // Mettre à jour l'indicateur actif
  updateIndicator();
}

// Fonction pour mettre à jour l'indicateur actif
function updateIndicator() {
  indicators.forEach((indicator, index) => {
    if (index === currentIndex) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

// Fonction pour démarrer le carrousel automatique
function startCarousel() {
  intervalId = setInterval(() => {
    changeSlide(1);
  }, 6000); // Changer de diapositive toutes les 6 secondes
}

// Fonction pour réinitialiser le carrousel automatique
function resetCarousel() {
  clearInterval(intervalId);
  startCarousel();
}

// Écouteurs d'événements pour les boutons précédent/suivant
prevButton.addEventListener('click', () => {
  changeSlide(-1);
  resetCarousel(); // Réinitialiser le carrousel automatique lors du clic sur les boutons
});
nextButton.addEventListener('click', () => {
  changeSlide(1);
  resetCarousel(); // Réinitialiser le carrousel automatique lors du clic sur les boutons
});

// Écouteurs d'événements pour les indicateurs
indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    const indicatorIndex = Array.from(indicators).indexOf(indicator);
    changeSlide(indicatorIndex - currentIndex);
    resetCarousel(); // Réinitialiser le carrousel automatique lors du clic sur les indicateurs
  });
});

// Écouteur d'événement pour les touches de gauche/droite du clavier
document.addEventListener('keydown', (event) => {
  if (event.key === 'ArrowLeft') {
    changeSlide(-1);
    resetCarousel(); // Réinitialiser le carrousel automatique lors de l'utilisation des touches de gauche/droite du clavier
  } else if (event.key === 'ArrowRight') {
    changeSlide(1);
    resetCarousel(); // Réinitialiser le carrousel automatique lors de l'utilisation des touches de gauche/droite du clavier
  }
});

// Mettre en surbrillance de l'indicateur actif initial
updateIndicator();

// Démarrer le carrousel automatique
startCarousel();


/*PROJET*/

/*presa*/



/*sprint*/

function togglePhoto() {
  var photoDiv = document.getElementById("photo");
  var toggleButton = document.getElementById("toggle-button");

  if (photoDiv.style.display === "none") {
    photoDiv.style.display = "block";
    toggleButton.textContent = "Masquer la photo";
  } else {
    photoDiv.style.display = "none";
    toggleButton.textContent = "Voir la photo";
  }
}

/*test unit*/
