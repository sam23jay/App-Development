import { useEffect, useState } from "react";
function LoginPage(){
const [PostData,change]=useState({
    email:"",
    password:""
})


return (
    <div>
        <form onSubmit={submit}>
        <label>Email:
        <input type="text" value={PostData.email} onChange={(e)=>change({...PostData,email:e.target.value})}></input>
        </label>
        <br></br>
        <label>Password:
       <input type="password" value={PostData.password} onChange={(e)=>change({...PostData,password:e.target.value})}></input>
        {PostData.email}
        </label>
        <br />
        <button onSubmit={submit}>Login</button>
        </form>
    </div>
);
}
export default LoginPage;
