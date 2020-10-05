import React from 'react';
import './App.css';
import Posts from './Posts';

function App() {
  return (
    <div className="App">
      <div className="app__header">
        <img 
        className="app__headerImage"
        src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png" alt="Insta Logo" />
      </div>
      <Posts username="Chintu" caption="This is great" imageUrl="https://images2.alphacoders.com/910/thumb-350-910289.jpg"/>
      <Posts username="Another" caption="Nice" imageUrl="https://images6.alphacoders.com/639/thumb-1920-639813.jpg"/>
      <Posts username="Suhel" caption="Looks great" imageUrl="https://www.comicsense.xyz/image/cache/catalog/Blog_images/4_asta/Asta_Demon_featured_image_comicsense-335x200h.jpg"/>
    </div>
  );
}

export default App;
