export const signup = user => {
    // console.log(name,email,password)
   return fetch(`http://localhost:8000/api/signup/`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            console.log(err);
        })
};

export const signin = user => {

    // console.log(name,email,password)
   return fetch(`http://localhost:8000/api/signin`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json"
        },
        body: JSON.stringify(user)
    })
        .then(response => {
            return response.json()
        })
        .catch(err => {
            console.log(err);
        })
};
export const authenticate=(data,next)=>{
    if(typeof window !== 'undefined'){
        localStorage.setItem('jwt',JSON.stringify(data))
    next();
    }
};
export const isauthenticate=()=>{
    if(typeof window == "undefined"){
        return false;
    }
    if(localStorage.getItem("jwt")){
        // console.log(JSON.parse(localStorage.getItem("jwt")).user.username);
        return JSON.parse(localStorage.getItem("jwt"));
    }
    else{
        return false;
    }
};
export const signout=next=>{
    if(typeof window !== 'undefined'){
        localStorage.removeItem("jwt");
    next();
    }
    
};