import { useEffect, useState } from "react"

export const Search = ({ setCity }) => {
  const [input, setInput] = useState(null)
  const getSelectedCity = localStorage.getItem("city")
  useEffect(() => {
    if(input === null || input === '') {
      setCity(getSelectedCity)
    }
  } , [input])

  const handleForm = e => {
    e.preventDefault()
    setCity(input)
  }
  return (
    <form className="flex justify-center my-4" onSubmit={e => handleForm(e)}>
      <input type="text"  className=" block bg-transparent align-center text-black focus:border-gray-400 border border-transparent focus:outline-none shadow-xl h-10 w-1/2 px-2 dark:bg-darker-green  dark:boder-none dark:text-white rounded-full placeholder:text-gray-500 dark:focus:border-dark-fg" id="city-input" placeholder="Search for a city..."  onChange={e => setInput(e.target.value)}/>
    </form>
  )
}
