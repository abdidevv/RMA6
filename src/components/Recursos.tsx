import { useState } from 'react'
import './Recursos.css'

interface Recursos {
    id: string
  }

const getInfo = () => [
    {
      id: "1",
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ejusmod tempor incididunt ",
      thumbnail: "/placeholder.svg?height-200&width=300",
      tag: "Presentación"
    },

    {
      id: "2",
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ejusmod tempor incididunt ",
      thumbnail: "/placeholder.svg?height-200&width=300",
      tag: "Articulo"
    },

    {
      id: "3",
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ejusmod tempor incididunt ",
      thumbnail: "/placeholder.svg?height-200&width=300",
      tag: "Libro"
    },

    {
      id: "4",
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ejusmod tempor incididunt ",
      thumbnail: "/placeholder.svg?height-200&width=300",
      tag: "Presentación"
    },

    {
      id: "5",
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ejusmod tempor incididunt ",
      thumbnail: "/placeholder.svg?height-200&width=300",
      tag: "Libro"
    },

    {
      id: "6",
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ejusmod tempor incididunt ", 
      thumbnail: "/placeholder.svg?height-200&width=300",
      tag: "Articulo"
    },

    {
      id: "7",
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ejusmod tempor incididunt ", 
      thumbnail: "/placeholder.svg?height-200&width=300",
      tag: "Presentacion"
    },

    {
      id: "8",
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ejusmod tempor incididunt ", 
      thumbnail: "/placeholder.svg?height-200&width=300",
      tag: "Libro"
    },

    {
      id: "9",
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ejusmod tempor incididunt ", 
      thumbnail: "/placeholder.svg?height-200&width=300",
      tag: "Articulo"
    },

    {
      id: "10",
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ejusmod tempor incididunt ", 
      thumbnail: "/placeholder.svg?height-200&width=300",
      tag: "Presentacion"
    },


    {
      id: "6",
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ejusmod tempor incididunt ", 
      thumbnail: "/placeholder.svg?height-200&width=300",
      tag: "Libro"
    },

    {
      id: "6",
      title: "Lorem ipsum dolor",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do ejusmod tempor incididunt ", 
      thumbnail: "/placeholder.svg?height-200&width=300",
      tag: "Articulo"
    },
 ];

 function Recursos({ id }: { id: string }): JSX.Element {
    const [info, setInfo] = useState(getInfo());
    const [selected, setSelected] = useState<string | null>(null);
  
    const handleCheckboxChange = (id: string) => {
      setSelected(id);
    };

  return (
    <>
      <div className='principal'>
      <div className='container-filtros'>
        <p className="text-docu">Recursos</p>
        <div className="checkbox-cont">

          <label className="">
            <input
              type="checkbox"
              checked={selected === "PRESENTACIONES"}
              onChange={() => handleCheckboxChange("PRESENTACIONES")}
              className="w-4 h-4"
              style={{ accentColor: selected === "PRESENTACIONES" ? "#FF2C2C" : "" }}
            />
            <span className='text-box'>Presentaciones</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selected === "LIBROS"}
              onChange={() => handleCheckboxChange("LIBROS")}
              className="w-4 h-4"
              style={{ accentColor: selected === "LIBROS" ? "#FF2C2C" : "" }}
            />
            <span className='text-box'>Libros</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={selected === "ARTICULOS"}
              onChange={() => handleCheckboxChange("ARTICULOS")}
              className="w-4 h-4"
              style={{ accentColor: selected === "ARTICULOS" ? "#FF2C2C" : "" }}
            />
            <span className='text-box'>Articulos</span>
          </label>

        </div>

      </div>
      
      <div className='document-grid-container'>
      <div className='document-grid'>
        {info.map(item => (
          <div key={item.id} className="card">
            <div className='thumbnail-container'>
              <img
                src={item.thumbnail}
                alt={item.title}
                className='thumbnail'
              />
              <div className='content'></div>
              <h2 className='document-title'>{item.title}</h2>
              <p className='document-description'>{item.description}</p>
              <button className='btn btn-white'>{item.tag}</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
}

export default Recursos

