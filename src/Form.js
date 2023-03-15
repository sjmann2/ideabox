import React, { useState } from 'react';

const Form = (props) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleTitleChange = (event) => {
    setTitle(event.currentTarget.value);
  }

  const handleDescriptionChange = (event) => {
    setDescription(event.currentTarget.value);
  }

  const clearInputs = () => {
    setTitle('');
    setDescription('');
  }

  const handleSubmit = (event) => {
    event.preventDefault(); // prevents page from refreshing on form submit
    const newIdea = {
      id: Date.now(), // give our new idea a unique id
      title: title, // give our new idea a title using the title value from state
      description: description // give our new idea a description using the description value from state
    };

    props.addIdea(newIdea);
    clearInputs(); // clear out the input values after our new idea has been added
  }

  return (
    <form>
      <label htmlFor="title">Title</label>
      <input name="title" type="text" placeholder="Title" 
      value={title} onChange={(event) => {
        handleTitleChange(event)}}></input>

      <label htmlFor="description">Description</label>
      <input name="description" type="text"
      placeholder="Description" value={description} onChange={(event) => { handleDescriptionChange(event)}}></input>
      <button type="submit" id="add" onClick={(event) => {handleSubmit(event)}}>Add Idea</button>
      
    </form>
  )
}

export default Form;