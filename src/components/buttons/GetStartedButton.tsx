import {useNavigate} from 'react-router-dom'

export default function GetStartedButton() {
  const navigate = useNavigate();

  const handleClickContact = () =>{
    navigate("/contact")
  }
  return (
    <button className="w-full max-w-[10rem] lg:w-[8.5rem]  bg-black py-3 px-4 text-white rounded-lg text-xl" onClick={handleClickContact}>Get Started</button>
  )
}
