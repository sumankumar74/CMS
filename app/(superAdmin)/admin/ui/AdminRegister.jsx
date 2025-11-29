import Link from "next/link"

const AdminRegister = ({handleSubmit}) => {

   
    
  return (
    <div className='Admin flex justify-center items-center w-full p-40 flex-col shadow-2xl  rounded-xl '>
           
            <div className='border shadow-xl p-10 w-1/2 rounded-xl'>
                <form    action={handleSubmit}>
                <h1 className='text-white text-3xl mb-5 font-serif font-bold text-center'>Create an Admin Account</h1>
                    <div className='flex flex-col mb-3'>
                        <label htmlFor='username' className='font-semibold text-2xl font-serif' >Email/Username</label>
                        <input type='text' name="username" placeholder='Enter Email / username' className='px-3 py-2  rounded-lg border' />
                    </div>
                    <div className='flex flex-col mb-3'>
                        <label htmlFor='password' className=' font-semibold text-2xl font-serif' >Password</label>
                        <input type='password' name="password" placeholder='Enter Password' className='px-3 py-2 rounded-lg border' />
                    </div>
                    <div className='flex justify-center items-center bg-gradient-to-r from-black via-green-700 to-rose-600  rounded-3xl font-serif hover:scale-105 duration-300 cursor-pointer'>
                        <button type="submit" className=' py-2 text-white font-sans text-3xl '>REGISTER</button>
                    </div>
                     <div className='flex justify-center items-center shadow-xl mt-2 p-2  rounded-3xl font-serif hover:scale-105 duration-300 cursor-pointer'>
                       <Link href={'/admin/login'} className="text-black font-sans text-xl mt-3 hover:text-gray-800 ">Already have an account? Login</Link>
                    </div>
                </form>
            </div>
        </div>
  )
}

export default AdminRegister