function addVAT(price) {
    return price + (0.2 * price);
}

/*-------------   getFullName Function  ------------*/
function getFullName(firstName,lastName){

    return firstName+" "+ lastName;
}

/*-------------   makeHalfPrice Function  ------------*/
function makeHalfPrice(price){

    return price/2;
}

/*-------------   countBook Function  ------------*/
function countBook(books){

    return books.length; 
}


/*-------------   isInStock Function  ------------*/
let book ={
    title: "The Stone Diaries",
    author: "Carol Shields",
    yearOfPublication: 1993,
    quantity: 3
}
 
function isInStock (book) {

      if (book.quantity > 0){ return true;}
      else return false;
}


/*-------------   getTotalOrderPrice Function  ------------*/
function getTotalOrderPrice(bookNumber, price){
    
return (bookNumber*price + (bookNumber*price)*0.2)


}



module.exports = {
    addVAT, getFullName, makeHalfPrice, countBook, isInStock, getTotalOrderPrice
};
