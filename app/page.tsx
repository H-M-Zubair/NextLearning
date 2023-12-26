
import Link from "next/link"
export default function Home() {
  return (
    <div>
       <div className=" items-center ">
  <h1 className=" flex p-10 justify-center font-bold text-4xl ">Welcome to the world of ECOMMERCE</h1>
<div className="flex justify-center">
<Link className='bg-gray-400 text-3xl rounded-md p-2 text-white hover:scale-105 duration-200 hover:bg-blue-600 ' href="productlist">View Products</Link>
</div>
  </div>
    </div>
  )
}
