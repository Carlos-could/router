import { useParams } from "react-router-dom"

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

const ProductoDetail = () => {

  let {productID} = useParams()

  let productoSelect = productos.find(product => product.id === productID)

  console.log(productoSelect)
  
  return (
    <div>
        <h1>{productoSelect.id}</h1>
        <h1>{productoSelect.name}</h1>



    </div>
  )
}

export default ProductoDetail