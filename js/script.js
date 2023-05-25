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
    <h3 style="display: inline;"> Matin :</h3><span> Découverte des locaux, de l'entreprise et de
      l'équipe</span><br>
    <h3 style="display: inline;">Après-midi : </h3><span>Rencontre avec Flavio, un stagiaire de seconde année de
      bachelor informatique avec qui je partagerai un projet futur</span>

    <h2>Mardi 16 mai 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span>Rencontre avec Margot, une stagiaire RH qui travaillera
      également avec moi sur un projet futur</span><br>
    <h3 style="display: inline;">Après-midi : </h3><span>Création de mon espace intranet en ligne</span>

    <h2>Mercredi 17 mai 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span>Entretien avec Arnaud ROUSSET, un Product Owner (PO) Informatique qui m'a fait
    découvrir le projet CRM. Réunion de présentation du code de l'éthic' acteur ensuite à 12h.</span>
    <img src="img/ethic.png" class="image-cadre"><img src="img/ethic2.png" class="image-cadre">

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
    comme Git, Intelligi...</span>

    <h2>Mardi 23 mai 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> A 9h réunion daily du projet CRM. Entretient en visioconférence avec Michael GIRY, un developpeur très 
    expérimenté qui m'a expliqué le fonctionnement des applications nécessaire au projet</span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> Premier cours sur Angular via une plateforme en ligne : udemy.</span>

    <h2>Mercredi 24 mai 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> A 9h réunion daily du projet CRM. Puis accueil de Hinda, une nouvelle employée Norsys en tant qu'ingénieure 
    en Java au de l'entreprise. Durant la fin de matinée j'ai continué mes cours sur Udemy avec un language supplémentaire que j'ai découvert : Java.</span><br>

    <h2>Jeudi 25 mai 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> A 9h réunion daily du projet CRM. J'ai ensuite poursuivis mes cours sur Udemy en Angular et Java.</span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> Cet après-midi, j'ai également continué mes cours sur Angular et Java</span>

    <h2>Vendredi 26 mai 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> Je suis toujours mes cours sur Udemy aujourd'hui. Malgrés tout, je suis également le rendez-vous quotidient a 
    9h pour la réunion daily du projet CRM. Cela me permet de garder contact avec le projet car pour le moment je ne code pas ce projet</span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> J'ai une fois de plus continué les cours Udemy en Java et Angular. </span>

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
    <h3 style="display: inline;">Matin : </h3><span> A 9h réunion daily du projet CRM.</span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> </span>

    <h2>Mercredi 31 mai 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> A 9h réunion daily du projet CRM.</span><br>

    <h2>Jeudi 1 juin 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> A 9h réunion daily du projet CRM.</span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> </span>

    <h2>Vendredi 2 juin 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> A 9h réunion daily du projet CRM.</span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> </span>

  </div>
    `;
    journalEntriesContainer.innerHTML = entriesWeek3;
  } else if (selectedWeek === "week4") {
    var entriesWeek4 = `
    <div class="cv-container container">

    <h2>Lundi 5 juin 2023</h2>
    <h3 style="display: inline;"> Matin :</h3><span>  A 9h réunion daily du projet CRM.</span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> </span>

    <h2>Mardi 6 juin 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> A 9h réunion daily du projet CRM.</span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> </span>

    <h2>Mercredi 7 juin 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> A 9h réunion daily du projet CRM.</span><br>

    <h2>Jeudi 8 juin 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> A 9h réunion daily du projet CRM.</span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> </span>

    <h2>Vendredi 9 juin 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> A 9h réunion daily du projet CRM.</span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> </span>

  </div>
    `;
    journalEntriesContainer.innerHTML = entriesWeek4;
  } else if (selectedWeek === "week5") {
    var entriesWeek5 = `
    <div class="cv-container container">

    <h2>Lundi 12 juin 2023</h2>
    <h3 style="display: inline;"> Matin :</h3><span> A 9h réunion daily du projet CRM.</span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> </span>

    <h2>Mardi 13 juin 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> A 9h réunion daily du projet CRM.</span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> </span>

    <h2>Mercredi 14 juin 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> A 9h réunion daily du projet CRM.</span><br>

    <h2>Jeudi 15 juin 2023</h2>
    <h3 style="display: inline;">Matin : </h3><span> A 9h réunion daily du projet CRM.</span><br>
    <h3 style="display: inline;">Après-midi : </h3><span> </span>

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


/*projet*/

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
