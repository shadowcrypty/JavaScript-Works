const books=[
    {name:"kitap 1", author:"yazar 1"},
    {name:"kitap 2", author:"yazar 2"},
    {name:"kitap 3", author:"yazar 3"}
];


// Printing Array in name value 
const listBooks = () =>{
    books.map(
        book =>{
            console.log(book.name);
        }
    )
};
// Adding the array in new element and runing callback function
const addBook=(newBook,callback)=>{
    books.push(newBook);
    callback();
};
    
addBook({name:"kitap 4", author:"yazar 1"},listBooks);
