import React, { useState } from 'react';
import './App.css';
import getAllPeople from './people.service';
import { Person } from './person.model';

const App = () => {
  const [people, setPeople] = useState(getAllPeople());
  const emptyPerson: Person = { firstName: '', lastName: '', age: '', gender: '' };
  const [person, setPerson] = useState<Person>(emptyPerson);
  const averageAge: number = Math.round(people.map(p => Number(p.age)).reduce((prev, curr) => prev + curr) / people.length);
  const adults: string[] = people.filter(p => p.age >= 18).map(p => `${p.firstName} ${p.lastName}`);

  const updatePerson = (field: string, value: string): void => {
    setPerson({ ...person, [field]: value });
  }
  /***********************************************************************
    1) Fix the addPerson() method to add a person to the table of people

      **note** you may need to modify code elsewhere in this component
  **********************************************************************/
  const addPerson = () => {
    setPerson(emptyPerson);
    setPeople(people.concat(person))
  }

  const genderPercentage = (gender: string, people: Person[]): string => {
    return (people.filter(p => p.gender === gender).length / people.length * 100).toFixed(2) + "%";
  }

  return (
    <div className="App">
      <div className="section">
        <h1>Add Person</h1>
        <div className="row">
          <div className="column">First Name <input value={person.firstName} onChange={(e) => updatePerson("firstName", e.currentTarget.value)} /></div>
          <div className="column">Last Name <input value={person.lastName} onChange={(e) => updatePerson("lastName", e.currentTarget.value)} /></div>
          <div className="column">Age <input value={person.age} onChange={(e) => updatePerson("age", e.currentTarget.value)} /></div>
          <div className="column">Gender <input value={person.gender} onChange={(e) => updatePerson("gender", e.currentTarget.value)} /></div>
          <div className="column"><button onClick={addPerson}>Add Person</button></div>
        </div>
      </div>
      <div className="section">
        <h1>People</h1>
        {people.map((p: Person, key: number) =>
          <div className="row">
            <div className="column">First Name: {p.firstName} </div>
            <div className="column">Last Name: {p.lastName} </div>
            <div className="column">Age: {p.age} </div>
            <div className="column">Gender: {p.gender} </div>
          </div>
        )}
      </div>
      <div className="section">
        <h1>Stats</h1>
        <div className="stats">
          <div className="row">
            {/***********************************************************************
              2) Add functionality to display the average age
            **********************************************************************/}
            <div className="column">Average age:</div>
            <div className="column">{averageAge}</div>
          </div>
          <div className="row">
            {/***********************************************************************
              3) Add functionality to display the male and female percentages
            **********************************************************************/}
            <div className="column">% Male:</div>
            <div className="column">{genderPercentage("Male", people)}</div>
          </div>
          <div className="row">
            <div className="column">% Female:</div>
            <div className="column">{genderPercentage("Female", people)}</div>
          </div>
          {/***********************************************************************
            4) **BONUS** Add functionality under STATS to display a list of only adults
          **********************************************************************/}
          <div className="row">
            <div className="column">Adults:</div>
            <div className="column">{adults.join(', ')}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
