import React,{useState} from 'react'
import Heading from '../components/Heading.jsx'
import Input from '../components/Input.jsx'
import Button from '../components/Button.jsx'
import { useNavigate } from 'react-router-dom'
import useSignin from '../hooks/useSignin.jsx'


const Signin = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()

    const {signin} = useSignin()

    const onSignin = async () =>{
        await signin(username,password)
    }

  return (
    <div className='flex flex-col items-center justify-center mx-auto min-w-96 w-[30%]'>
        <div className='justify-center w-full bg-gray-400 bg-clip-padding backdrop-filter 
        backdrop-blur-lg bg-opacity-0 shadow-md '>
            <Heading text='Login ChatApp'/>
            <div className='flex flex-col items-start'>
                <div className='text-lg text-white mx-[9%]'>Email</div>
                <Input onChange={(e:any) => setUsername(e.target.value)} placeholder='Enter email' type="text"/>
            </div>
            <div className='flex flex-col items-start'>
                <div className='text-lg text-white mx-[9%]'>Password</div>
                <Input onChange={(e:any) => setPassword(e.target.value)} placeholder='Enter password' type="password"/>
            </div>
            <div className='flex flex-col justify-start gap-2 mt-4'>
                <div className='text-md flex justify-start mx-[12%] text-white hover:text-blue-500 cursor-pointer font ' 
                onClick={()=>{navigate('/signup')}}>
                    Don't have an account
                </div>
                <Button text='Login' onClick={onSignin}/>
            </div>
            
        </div>
    </div>
  )
}

export default Signin