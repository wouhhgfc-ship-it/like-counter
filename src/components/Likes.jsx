import { useState } from 'react'
import '../App.css'

function Likes() {
  const [likes, setlikes] = useState(0)
  const isEven = likes % 2 === 0;
  const likeWord = likes === 1 ? "like" : "likes";

  function increaseLikes() {

    setlikes(likes + 1)
  }
  function removeLike() {
    setlikes(Math.max(0, likes - 1))
  }
  function restart() {
    setlikes(likes - likes)
  }
  return (
    <>
      <section className="flex items-center justify-center bg-[#F4F2EC] min-h-screen ">

        <section className=" w-full max-w-md p-5 rounded-3xl bg-[#FFFFFF] text-[#1B1B1A]">
          <div className="flex flex-row items-center justify-between border-b">
            <div className="flex items-center gap-3">
              <img className='w-10' src="/avatar.png" alt="" />

              <span>
                <h1 className="text-2xl font-bold ">Miracle</h1>
                <p> @miracle</p>
              </span>
            </div>
            <div className={` inline-flex items-center gap-2  rounded-full px-3  py-1 transition-colors ${isEven ? "bg-[#E1F5EE] text-[#085041]" : "bg-[#FAEEDA] text-[#633806]"}`}>
              <span className={`  h-2 w-2 rounded-full transition-colors ${isEven ? "bg-[#1D9E75]" : "bg-[#BA7517]"}`}></span>
              <span> {isEven ? "Even number" : "Odd number"}</span> </div>
          </div>
          <section className='flex flex-col items-center justify-center'>
            <div  >
              <div> {likes === 0 ? <img className='w-2xs' src="/face.png" alt="" /> : <h2 className='font-light text-2xl '>Miracle has</h2>}   </div>

              <span className='font-bold text-3xl  text-center '> {likes === 0 ? <h2> Miracle has 0 {likeWord} </h2> : ""}</span>
              <h2 className="font-bold text-6xl text-center"> { likes === 0? "": likes }</h2>


              <h1 className="font-medium text-2xl text-center">{likes === 0 ? "add a like " :  likeWord }</h1></div>
            <div className="flex flex-col gap-3 ">
              <button onClick={increaseLikes} className="h-10 w-full text-white rounded-full bg-[#1B1B1A] cursor-pointer p-3 ">+ Add a like</button>
              <button
                onClick={removeLike}
                disabled={likes === 0}
                className=" h-10 w-full bg rounded-full bg-[#F4F2EC] border cursor-pointer p-3 disabled:cursor-not-allowed disabled:bg-[#EFEDE6] disabled:text-[#9A978C] "
              >
                - Remove a like
              </button>
              <button onClick={restart} className="text-[#185FA5] ">  Restart</button>

            </div>

          </section>
        </section>
      </section>

    </>
  )
}

export default Likes