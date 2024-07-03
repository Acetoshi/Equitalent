import { Component } from "@angular/core";

@Component({
  selector: "app-evaluation",
  standalone: true,
  imports: [],
  templateUrl:'./evaluation.component.html',
  styles: ``,
})
export class EvaluationComponent {
  cvs = [
    {
      id: 1,
      firstname: "Marcel",
      lastname: "Lantier",
      tel: "0234356789",
      mail: "duschnok@gmail.com",
      age: 34,
      experiences: [
        {
          company: "Company A",
          position: "Software Engineer",
          startDate: "2018-01-01",
          endDate: "2020-01-01",
          description: "Developed web applications using React and Node.js.",
        },
        {
          company: "Company B",
          position: "Senior Developer",
          startDate: "2020-02-01",
          endDate: "Present",
          description:
            "Leading a team of developers in creating enterprise solutions.",
        },
      ],
      education: [
        {
          degree: "BSc in Computer Science",
          date: "2010-09-01",
          description:
            "Studied core computer science subjects and participated in various coding competitions.",
        },
      ],
      hardSkills: [
        "JavaScript",
        "Angular",
        "React",
        "Node.js",
        "TypeScript",
        "HTML",
        "CSS",
      ],
      softSkills: ["JavaScript", "sympa"],
      languages: [
        {
          language: "French",
          proficiency: "Native",
        },
        {
          language: "English",
          proficiency: "Fluent",
        },
      ],
      hobbies: [{ name: "basket" }],
    },
    {
      id: 2,
      firstname: "Sophie",
      lastname: "Dupont",
      tel: "0345678910",
      mail: "sophie.dupont@example.com",
      age: 29,
      experiences: [
        {
          company: "Company C",
          position: "Frontend Developer",
          startDate: "2016-03-01",
          endDate: "2019-07-01",
          description:
            "Implemented responsive web designs using HTML, CSS, and JavaScript.",
        },
        {
          company: "Company D",
          position: "Full Stack Developer",
          startDate: "2019-08-01",
          endDate: "Present",
          description:
            "Developing and maintaining web applications using React and Node.js.",
        },
      ],
      education: [
        {
          degree: "MSc in Information Technology",
          date: "2012-09-01",
          description:
            "Specialized in web development and software engineering.",
        },
      ],
      hardSkills: [
        "HTML",
        "CSS",
        "JavaScript",
        "React",
        "Node.js",
        "SQL",
        "Python",
      ],
      softSkills: ["Communication", "Problem-solving", "Teamwork"],
      languages: [
        {
          language: "French",
          proficiency: "Native",
        },
        {
          language: "English",
          proficiency: "Fluent",
        },
        {
          language: "Spanish",
          proficiency: "Intermediate",
        },
      ],
      hobbies: [{ name: "reading" }, { name: "hiking" }],
    },
  ];

  jobDescription = {
    title: "Développeur Web",
    text: `Nous recherchons un Développeur Web talentueux et passionné pour rejoindre notre équipe dynamique. 
  
  ### Description du poste :
  En tant que Développeur Web, vous serez responsable de la conception, du développement et de la maintenance de nos applications web. Vous travaillerez en étroite collaboration avec notre équipe de designers et d'autres développeurs pour créer des solutions innovantes qui répondent aux besoins de nos clients.
  
  ### Responsabilités :
  - Concevoir et développer des applications web en utilisant les technologies les plus récentes.
  - Maintenir et améliorer les fonctionnalités existantes des applications web.
  - Collaborer avec les designers pour créer des interfaces utilisateur intuitives et attractives.
  - Assurer la compatibilité des applications avec les différents navigateurs et appareils.
  - Participer à l'analyse des besoins des utilisateurs et proposer des solutions techniques adaptées.
  - Rédiger de la documentation technique et des guides utilisateurs.
  
  ### Compétences requises :
  - Maîtrise des langages de programmation web tels que HTML, CSS, JavaScript.
  - Expérience avec les frameworks modernes tels qu'Angular, React ou Vue.js.
  - Connaissance des technologies backend telles que Node.js, PHP ou Python.
  - Expérience avec les bases de données relationnelles et non relationnelles (MySQL, MongoDB).
  - Capacité à travailler en équipe et à communiquer efficacement.
  - Capacité à résoudre les problèmes et à proposer des solutions créatives.
  
  ### Qualifications :
  - Diplôme en informatique ou dans un domaine connexe.
  - Minimum de 2 ans d'expérience en développement web.
  - Expérience avec les outils de versionnement de code (Git).
  - Connaissance des principes de conception responsive et mobile-first.
  
  ### Ce que nous offrons :
  - Un environnement de travail stimulant et collaboratif.
  - Des opportunités de développement professionnel et de formation continue.
  - Un salaire compétitif et des avantages sociaux attractifs.
  - Des projets variés et intéressants avec des clients renommés.
  
  Si vous êtes passionné par le développement web et que vous souhaitez rejoindre une entreprise en pleine croissance, n'hésitez pas à nous envoyer votre candidature avec votre CV et une lettre de motivation.
  
  Nous avons hâte de vous rencontrer et de discuter de cette opportunité avec vous !`,
  };
}
