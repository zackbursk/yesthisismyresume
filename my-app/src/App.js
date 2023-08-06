// This is the main file of the frontend. It contains the form for uploading the image and the submit button.
import './App.css';
import React from 'react';
import { useState } from 'react';
import { Button } from 'flowbite-react';

function App() {
  const [image, setImage] = useState({ preview: '', data: '' })
  const [status, setStatus] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    let formData = new FormData()
    formData.append('file', image.data)
    const response = await fetch('http://localhost:5000/image', {
      method: 'POST',
      body: formData,
    })
    if (response) setStatus(response.statusText)
  }

  const handleFileChange = (e) => {
    const img = {
      preview: URL.createObjectURL(e.target.files[0]),
      data: e.target.files[0],
    }
    setImage(img)
  }
  return (
    
    <div className="App">
      <header className="App-header">
      {image.preview && <img src={image.preview} width='100' height='100' />}
        <form onSubmit={handleSubmit}>
        <label>
        Upload file: 
        <input type="file" style={{}} onChange={handleFileChange}/>
        </label>
      <Button type='submit' color="dark" size="sm" rounded shadow pill disabled={!image.data}>
        <p>
          Submit
        </p>
      </Button>
      </form>
      </header>
    </div>
  );
}

export default App;
