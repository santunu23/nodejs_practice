//Object Property shorthand

const name='Joy'
const userAge=27
const user={
    name,
    age:userAge,
    location:'Chattogram'
}

console.log(user)

//Object Destructaring 

const product={
    label:'Red note book',
    price:3,
    stock:201,
    setPrice:undefined
}

const {label:productlabel,price}=product
console.log(productlabel)
console.log(price) 

const transication=(type,{label,stock})=>{
    console.log(type,label,stock)
}

transication('order',product)