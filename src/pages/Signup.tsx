import { useState } from "react";
import SignUp from '/assets/images/dl.beatsnoop.jpeg';
import Google from '/assets/icons/Google.svg';
const Signup = () => {
    const [state, setState] = useState('Sign Up')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const toggleState = async () => {

        setState(state === 'Sign Up' ? 'Log In' : 'Sign Up');

    };
    return (
        <div className="py-6 flex  gap-20 text-center">
            <img src={SignUp} className="w-[690px] h-[500px]" />
            <div className={`flex flex-col gap-4 w-72 ${state == 'Sign Up' ? "mt-9" : "mt-20"}`}>
                <div className="text-start">
                    <h1 className="text-3xl font-semibold">{state === 'Sign Up' ? "Create an Account" : "Log in to Exclusive"}</h1>
                    <p className="text-xs mt-2 font-medium">Enter your details below</p>
                </div>
                <form className="flex flex-col gap-5 mt-5">
                    {state === 'Sign Up' && <div className="w-full">
                        <input type="text" placeholder="Name" className="mt-1 focus:outline-0  w-full text-sm pb-2 placeholder-[#A0A3BD] border-b border-b-[#A0A3BD] " onChange={(e) => setName(e.target.value)}
                            value={name} />
                    </div>}


                    <input type="email" placeholder="Email or Phone Number" className="mt-1 text-sm focus:outline-0 placeholder-[#A0A3BD]   w-full pb-2   border-b border-b-[#A0A3BD] " onChange={(e) => setEmail(e.target.value)}
                        value={email} />

                    <input type="text" placeholder="Password" className="mt-1 text-sm focus:outline-0 placeholder-[#A0A3BD]   w-full pb-2   border-b border-b-[#A0A3BD] " onChange={(e) => setPassword(e.target.value)}
                        value={password} />

                    {state === 'Sign Up' ?
                        <div className="" >
                            <button className="bg-[#DB4444] text-white w-full rounded text-sm font-medium py-2.5">Create Account</button>
                            <div className="w-full border border-[#A0A3BD] rounded flex gap-3 justify-center text-sm font-medium py-2 mt-3"> <img src={Google} /><p>Sign up with Google</p></div>
                        </div>
                        :
                        <div className="flex  items-center justify-between">
                            <button className="bg-[#DB4444] text-white text-sm rounded py-2 px-6">Log In</button>
                            <p className="text-[#DB4444] text-sm">Forget Password?</p>
                        </div>}
                </form>
                {state === 'Sign Up' ? <p className="text-xs text-[#A0A3BD]" >Already have an account? <span className="cursor-pointer  text-xs underline" onClick={toggleState} >Log In</span></p> :
                    <p className="text-xs text-[#A0A3BD]">Don't have an account?<span className="cursor-pointer text-xs underline" onClick={toggleState} >Sign Up</span> </p>}
            </div>

        </div>
    );
}

export default Signup;


