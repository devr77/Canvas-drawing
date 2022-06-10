const canvas = document.getElementById("canvas")
canvas.height = window.innerHeight
canvas.width = window.innerWidth
// canvas.height ="420px";
// canvas.width = "297px";



const ctx = canvas.getContext("2d")

let prevX = null
let prevY = null

ctx.lineWidth = 5

let draw = false;

let clrs = document.querySelectorAll(".clr")

clrs = Array.from(clrs)

console.log(clrs);

clrs.forEach(clr => {
    clr.addEventListener("click",()=>{
        ctx.strokeStyle = clr.dataset.clr 
    })
})

let clrbtn = document.querySelector(".clear")
clrbtn.addEventListener("click",() => {
    ctx.clearRect(0,0,canvas.width,canvas.height)
})

window.addEventListener("mousedown",(e) => draw = true)

window.addEventListener("mouseup",(e) => draw = false)

window.addEventListener("mousemove",(e) => {
    // console.log("Mouse x: "+e.clientX)
    // console.log("Mouse Y: "+e.clientY)

    if(prevX == null || prevY == null || !draw){
        prevX = e.clientX
        prevY = e.clientY
        return
    }

    let currentX = e.clientX
    let currentY = e.clientY

    ctx.beginPath()
    ctx.moveTo(prevX,prevY)
    ctx.lineTo(currentX,currentY)
    ctx.stroke()

    prevX = currentX
    prevY = currentY
    
})

