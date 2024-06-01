class ShoppingCart{
    constructor(containerId,totalCostId){
        this.container= document.getElementById(containerId)
        this.boxes= this.container.getElementsByClassName("box") 
        this.totalPrice=document.getElementById(totalCostId)
        this.total = 0;
        this.init(); //methode
    }
init(){
    for (let i =0 ; i< this.boxes.length; i++){
        this.setupItem(this.boxes[i])
    }
}

setupItem(box){
    const minus = box.getElementsByClassName("minus")[0];
    const plus = box.getElementsByClassName("plus")[0];
    const quantity = box.getElementsByTagName("input")[0];
    const deleteBtn = box.getElementsByClassName("delete")[0];

    const price = parseInt( box.getElementsByClassName("price")[0].innerText.substring(1));

    minus.addEventListener("click",()=> this.decrement(quantity,price))
    plus.addEventListener("click",()=> this.decrement(quantity,price))
    deleteBtn.addEventListener("click",()=> this.decrement(box,quantity,price))
}

decrement(quantity,price) {
    if (quantity.value > 1) {
        quantity.value--;
        this.total -= price;
        this.updateTotal()
    }
    }

increment(quantity,price){
    quantity.value++;
   this.total += price;
   this.updateTotal()
}

deleteItem(box,quantity,price){
    box.remove();
    total -= price * quantity.value;
   this.updateTotal()
}


updateTotal(){
    this.totalPrice.innerText =` Total Price: $${total} `;
}


}
document.addEventListener("DOMContentLoaded",()=>{
    const shopping = new ShoppingCart("container","total-price")
})