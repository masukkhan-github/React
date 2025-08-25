import React, { useCallback, useEffect, useRef, useState } from "react";

function Pass(){
    const [length,setLength] = useState(8)
    const [numAllowed, setNumAllowed] = useState(false)
    const [charAllowed,setCharAllowed] = useState(false)
    const [pass,setPass] = useState("")

   let passGenerator = useCallback(()=>{
        let pass =""
        let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if(numAllowed) str+= "0123456789"
        if(charAllowed) str+= "!@#$%^&*(){}[]|?"

        for(let i=0;i<length;i++){
            let char = Math.floor(Math.random() * str.length) 
            pass += str[char]
        }

        setPass(pass)

    },[length,numAllowed,charAllowed,setPass])

    const copyToClipboard = useCallback(()=>{
        passRef.current?.select()
        window.navigator.clipboard.writeText(pass)
    },[pass])

    const passRef = useRef(null)


    useEffect(()=>{
        passGenerator()
    },[length,numAllowed,charAllowed,setPass,passGenerator])
    
    return(
        <>
        <div>
            <h4>Password Generator</h4>
            <div>
                <input type="text" 
                value={pass}
                readOnly
                placeholder="password"
                className="outline-none w-full py-1 px-3"
                ref={passRef}/>
                <button 
                onClick={copyToClipboard}
                >Copy</button>
            </div>
            <div>
                <input 
                type="range" 
                value={length}
                min={6}
                max={15}
                onChange={(e)=>{
                    setLength(e.target.value)
                }}/>
                <label>Length: {length}</label>
            </div>
            <div>
                <input
                 type="checkbox" 
                id="num"
                defaultChecked={numAllowed}
                onChange={()=>{
                    setNumAllowed((prev)=> !prev)
                }}/>
                <label htmlFor="num">Num allowed</label>
            </div>
            <div>
                <input 
                type="checkbox" 
                id="char"
                defaultChecked={charAllowed}
                onChange={()=>{
                    setCharAllowed((prev)=>!prev)
                }}/>
                <label htmlFor="char">Char allowed</label>
            </div>
        </div>
        </>
    )
}

export default Pass