// const container = document.getElementById("container")
// const boxes = container.getElementsByClassName("box")
// const totalPrice = document.getElementById("total-price")


// let total=0;
// for (let i=0; i< boxes.length; i++){
//     const box= boxes[i]


//     const plus= box.getElementsByClassName("plus")[0]
//     const minus= box.getElementsByClassName("minus")[0]
//     const quantity= box.getElementsByTagName("input")[0]
//     const deletebtn= box.getElementsByClassName("delete")[0]
    
//     const price= parseInt(box.getElementsByClassName("price")[0].innerText.substring(1))

//     plus.addEventListener("click",()=>{
//         quantity.value++
//         total+=price
//         totalPrice.innerText= `Total Price DT${total}`
//     })
//     minus.addEventListener("click",()=>{
//         if (quantity.value >1){
//             quantity.value--
//             total-=price
//             totalPrice.innerText=`Total Price DT${total}`
//         }
//     })
//     deletebtn.addEventListener("click",()=>{
//         box.remove();
//         total-=price*quantity.value
//         totalPrice.innerText=`Total Price DT${total}`
//     })

//     $(".heart.fa").click(function(){
//         $(this).toggleClass("fa-heart fa-heart-o");
//     });
// }