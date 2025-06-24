function add(a, b) {
    return a + b;
}   
const mul=(a, b) => {
    return a * b;
}
console.log(mul(12, 11));




const obj = {
    name: "John",
    age: 30,
    message:function(){
        let name = obj.name;
        return `Hello, my name is ${name}`
    }
}
console.log(obj.name);
console.log(obj.message());




const numbers = [1, 2, 3, 4, 5];
const mappednum = numbers.map((num) => num * 3)
console.log(mappednum);



const posNum=numbers.filter((n)=>n>0)
console.log(posNum);

const oddNum=numbers.filter((n)=>n&1)
console.log(oddNum);

const evenNum=numbers.filter((n)=>n%2==0)
console.log(evenNum);

const total=numbers.reduce((sum,n)=>sum+n,0)
console.log(total);


const products=[
    {name:'tv',price:8000},
    {name:'phone',price:5000},
    {name:'lap',price:7500}
]
const totalprice=products.reduce((sum,n)=>sum+n.price,0)
console.log(totalprice);

const filterprice=products.filter((n)=>n.price>5000)
console.log(filterprice);

const user={ name:'cr7',password:'12345789'}
const {name, password} = user;
console.log(password);
 

const number=[1,2,3,4,5,6]
const [first, second, third] = number;
console.log(third);
//spread
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const copy=[...arr2, ...arr1]
console.log(copy);

//rest
function add2(...args) {
    return args+2;
}
console.log(add2(1, 2, 3, 4, 5));

//callback

function function1(name, callback) {
    callback();
    return `${name} from outside callback`;
}

console.log(function1('function', () => {
    console.log('from inside callback');
}));


async function fetchUser() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log(error);
    }
}
fetchUser();