import "./style.css";
import Job from "../job/Job";

const Jobs = ({
  job1Title,
  job1Color,
  job1ContractType,
  job1Country,
  job1City,
  job2Title,
  job2Color,
  job2ContractType,
  job2Country,
  job2City,
  job3Title,
  job3Color,
  job3ContractType,
  job3Country,
  job3City,
  job4Title,
  job4Color,
  job4ContractType,
  job4Country,
  job4City,
  job5Title,
  job5Color,
  job5ContractType,
  job5Country,
  job5City,
  job6Title,
  job6Color,
  job6ContractType,
  job6Country,
  job6City,
  job7Title,
  job7Color,
  job7ContractType,
  job7Country,
  job7City,
  job8Title,
  job8Color,
  job8ContractType,
  job8Country,
  job8City,
  job9Title,
  job9Color,
  job9ContractType,
  job9Country,
  job9City,
}) => {
  return (
    <div className="container">
      <Job
        title={job1Title}
        color={job1Color}
        contractType={job1ContractType}
        city={job1City}
        country={job1Country}
      ></Job>
      <Job
        title={job2Title}
        color={job2Color}
        contractType={job2ContractType}
        city={job2City}
        country={job2Country}
      ></Job>
      <Job
        title={job3Title}
        color={job3Color}
        contractType={job3ContractType}
        city={job3City}
        country={job3Country}
      ></Job>
      <Job
        title={job4Title}
        color={job4Color}
        contractType={job4ContractType}
        city={job4City}
        country={job4Country}
      ></Job>
      <Job
        title={job5Title}
        color={job5Color}
        contractType={job5ContractType}
        city={job5City}
        country={job5Country}
      ></Job>
      <Job
        title={job6Title}
        color={job6Color}
        contractType={job6ContractType}
        city={job6City}
        country={job6Country}
      ></Job>
      <Job
        title={job7Title}
        color={job7Color}
        contractType={job7ContractType}
        city={job7City}
        country={job7Country}
      ></Job>
      <Job
        title={job8Title}
        color={job8Color}
        contractType={job8ContractType}
        city={job8City}
        country={job8Country}
      ></Job>
      <Job
        title={job9Title}
        color={job9Color}
        contractType={job9ContractType}
        city={job9City}
        country={job9Country}
      ></Job>
    </div>
  );
};
export default Jobs;
