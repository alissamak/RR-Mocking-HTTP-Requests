import React from 'react'
import './App.css'
import { useState, useEffect } from 'react';

function App() {
  const [gitHubName, setGitHubName] = useState('');
  const [gitHubURL, setGitHubURL] = useState('');
  const [gitHubImageURL, setGitHubImageURL] = useState('');

  useEffect(()=>{
    fetch('https://api.github.com/users/alissamak')
    .then(res => res.json())
    .then(data => {
      setGitHubName(data.name)
      setGitHubURL(data.html_url)
      setGitHubImageURL(data.avatar_url)
    })
  }, [])

  return (
    <div className="App">
      <h1>Github Profile Info:</h1>
      <h2>{gitHubName}</h2>
      <a href={gitHubURL}><button>Link to GitHub Profile</button></a>
      <div className='pt-5'>
        <img src={gitHubImageURL} alt='Github profile image' width='200px' height='200px'></img>
      </div>
    </div>
  );
}

export default App;
