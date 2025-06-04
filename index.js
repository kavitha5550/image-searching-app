let form=document.querySelector("#container");
let input=document.querySelector("#search-input");
let button=document.querySelector("#search-button");
let serachresult=document.querySelector("#set-result")
let acesskey="rCRlWfkVyM2T2cMZn1uNrg==aByB7XBMLcQf9Qot";
let inputdata="";
let page=1;
  
async function SearchImage() {
    inputdata=input.value;
    const url=`https://api.api-ninjas.com/v1/randomimage/page=${page}&query=${inputdata}&client_id=${acesskey}`;
    const response=await fetch(url)
    const data=response.json();
    if(page==1){
        input.innerHTML=""
    }
    

    

let results=data.results;
results.map((result)=>{
    const imagewrapper=document.createElement("div")
    imagewrapper.classList.add("set-results");
    const image=document.createElement("img");
    image.src=result.urls.small;
    image.alt=result.alt.description;
    const imagelink=document.createElement("a")
    imagelink.href=result.links.html;
    imagelink.target="_blank";
    imagelink.textContent=result.alt.description;


    imagewrapper.appendChild(image)
    imagewrapper.appendChild(imagelink)
    serachresult.appendChild(imagewrapper)


});
page++;

if(page>1){
    seemore.style.display="block";
}
}
button.addEventListener("click",()=>{
    SearchImage()
})
// form.addEventListener("submit",(e)=>{
//     e.preventDefault();
//     page=1;
//     SearchImage()
// });

