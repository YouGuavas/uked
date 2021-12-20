function Gallery()  {
  const galleryItems = [{name: 'Soprano', price: '15.99'}, {name: 'Concert', price: '16.99'}, {name: 'Tenor', price: '17.99'}, {name: 'Baritone', price: '18.99'}];
  return(
    <div className='md:col-span-9 p-4 grid md:grid-cols-2 gap-4'>
      {galleryItems.map((item, index) => (
          <div className='box' id={item.name} key={index}> 
          <div className='font-bold text-2xl'>{item.name}</div> <div>${item.price}</div> </div>
      ))}
    </div>
  )
}


export default Gallery;