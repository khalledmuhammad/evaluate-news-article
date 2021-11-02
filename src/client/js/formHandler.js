
 export const postData = async(url = "" , data={})=>{
    const response = await fetch( url , {
        method : "POST",
        mode : "cors",
        credentials: "same-origin",
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(data)
    })
    try {
        return await response.json()
        
    } catch (error) {
        console.log(error)
        
    }
}


export function handleSubmit(event) {
    event.preventDefault()

    let formText = document.getElementById('name').value
    console.log(formText)

    console.log("::: Form Submitted :::")
   if (Client.UrlChecker(formText)){
    
    postData("http://localhost:8081/addUrl" , {url : formText})
    .then(res=>{ 
        console.log(res)
       document.getElementById("results").style="color : green"
        document.getElementById("results").innerHTML = "success : "

    document.getElementById("text").innerHTML = `text : ${res.text}`
    document.getElementById("agreement").innerHTML = ` agreement : ${res.agreement}`
    document.getElementById("model").innerHTML = ` model : ${res.model}`
    document.getElementById("score_tag").innerHTML = ` score_tag : ${ res.score_tag}`
    document.getElementById("subjectivity").innerHTML =` subjectivity : ${res.subjectivity}`



}
    
    )
}else{
    console.log("not a valid url")
    document.getElementById("results").style="color : red"

    document.getElementById("results").innerHTML = "invalid url "
    document.getElementById("text").innerHTML = ""
    document.getElementById("agreement").innerHTML =""
    document.getElementById("model").innerHTML = ""
    document.getElementById("score_tag").innerHTML = ""
    document.getElementById("subjectivity").innerHTML = ""

}
    
   
}
