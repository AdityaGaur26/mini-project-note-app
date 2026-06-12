import React from 'react'

const App = () => {
  return (
    <div className='h-screen bg-amber-100 '>
      <form className='flex justify-between p-10 flex-wrap gap-10'>
        <div className='flex flex-col min-w-[50%] max-[800px]:min-w-full '>
        <input type="text" placeholder='Enter Notes Heading' className='px-5 py-2 border-2 border-amber-50 rounded mb-5 outline-none text-2xl'/>
        <textarea type="text" placeholder='Write Details' className='px-5 pb-20 pt-5 border-2 border-amber-50 rounded outline-none text-2xl'/>
        <button className='mt-5 px-5 py-2 border bg-[#000000b5] text-white rounded-full cursor-pointer text-2xl'>Add Note</button>
        </div>
        <img src="https://cdn-icons-png.flaticon.com/512/87/87244.png" className="h-80 -mt-5 max-[800px]:hidden" alt="" />
      </form>
    </div>
  )
}

export default App