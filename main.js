
let hour = document.querySelector(".hour")
let min = document.querySelector(".min")
let PmAm = document.querySelector(".sec")
let month = document.querySelector(".month")
let date = document.querySelector(".date")
let year = document.querySelector(".year")



let clock =()=>{
 setInterval(() => {

    let h = new Date()


    let h1=h.getHours()
    h1.toLocaleString('default')
    hour.innerText=h1
    
    
    let m1=h.getMinutes()
    min.innerText=m1
    
    let am = h.getSeconds()
    PmAm.innerText=am
    
    
    let mon = h.getMonth(3)
    month.innerText=mon+1
    
    let datee = h.getUTCDate()
    date.innerHTML=datee
    
    let yr = h.getFullYear()
    year.innerHTML=yr    
 }, 1000);   
}


clock()