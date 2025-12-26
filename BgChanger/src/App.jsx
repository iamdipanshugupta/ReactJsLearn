import { useState } from "react"


const App = () => {

  const [ color , setColor] = useState("")
  return (
    <div className="w-full h-screen  duration-200 " style={{backgroundColor:color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 bg-white px-3 py-2 rounded-3xl">
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"red"}} onClick={() => setColor("red")}>Red</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Black"}} 
          onClick={() => setColor("black")}
          >Black</button>
          <button className="outline-none px-4 py-1  rounded-full text-white shadow-lg" style={{backgroundColor:"gray"}}
          onClick={() => setColor("Gray")}>Gray</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Hotpink"}} onClick={() => setColor("HotPink")}>Pink</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Green"}}
          onClick={() => setColor("Green")}>Green</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"Blue"}} onClick={() => setColor("Blue")}>Blue</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"lavender"}}onClick={() => setColor("Lavender")}>Lavender</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"teal"}} onClick={() => setColor("Teal")}>Teal</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"yellow"}} onClick={() => setColor("Yellow")}>Yellow</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"orange"}} onClick={() => setColor("Orange")}>Orange</button>
          <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg" style={{backgroundColor:"indigo"}} onClick={() => setColor("Indigo")}>Indigo</button>
          
        </div>
      </div>
    </div>
  )
}

export default App
