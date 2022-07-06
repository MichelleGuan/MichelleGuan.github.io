---
sidebar_position: 1
sidebar_label: Professional JavaScript for Web Developer
description: A summarize to Professional JavaScript for Web Developer
---

# Professional JavaScript for Web Developer

## HTML中的JavaScript
- 使用外部文件的JS不单单可以增加可维护性，还能使页面加载更快，浏览器会根据特定设置缓存所有外部JS文件，如果两个页面使用同一个JS文件只需要下载一次。  
- defer属性：即脚本会被延迟到整个页面都解析完毕再运行，HTML5规范要求脚本应该按照它们出现的顺序执行（实际上可能不同），而且所有脚本都会在DOMContentLoaded之前执行。  
- async属性：与defer类似，但不保证脚本按照出现的顺序执行而去，而且可能在DOMContentLoaded之前或之后。  
- 如果使用JS从document append默认就是异步加载的。  
- 文档模式有两种：混杂模式和标准模式，所以使用 !DOCTYPE HTML开头切换标准模式。  
- noScript元素对于禁用JavaScript的浏览器仍有必要。 

## 语言基础
- 语句末尾的分号不是必须的，但应该加上，编译器可以直接找到语句在哪里结束。  
- Var：声明的范围是函数作用域，在函数退出时销毁。在全局作用域声明和不声明直接赋值一样会成为Windows对象的属性，影响垃圾回收。  
- Let：声明的范围是块作用域，只要在{}内部空的也可以。let有声明冗余的问题，而var可以覆盖之前声明。在let声明之前的执行瞬间称为暂时性死区（temporal dead zone),在此期间引用任何后面才声明的变量都会抛出ReferenceError。  
```js
//setTimeOut做为macro-task(宏任务)会进入对应的Event Queue，循环会先跑完，因此i的值是5。
//在之后执行setTimeOut的时候所有i都是同一个变量。
//关于Promise也加入混用的场景，参照浏览器Event Loop。
//micro-task(微任务)在当次事件循环末尾因此先执行，然后在下次循环开始依次执行宏任务。
for(var i=0; i<5; i++>){
    setTimeOut(()=>{console.log(i)},0)
    //5,5,5,5,5
}
//Let声明的时候因为它是块级作用域的，JS会给每个进入Event Queue的setTimeOut存一个i值。
for(let i=0; i<5; i++>){
    setTimeOut(()=>{console.log(i)},0)
    //1,2,3,4,5
}
```
- JS有六种基础数据类型（原始类型）：undefined, Null, Boolean, Number, String, Symbol
- Const与Let相似但声明的时候必须初始化变量，而且尝试修改const变量会导致运行时错误。需要注意的是和多数语言一样，JS的const只限制它指向变量的引用，如果你指向的是对象，那么对象的属性改变不会报错（可以使用Object.freeze()）。  
- Undefined：当你声明了一个变量但没有初始化就相当于赋值了undefiend, typeof()这个变量也是undefiend。此外对于没声明的变量直接调用会报错，但可以使用typeof()，也等于undefiend。
- Null：null值表示一个空对象指针，所以typeof(null)会返回Object。如果在声明对象的时候没有对象可保存那就应该指向null，也可以使用null来解除引用。undefiend是null的派生，在使用==的时候会进行操作数转换因此它们相等。
- 浮点数：JS总是想方设法把值转换成整数，比如10.00会变成10，而且会将小数点后至少包含六个0的浮点数转换成科学记数法。JS浮点数计算使用[IEEE754](https://zh.wikipedia.org/zh-hk/IEEE_754)浮点数运算标准，这也是导致0.1+0.2!==0.3的原因。
- Infinity：如果JS数值结果超过了可以表示的范围会被自动转换成Infinity或者-Infinity，这个值不能被进一步计算。
- NaN：用于表示本来要返回数值的操作失败了（而不是像其他语言一样抛出错误）。任何涉及NaN的操作始终返回NaN，NaN不等于NaN在内的所有值。关于测试NaN：typeof(NaN) === number，isNaN(NaN) === true  
- 非数值转换为数值
  - parseInt():专注于是否包含有效数值，忽略空格，空字符串返回NaN。只有正负符号数字开头执行，直到有效数字结尾，如1123blue返回1123，11.23返回11，第二个参数可以指定进制数
  - parseFloat():和parseInt类似，只接受一个小数点，第二个后面内容忽略且仅支持十进制
  - Number():bool(1,0)，null(0),undefiend(NaN),number(直接返回),String(包含有效浮点数和整数包含正负开头忽略开头的0返回数字，空字符串返回0，十六进制自动转换到10进制，其他NaN),Object调用valueOf()，如果结果为NaN调用toString()然后按照字符串规则
- 字符串是不可变的，一旦创建改变它的值需要销毁，字符串的拼接需要先创建足够容纳字符串的空间拼接字符串再销毁原始字符串。
- 值转换成字符串
  - toString():返回当前值的字符串等价物，true到true，11到'11’, [1,2]到‘1，2’，{}到‘[object Object]’，但null和undefined使用这个方法会报错
  - String():有toString就调用，null返回‘null',undefiend返回'undefined'
- 模版字面量``通过${}插入JS可以使用标签函数来自定义插值行为
- 符号Symbol：是原始值，实例是唯一不可变的，用来创建唯一记号，进而用做非字符串形式的对象属性。就算两个值一样的symbol变量也不相等，可以将symbol用做对象或者哈希表的key。也可以用于实现迭代器和异步迭代器类似Lua协程async yield
- 对象其实就是一组数据和功能的集合，对象通过new后面紧跟对象类型创建
- 操作符：后缀递增递减是在求值后发生的如num1=10 num2=num1-- num3=num1,返回num2=10,num3=9。一元+用在非数值上会进行Number转换，-会先进行转换再换成负值，乘法除法取余也会进行Number转换，指数为**。==会进行操作数转换，===不会（bool到01，string到num，obj比较是不是一个obj，null==undefined,NaN不等于任何值）
- Object的属性是无序的，因为迭代操作不保证顺序
- 可以给语句加标签 tag：statement，在break continue用做参数
- With语句可以提炼共同部分 with(location){let a =1,b=2}

## 变量，作用域与内存
- 原始值：包含Undefined，Null，Boolean，Number，String和Symbol。保存原始值的变量是按值访问的，通过变量赋值的时候会被复制到新位置。
- 引用值：引用值是保存在内存中的对象，JS不能直接访问内存位置，所以不能直接操作这个对象，实际上是操作的对象的引用。因此保存引用值的变量是按引用访问的。通过变量赋值实际上赋值的是一个指针，指向同一个在堆内存中的对象。
- JS所有函数的参数都是按值传递的，但对于引用值，即使按值传递，两者也指向同一个堆内存的对象。
- 执行上下文：变量或函数的上下文决定了它们可以访问哪些数据以及它们的行为，每个上下文都有一个关联的变量对象，这个上下文定义的所有变量和函数都存在这个对象上。全局上下文是最外层的上下文，在浏览器中指window，因此所有全局的变量和函数都会成为Window对象的属性。
- 虽然执行上下文主要有全局上下文和函数上下文两种，但eval，with，try/catch会导致临时上下文，对于catch来说会创建一个新的变量对象包含抛出错误对象的声明，在执行后被删除。
- Var声明的变量会被自动添加到最接近的上下文，且位于作用域顶部（变量提升），let则由最近的{}界定，虽然let也会被提升到作用域最上面，但是上下文的最小单位是函数而非{}，不能在声明之前使用let对象。
- 垃圾回收：JS的GC每间隔一段时间自动运行。
  - 最常用的回收策略是标记清理，当变量进入上下文会被加上存在于上下文的标记，在离开上下文时会被加上离开上下文的标记，垃圾回收运行的时候，会标记内存中存储的所有变量，然后将在上下文中的变量以及在上下文中被引用的变量的标记去掉。随后垃圾回收程序会做一次内存清理，把所有被标记的变量销毁并回收它们的内存。
  - 引用计数：声明变量并给它赋一个引用值的时候，这个值的引用数为1，如果同一个值又赋给另一个变量，那么引用数加1。当一个值的引用数为0时，就说明没办法再访问这个值，因此就可以安全的回收了。但循环引用的时候没办法回收，需要手动赋值到null解除引用。
- 内存管理：将内存占用量保持在一个较小的值可以让页面性能更好，优化内存占用的最佳手段就是保证在执行代码时只保存必要数据，不要的数据可以设置成null，从而释放引用。通过const和let的使用可以把垃圾回收提前到块作用域。V8会将创建的对象与隐藏类关联起来，比如两个变量都new一个Article类，它们会共享一个构造函数和原型，因此要避免先创建再补充式的动态赋值，在创建的时候就列出所有属性，同样的应该把不想要的属性设置成null来便于垃圾处理器识别。
- 内存泄漏：不使用任何关键字声明变量会变成全局变量即windows的属性，如果这个函数被调用多次就可能导致内存泄漏。JS定时器回调的闭包和正常的闭包（return function）如果引用了外部变量都会导致内存泄漏，因为这个变量的引用存在而无法被回收。
- 静态分配与对象池：频繁动态创建对象再回收，不如优先使用一个已经存在的对象. 由于JS的数组大小是动态可变的比如一个100大小的数组满了会被回收再创建一个200大小的，如果初始化能够给定数组大小，使用静态分配的方法可以减少垃圾回收。创建[对象池](https://egghead.io/blog/object-pool-design-pattern)用于管理一组可回收对象，可以有效减少GC次数，本质上是一种贪婪算法有单调增长但为静态内存，对象池可以根据需求自己实现或者使用开源库，可以在最开始对对象池预分配内存，之后对对象的创建和回收都使用分配好的内存避免GC介入。
```js
var o = {   //在堆内存上创建一个对象包含属性a，o的指针指向这一个对象
    a: {
      b:2
    }
  };
var o2 = o; //创建对象o2也指向堆内存对象的地址
o.a = 1     //如果这个时候修改堆内存对象的属性a，o2的值也会改变 o2={ a: 1 }
o = 1       //如果只是改变o的指针，变成值类型存储1，则o2仍然引用原来的堆内存对象的地址 o2={ a: 1 }
var a = [1, 2, 3, 4] 
var b = a            
a.push(2) //b=[1,2,3,4,2]
a = 1     //b=[1,2,3,4,2]
//所有非原始类型的数据都是存储的指针，只有操作指向对象的值的时候才会改变其他引用的结果，只操作指针地址则不影响
```

## 基本引用类型
- 对象被认为是某个特定引用类型的实例，新对象通过使用new操作符后面跟一个构造函数来创建。
- Date对象返回自有UTC以来经过的毫秒数，有parse和UTC方法，但操作时间最好还是使用moment这样的库，避免很多国际化的错误。
- 正则匹配对象需要注意的就是向前向后匹配不能接其他操作，需要分开写。
- JS提供了三种特殊引用类型：Boolean, Number, String，它们虽然是原始值但是再操作时后台会创建一个相应原始包装类型的对象，从而暴漏出各种方法。类似如下，这种行为可以让原始值拥有对象行为但不能在运行时给原始值添加属性和方法。
```js
let s1 = new String('text')
let s2 = s1.substring()
s1 = null
```
- Number要注意tofixd方法，这个方法会自动四舍五入，要不然JS会自动降低数字精度，比如把10.0存成10，isInteger同样存在这个问题，会判断1.00是整数。
- String要注意substr与substring/slice不同，第二个参数不代表到哪一个（左开右闭）而是裁剪几位字符，substring会把负的参数变成0，还会自动调整两个参数前后顺序,这三个方法都不操作原字符串，没有splice方法。字符串存在Symbol.iterator接口因此可以使用for of迭代。在使toUpper/LowerCase的时候最好加上local因为有的语言大小写规范不一样。JS提供localCompare方法但处理不了多语言混合的情况，需要自定义还是需要自己写或者使用第三方库。
- Global对象不会被显式的访问，实际上包含isNaN(),isFinite(),parseInt(),parseFloat(),URL的encodeURI/decodeURL,encodeURIComponent/decodeURLComponent.Global的属性包括undefined,NaN,Infinity,Object/Function.
- Window:浏览器将window对象实现为Global的代理对象，因此全局作用域声明的变量和函数都会变成window的属性。
- Math常用：min比较一组最小, max一组最大, ceil向上取整，floor向下取整，round四舍五入，abs绝对值。

## 集合引用类型
- [Array初始化的问题](https://dev.to/henryjw/populating-a-pre-allocated-array-slower-than-a-pushing-to-a-regular-array-4l43), [关于Array要如何初始化更快的争论](https://stackoverflow.com/questions/1295584/most-efficient-way-to-create-a-zero-filled-javascript-array), 但无论如何为大数组预分配内存并且初始化是最快的方案，使用循环push的方式初始化值效率最高，不是所有浏览器都对fill做了优化, 由于空数组行为不一致的问题要尽量避免使用数组空位，也就是初始化的时候做填充。另外在V8上使用push比给空index赋值更快。
- ES6的array有keys，values，entries这几个接口和对象一致，也可以用Array。from把返回的迭代器变成数组。
```js
const e = ['a','b','c','d']
const entries = Array.from(e.entries())
console.log(entries) //[ [ 0, 'a' ], [ 1, 'b' ], [ 2, 'c' ], [ 3, 'd' ] ]
//使用解构语法
for (const [key, value] of e.entries()) {
    console.log(`${key}=${value}`)  //0=a 1=b 2=c 3=d
}
//数组字符串转换
const f = e.toString() //a,b,c,d
const g = e.join('') //abcd
const h = Array.from(g) //[ 'a', 'b', 'c', 'd' ]
```
- 栈push pop，队列push shift，这里需要注意shift给方法非常慢，它需要重新计算数组每个值的角标，因此我刷题的时候一般都是调整数组开始的index也就是改变指针位置，积攒到一定数量的值再一起splice掉。
```js
const e = [1,4,2,3] //数组的排序和反转
e.sort((v1, v2) => v1 < v2 ? 1 : -1 ) //[ 4, 3, 2, 1 ]
e.reverse()  //[ 1, 2, 3, 4 ]
//这里需要注意sort里面的函数不能写成 {v1<v2?1:-1}，这样return回来的值外部sort函数是拿不到的，只return了内部的作用域函数
```
- JS的splice函数会修改原来的数组，slice不会, slice使用和字符串一致，接受开始结束位置左开右闭两个参数。splice第一参数是开始位置，第二个是删除几个，第三个开始是你要插入的元素。这两个都会返回一个切割的新数组。此外常见的还有indexOf includes等方法。
- 数组的every() filter() forEach() map() some(), filter不会改变原来数组,forEach不能ruturn，和下面一样，它接受的是一个函数，return只能返回到内部函数，所以实际上map使用比较多。
```js
const e = [1,4,2,3]
const f = e.filter((v)=> v < 3) //e=[1,4,2,3] f=[1,2] 同样不能{v<3}
const sum = e.reduce((a,b)=>a + b) //10
const sum = e.reduceRight((a,b)=>a - b) //-4
```
- 定型数组
  - Float32Array实际上是一种“视图”，可以允许JS运行时访问ArrayBuffer的预分配内存，ArrayBuffer是所有定型数组及视图引用的基本单位。new ArrayBuffer(16)等于在内存分配16字节，创建后不能调整大小，类似malloc，但可以被GC回收。
  ```js
  const buf = new ArrayBuffer(16)
  const ints = new Int32Array(buf) //Int32Array(4) [ 0, 0, 0, 0 ] 32bit = 4字节 -2^32-2^32
  const ints = new Int16Array(buf) //Int16Array(8) [0, 0, 0, 0, 0, 0, 0, 0] 16bit = 2字节 -2^16-2^16
  //inis不能使用等于方法，会被替换到普通数组，也没有push pop等改变长度的方法，但其他大部分方法都有
  //不管上溢还是下溢，存浮点数字符串还是给空索引加值都不会报错，浮点数会只存整数，字符串会变成0，出索引存不进去。
  //但提供set()可以往索引赋值，这个方法可以抛出异常。subArray可以返回切割后的新数组
  ```
  - [我们什么时候应该使用定型数组](https://www.geeksforgeeks.org/what-is-the-use-of-typedarray-object-in-javascript/)以及[定型数组的实际表现](https://stackoverflow.com/questions/24853686/javascript-typedarray-performance):Actually, all numbers in JavaScript are going to 64-bit floating-point numbers according to the IEEE-754 standard which is not that efficient. However, TypedArrays allow us to have contiguous blocks of 8, 16, 32, and 64 bits for signed and unsigned integers as well as 32-bit and  64-bit floating numbers.
  在迭代的时候需要格外注意，定型数组效率可能低于普通数组，我们应该按照每个元素需要的字节做初始化。
  ```js
  var buffer = new ArrayBuffer(0x10000 * 4);
  var Uint32 = new Uint32Array(buffer);
  ```
- Map做为官方提供的哈希表，会维护键值对的插入顺序，在内存占用上比Object少，插入查找删除性能大部分时间都更好也不存在Object原型的污染，唯一不如Object就是在用连续整数作为key的时候的查找效率，这很可能是因为Object对连续整数key，其它类型key和symbol使用了不同存储和算法，连续整数类似数组的连续内存存储和查找比正常平衡树的哈希表效率更高。
- Set像是加强版的Map而且可以自动去重。同样会维护插入时的顺序。
- WeakMap，和WekSet是新提供的弱映射，这意味着垃圾回收可以更好的工作，它们的键只能是Object，只要摧毁对这个对象的引用，垃圾回收就会按照引用计数方式回收这个键值对。这两种弱映射都不可以迭代，可以配合闭包做私有变量，也可以和dom对象做关联，在dom被销毁后回收，实际上也可以在深拷贝之类的方法中解决循环引用问题。

## 理解对象
- 工厂模式
```js
function createPet(name, age, category) {
    let o = new Object();
    o.name = name;
    o.age = age;
    o.category = category
    o.say = function () {
        console.log(`Hi,my name is ${name}`)
    }
    return o
}
let petA = createPet('stupid', 3, 'dog')
petA.say()
```
- 构造函数模式(首字母一般大写)
```js
function Pet(name, age, category) {
    this.name = name;
    this.age = age;
    this.category = category
    this.say = function () {
        console.log(`Hi,my name is ${name}`)
    }
}
let petB = new Pet('hahaha', 3, 'cat')
petB.say()
```
- 原型模式，无论何时只要创建一个函数，就会按照特定的规则为这个函数创建一个prototype属性，所有原型对象自动获得一个constructor属性指向与之关联的函数。hasOwnProperty只会检查对象自己的属性petA就没有name属性，但可以调用原型上的。原型弱化了构造函数初始化参数的能力，原型上所有属性是共享的，因此对于引用类型比如数组，值的改变会影响所有实例。此外，原型链不能像上层对象的构造函数传递参数，只能覆盖重写自己的。JS会优先使用自己的属性，没有的情况下从原型链继承的找。所有引用类型都继承自Object，所以可以使用toString，valueOf在内的方法。
```js
function pet() { }
pet.prototype.name = 'hahaah';
pet.prototype.age = 3;
pet.prototype.category = 'fish'
pet.prototype.say = function () {
    console.log(`Hi,my name is ${this.name}`)
}
let petA = new pet()
petA.say()
```