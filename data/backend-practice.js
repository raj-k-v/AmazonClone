const xhr = new XMLHttpRequest(); //creates a new http message or request to send to the backend
//also here the http message request is being saved into xhr variable

xhr.addEventListener('load', ()=>{
    console.log(xhr.response)
})

xhr.open('GET' ,'https://supersimplebackend.dev/hello' ); //GET and there are more types of requests that can be given to the backend 
// here GET means that we are getting some info from the backend
// the first attribute is the type of request and the second attribute is to give a URL(Uniform resorce locater) means where the request has to go 



xhr.send()


 