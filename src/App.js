import React, { useState } from 'react';
// important useState -- React Hook
import './App.css';
import Ideas from './Ideas';
import Form from './Form';

const initialIdeas = [
  { id: 1, title: 'Sweaters for pugs', description: 'Sweaters but only for pugs to wear' },
  { id: 2, title: 'Salt Water Taffy', description: 'The ocean is cool but what if it was candy?' },
  { id: 3, title: 'Flying pigs', description: 'Would allow many things to finally come true' }   
];


const App = () => {
  const [ideas, setIdeas] = useState(initialIdeas);

  const addIdea = (idea) => {
    let newIdeaList = ideas.concat([idea]);
    setIdeas(newIdeaList);
  }

  const deleteIdea = (id) => {
    let newIdeaList = ideas.filter(idea => idea.id !== id);
    setIdeas(newIdeaList);
  };

  return (
    <main className="App">
      <h1>IdeaBox</h1>
      <Ideas ideas={ideas} deleteIdea={deleteIdea}/>
      <Form addIdea={addIdea}/>
    </main>
  )
}

export default App;
