import { useState } from "react"

const App = () => {

  const [title, settitle] = useState('')
  const [description, setdescription] = useState('')
  const [task, settask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault()

    let copyTask = [...task]
    copyTask.push({ title, description })
    settask(copyTask)

    console.log(copyTask)

    settitle('')
    setdescription('')
  }

  const inputTitle = (e) => {
    settitle(e.target.value)
  }

  const inputDescription = (e) => {
    setdescription(e.target.value)
  }

  const delBtn = (idx) => {
    let copytask = [...task]
    copytask.splice(idx,1)
    settask(copytask)
  }



  return (
    <div className='min-h-screen bg-amber-200 primary'>
      <form onSubmit={(e) => {
        submitHandler(e)
      }} className='flex justify-between p-10 flex-wrap gap-10'>
        <div className='flex flex-col min-w-[50%] max-[800px]:min-w-full '>


          {/* input Title */}
          <input required type="text" placeholder='Enter Notes Heading' value={title} onChange={(e) => {
            inputTitle(e)
          }} className='text-neutral px-5 py-2 border-2 border-[#000000b8] rounded mb-5 outline-none text-2xl' />


          {/* textarea for description */}
          <textarea required type="text" value={description} onChange={(e) => {
            inputDescription(e)
          }} placeholder='Write Details' className='px-5 pb-20 pt-5 text-neutral border-2 border-[#000000b8] rounded outline-none text-2xl' />


          <button className='mt-5 px-5 py-2 border bg-[#000000a7] text-white rounded-full cursor-pointer text-2xl active:bg-gray-700 active:scale-95'>Add Note</button>
        </div>
        <img src="https://cdn-icons-png.flaticon.com/512/87/87244.png" className="h-80 -mt-5 max-[800px]:hidden" alt="" />
      </form>


      <div className="flex flex-col items-center gap-10 p-10 border-t-2">
        <h1 className="text-neutral-600 text-6xl ">Your Notes</h1>
        <div className="flex gap-10 flex-wrap justify-center overflow-auto h-90 max-w-4xl scrollbar-none">

          {task.map(function (e, idx) {
            return <div key={idx} className="h-90 w-100  rounded-2xl bg-amber-100 text-black p-10 flex flex-col justify-between">
              <div className="wrap-anywhere"><h3 className="text-xl font-bold mb-5">{e.title}</h3>
              <p>{e.description}</p></div>
              <button onClick={() =>{
                delBtn(idx)
              }} className="btn bg-[#bb2b2b] text-white border-[#aa0c0c] w-full">
                
                Delete
              </button>

            </div>
          })}
        </div>
      </div>
      <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
  <aside>
    <p>Copyright © {new Date().getFullYear()} - by ADITYA</p> 
  </aside>
</footer>
    </div>

  )
}

export default App
