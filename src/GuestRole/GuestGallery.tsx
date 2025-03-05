import img from '../assets/hero.svg'




interface GuestGalleryProps {
  limit?: number; 
}

const Gallery:React.FC<GuestGalleryProps> = ({limit}) => {
    const galleryItems = [
      {
        id: 1,
        title: 'Educational Portal',
        category: 'Events',
        image: img
      },
      {
        id: 2,
        title: 'Educational Portal',
        category: 'Events',
        image: img
      },
      {
        id: 3,
        title: 'Educational Portal',
        category: 'Events',
        image: img
      }, 
      {
        id: 4,
        title: 'Educational Portal',
        category: 'Events',
        image: img
      },
      {
        id: 5,
        title: 'Educational Portal',
        category: 'Events',
        image: img
      },
      {
        id: 6,
        title: 'Educational Portal',
        category: 'Events',
        image: img
      },
      {
        id: 7,
        title: 'Educational Portal',
        category: 'Events',
        image: img
      },
      {
        id: 8,
        title: 'Educational Portal',
        category: 'Events',
        image: img
      },
      {
        id: 9,
        title: 'Educational Portal',
        category: 'Events',
        image: img
      },
     
    ];



  const displayedGallery = limit ? galleryItems.slice(0, limit) : galleryItems;

  
    return (
      <div className="w-full pt-40 px-4 md:px-0 container mx-auto  ">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">Gallery</h2>
          <button className="text-orange-400 hover:text-orange-500">Show all</button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedGallery.map((item) => (
            <div key={item.id} className=" bg-gray-100 p-4 rounded-xl ">
              <img 
                src={item.image}
                alt={item.title}
                className="w-full h-[280px] aspect-square object-cover rounded-2xl"
              />
              <div className=" rounded-b-lg mt-3">
                <h3 className=" font-medium">{item.title}</h3>
                <p className=" font-medium text-sm">{item.category}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export { Gallery };