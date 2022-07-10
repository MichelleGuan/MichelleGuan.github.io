var o = {
    a: {
      b:2
    }
  };
  // 两个对象被创建，一个作为另一个的属性被引用，另一个被分配给变量 o
  // 很显然，没有一个可以被垃圾收集
var o2 = o; // o2 变量是第二个对“这个对象”的引用
  
o.a = 1    // 现在，“这个对象”只有一个 o2 变量的引用了，“这个对象”的原始引用 o 已经没有
  
//console.log(o2)

var a = [1, 2, 3, 4]
var b = a
a.push(2)
//console.log(b)
var c = 'teststr'
d = c.slice(2,4)


//const entries = Array.from(e.entries())
//console.log(entries) //[ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ], [ 3, 'd' ] ]

// for (const [key, value] of e.entries()) {
//     //console.log(`${key}=${value}`)  //0=a 1=b 2=c 3=d
// }

// const f = e.toString() //a,b,c,d
// const g = e.join('') //abcd
// const h = Array.from(g) //[ 'a', 'b', 'c', 'd' ]
// console.log(h)
// const e = [1,4,2,3]
// // e.sort((v1, v2) => { v1 < v2 ? 1 : -1 }) //[ 4, 3, 2, 1 ]
// // e.reverse()  //[ 1, 2, 3, 4 ]
// //const f = e.filter((v)=> v<3)
// const sum = e.reduceRight((a,b)=>a - b)
// console.log(sum)

const buf = new ArrayBuffer(16)
let ints = new Int32Array(buf) //Int32Array(4) [ 0, 0, 0, 0 ]
//const ints = new Int16Array(buf) //Int16Array(8) [0, 0, 0, 0, 0, 0, 0, 0]
ints.fill(22)
ints[3] = 'ew'
//console.log(ints)


// function pet() { }
// pet.prototype.name = 'hahaah';
// pet.prototype.age = 3;
// pet.prototype.category = 'fish'
// pet.prototype.say = function () {
//     console.log(`Hi,my name is ${this.name}`)
// }
// let petA = new pet()
// petA.say()

function superType(name) {
    this.name  = name
    this.color = ['red','blue']
}
superType.prototype.sayName = function () {
    //console.log(this.name)
}
function extendType(name, age) {
    superType.call(this, name)
    this.age = age
}
extendType.prototype = new superType()
let instance1 = new extendType('ha','11')
instance1.color.push('yellow')
let instance2 = new extendType('haha','22')
//instance1.sayName() //ha
//console.log(instance1.color, instance2.color, instance2.age) //[ 'red', 'blue', 'yellow' ] [ 'red', 'blue' ] 22

function createNew(original) {
    let clone = new Object(original);
    clone.sayHi = function () {
        console.log('Hi')
    }
    return clone
}
let person = {
    name: 'lalala',
    friends: ['a','b','c']
}
let anotherPerson = createNew(person)
//anotherPerson.friends.push('d')
//console.log(person.friends) //[ 'a', 'b', 'c', 'd' ]

function inheritPrototype(subType, superType) {
    let prototype = new Object(superType.prototype)
    prototype.constructor = subType
    subType.prototype = prototype
}
function SuperType(name) {
    this.name  = name
    this.color = ['red','blue']
}
SuperType.prototype.sayName = function () {
    console.log(this.name)
}
function ExtendType(name, age) {
    SuperType.call(this, name)
    this.age = age
}
inheritPrototype(ExtendType,SuperType)
let ins1 = new ExtendType('ha','11')
ins1.color.push('yellow')
let ins2 = new ExtendType('haha', '22')
//ins1.sayName() //ha
//console.log(ins1.color, ins2.color, ins1.age) //[ 'red', 'blue', 'yellow' ] [ 'red', 'blue' ] 11

class Person{
    constructor() {
        this.name = 'person'
    }
}
class Woman extends Person{
    constructor(){
        super()
    }
    sayName(){
        console.log(this.name)
    }
}
let haha = new Woman()
haha.sayName() //person
haha.name = 'Jay'
haha.sayName() //Jay