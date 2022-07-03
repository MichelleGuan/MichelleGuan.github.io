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
- Const与Let相似但声明的时候必须初始化变量，而且尝试修改const变量会导致运行时错误。需要注意的是和多数语言一样，JS的const只限制它指向变量的引用，如果你指向的是对象，那么对象的属性改变不会报错。  
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




