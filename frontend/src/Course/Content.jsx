import React from 'react'
import List from '../../public/list.json'
import Cards from '../components/Cards'
import { Link } from 'react-router-dom'
function Content() {
  return (
    <>
    <div className='max-w-screen-l container mx-auto '>
      <div className='mt-24 items-center justify-center text-center '>
      <h1 className='mx-auto text-5xl font-bold mt-24 mb-5 text-pink-500'>We are delighted to have you here ;)</h1>
      <p className='mx-auto text-xl  italic' >Lorem ipsm, dolor sit amet consectetur adipisicing elit. Explicabo laboriosam repudiandae iusto veritatis officia, architecto illum vero? Rerum, cupiditate impedit accusamus maxime excepturi molestias vero sit aliquid porro, fuga sequi culpa delectus consequuntur. Inventore dolor doloremque, quo delectus quam possimus nobis, aperiam at laudantium molestias error necessitatibus? Numquam, minus esse?</p>
      <Link to ='/' >
      <button className='bg-pink-600 rounded-xl w-20 px-4 py-2 text-center text-lg font-semibold hover:bg-pink-700 mt-5'>Back</button>
      </Link>
      </div>
     

    </div>
    <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
        {List.map((item)=>(
          <Cards key={item.id} item={item} />
        ))}
        
    </div>
    </>
  )
}

export default Content
