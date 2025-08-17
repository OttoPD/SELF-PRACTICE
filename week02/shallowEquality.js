let book1 = {
    isbn: 123456789,
    title: "Javascript",
};
let book2 = {
    isbn: 123456789,
    title: "Javascript",
};

function shallowEQ(obj1,obj2) {
    const key1 = Object.keys(obj1);
    const key2 = Object.keys(obj2);

    if (key1.length !== key2.length){
        return false;
    }
    for(const key of key1)
        if (obj1[key] !== obj2[key]){
            if (obj1[key] !== obj2[key]){
                return false;
            }
        }
        return true
}
console.log(shallowEQ(book1,book2));
