import React from "react";

class Gallery extends React.Component {
  constructor(props){
    super(props);
  }
  render() {
  const galleryItems = ['Soprano', 'Concert', 'Tenor', 'Baritone'];
  return(
    <div>
      {galleryItems.map((item) => (
        <div>
          {item}
        </div>
      ))}
    </div>
  )
  }
}


export default Gallery;