import './App.css';
import TeamCards from './components/team';

import teamMemberOne from "../src/assets/images/team1.png";
import teamMemberTwo from "../src/assets/images/team2.png";
import teamMemberThree from "../src/assets/images/team3.png";

export const teamNotesData = [
    {
      id: 1,
      name: "Shekhar Shalini",
      designation: "Business Associate",
      message: "Welcome to the team! So excited for you to be here :) ",
      image: teamMemberOne,
    },
    {
      id: 2,
      name: "Anshul Mishra",
      designation: "Co-Founder",
      message: "You totally crushed my interview - I couldn’t be more excited to have you on the team.     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias quibusdam eos ad! Autem, modi perspiciatis beatae minus quia quibusdam quam nulla mollitia rerum ut illo, facere suscipit. Id, ut quo.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias quibusdam eos ad! Autem, modi perspiciatis beatae minus quia quibusdam quam nulla mollitia rerum ut illo, facere suscipit. Id, ut quo.",
      image: teamMemberTwo,
    },
    {
      id: 3,
      name: "Anurag Dixit",
      designation: "Co-founder",
      message: "You totally crushed my interview - I couldn’t be more excited to have you on the team.     Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias quibusdam eos ad! Autem, modi perspiciatis beatae minus quia quibusdam quam nulla mollitia rerum ut illo, facere suscipit. Id, ut quo.Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias quibusdam eos ad! Autem, modi perspiciatis beatae minus quia quibusdam quam nulla mollitia rerum ut illo, facere suscipit. Id, ut quo.",
      image: teamMemberThree,
    },
  ];

function App() {
  
  return (
    <TeamCards employeeMessages={teamNotesData}/>
  );
}

export default App;
