import React from 'react';




function GifGrid({ data }: any) { // props used to be GifGridProps
  return (
    <div>
        {
            //JSON.stringify(data)
        }
      {
      
        data.data.map((gif: any) => (
            <div key={gif.id}>
            <img src={gif.images.downsized.url} alt={gif.title} />
            <figcaption>{gif.title}</figcaption>
            </div>
        ))
      
      }
    </div>
  );
}

export default GifGrid;
