
let width=Math.floor(document.body.clientWidth/13)
// window.onload = function () {
    
    holder = this.document.getElementById("holder")
    for (let i = 0; i < 124; i++){
        holder.innerHTML += `<img class="special box draggable" src="./img/${i}.png" height="${width}px" width="${width}px" ></img>`
    }
    // holder.innerHTML = `<img class="special box" src="./img/{i}.png" height="100px" width="100px" draggable="true" ondragstart="event.preventDefault()"></img>`


    // <img class="special box" src='./img/0.png' height="100px" width="100px" draggable="true" ondragstart="event.preventDefault()"></img>


    let images = document.getElementsByClassName("box");
    for (let i = 0; i < images.length; i++){
    //     let draggable = false;
        // let offsetX = 0;
        // let offsetY = 0;

        image = images.item(i);
    //     image.onmousedown = function () {
    //         draggable = true;
    //         offsetY = event.clientY - this.offsetTop;
    //         offsetX = event.clientX - this.offsetLeft;
    //     }

    //     image.ontouchstart = function() {
    //         draggable = true;
    //         offsetY = event.clientY - this.offsetTop;
    //         offsetX = event.clientX - this.offsetLeft;
    //     }
    
    //     image.onmouseup = function () {
    //         draggable = false;
    //     }

    //     image.ontouchend = function () {
    //         draggable = false;
    //     }
    
    //     image.onmousemove = function () {
    //         if (draggable) {
    //             // console.log(offsetX)
    //             this.style.left = event.clientX - offsetX + "px";
    //             this.style.top = event.clientY - offsetY + "px";
    //             // console.log(event.clientX)
    //         }
    //     }

    //     image.touchmove = function () {
    //         if (draggable) {
    //             // console.log(offsetX)
    //             this.style.left = event.clientX - offsetX + "px";
    //             this.style.top = event.clientY - offsetY + "px";
    //             // console.log(event.clientX)
    //         }
    //     }

    //     image.onmouseout = function () {
    //         draggable = false;
    //     }

    //     image.ontouchleave = function () {
    //         draggable = false;
    //     }

        let left = 210 + 110 * (i % 10);
        let top = 240 + 110 * Math.floor(i / 10);
        // console.log(image.style.position)
        image.style.position = "absolute";
        image.style.left = `${left}px`
        image.style.top = `${top}px`
        image.style.position = ""
    // }
    // // this.console.log(div01)





}

