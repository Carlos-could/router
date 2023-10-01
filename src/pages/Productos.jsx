import { Link } from "react-router-dom"


const productos = [
  {
    id: "001",
    name: "PC"
  },
  {
    id: "002",
    name: "Laptop"
  },

]
const Productos = () => {
  return (
    <div>
      <div>
        {productos.map((producto, i) => (

          <div key = {i}>
          {/* <Link to ={`/productos/${producto.id}`}>{producto.name}</Link> */}
          <a href ={`/productos/${producto.id}`} target="_blank">{producto.name}</a>
          </div>
        ))
        }

      </div>
    </div>
  )
}

export default Productos