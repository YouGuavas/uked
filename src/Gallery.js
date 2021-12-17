function Gallery()  {
  const galleryItems = [{name: 'Soprano', price: '15.99'}, {name: 'Concert', price: '16.99'}, {name: 'Tenor', price: '17.99'}, {name: 'Baritone', price: '18.99'}];
  return(
    <div className='grid grid-cols-2 gap-4 flex-1 p-10 text-2xl font-bold'>
      {galleryItems.map((item, index) => (
          <div className='box' id={item.name} key={index}> 
          <div>{item.name}</div> <div>${item.price}</div> </div>
      ))}
    </div>
  )
}


export default Gallery;