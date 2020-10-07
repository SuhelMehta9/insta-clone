import React, { useState, useEffect } from 'react';
import './App.css';
import Posts from './Posts';
import { db } from './firebase'

function App() {

 const [posts, setPosts] = useState([]);
 
 useEffect(() => {
   db.collection('posts').onSnapshot(snapshot => {
     setPosts(snapshot.docs.map(doc => doc.data()));
   })
   
 }, []);

  return (
    <div className="App">
      <div className="app__header">
        <img 
        className="app__headerImage"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="Insta Logo" />
      </div>
      {
        posts.map((post) => (
          <Posts username={post.username} caption={post.caption} imageUrl={post.imageUrl}/>
        ))
            }
    </div>
  );
}

export default App;
