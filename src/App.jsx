import { useState } from "react";
import "./App.css";
import Header from "./compononts/header/Header";
import Jobs from "./compononts/jobs/Jobs";
import Footer from "./compononts/Footer/Footer";
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header title="The job board"></Header>
      <Jobs
        job1Title="Full Time Sales Associate-Sydeney Boutique"
        job1Color="red"
        job1ContractType="CDI"
        job1Country="Australie"
        job1City="Sydney"
        job2Title="Agent de Sécurité-Pantin"
        job2Color="green"
        job2ContractType="CDI"
        job2Country="France"
        job2City="Pantin"
        job3Title="Responsable d'Atelier (H/F)"
        job3Color="yellow"
        job3ContractType="CDD"
        job3Country="France"
        job3City="Paris"
        job4Title="Chef de Projets"
        job4Color="blue"
        job4ContractType="CDD"
        job4Country="France"
        job4City="Paris"
        job5Title="Développeur React.js"
        job5Color="pink"
        job5ContractType="CDI"
        job5Country="France"
        job5City="Paris"
        job6Title="Sales Associate Stockholm"
        job6Color="red"
        job6ContractType="CDI"
        job6Country="Suède"
        job6City="Stockholm"
        job7Title="Vendeur/se-Crans  Montana"
        job7Color="green"
        job7ContractType="CDI"
        job7Country="Suisse"
        job7City="Crans-Montana"
        job8Title="CRM & Data Quality Analyst"
        job8Color="yellow"
        job8ContractType="CDI"
        job8Country="USA"
        job8City="New York"
        job9Title="Infirmier(H/F)"
        job9Color="blue"
        job9ContractType="CDI"
        job9Country="France"
        job9City="Pantin"
      ></Jobs>
      <Footer
        text={
          <>
            Made with <span>React</span> at <span>Le Reacteur</span> by
            <span>Nono</span>
          </>
        }
      ></Footer>
    </>
  );
}

export default App;
