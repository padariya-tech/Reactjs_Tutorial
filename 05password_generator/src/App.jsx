import { useState ,useEffect , useCallback , useRef} from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

function App() {
  const [length,setLength] = useState(8);
  const [numallowed,setnumallowed] = useState(false);
  const [charallowed,setcharallowed] = useState(false);
  const [password,setpassword] = useState("");

  // use ref hook
  const passwordRef = useRef(null) // starting we don't have any refrence 
  // we are using this because as we show button and input are oth different quantity so to refer this two means by doing click on button it should copy entire ttext inside box.



  const passwordGenerator = useCallback(()=>{
    let pass=""
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(numallowed) str+="0123456789"
    if(charallowed) str+="!@#$%^&*()_+="

    for(let i=1;i<=length;i++)
    {
      let char = Math.floor(Math.random()*str.length+1)
      pass += str.charAt(char)
    }
    setpassword(pass)


  },[length,numallowed,charallowed,setpassword]) // this is use callback to use same function again and again , for argument we have to pass function and it's dependencies . store method in cache and used for memoization

  const copyPasswordtoclipboard = useCallback(()=>{
    passwordRef.current?.select() // highlight password so it looks like selected , for user satisfaction
    window.navigator.clipboard.writeText(password)
  },[password])
  

  useEffect(()=>{
    passwordGenerator()
  },[length,numallowed,charallowed,passwordGenerator])
// this hook will run when ever any value of  dependency will change like length , numallowed etc.., this is also run initially when we do't have any thing in password field.
  return (
      
       <>
       <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-10 my-10  bg-gray-700 text-orange-500 '>
        <h1 className='text-white text-center my-3'>Password generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
          type="text"
          value={password}
          className='outline-none w-full py-5 px-2'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />
          <button onClick={copyPasswordtoclipboard} className='outline-none bg-blue-700 px-3 py-0.5 shrink-0 '>Copy</button>
        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input 
            type="range"
            min={8}
            max={64}
            value={length}
            className='cursor-pointer' 
            onChange={(e)=> {setLength(e.target.value)}}


            />
            <label> Length: {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={numallowed}
            id='numberInput'
            onChange={()=>{
              setnumallowed((prev)=>!prev);
            }} 
            />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
            type="checkbox"
            defaultChecked={charallowed}
            id='charInput'
            onChange={()=>{
              setcharallowed((prev)=>!prev);
            }} 
            />
            <label htmlFor="charInput">Characters</label>
          </div>
          </div>
          
       </div>
       
       </>
    );
  };
  
  
  
export default App
