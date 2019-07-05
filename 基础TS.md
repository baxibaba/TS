# TypeScript  
TypeScript 的缺点
任何事物都是有两面性的， TypeScript 的弊端在于：
有一定的学习成本，需要理解接口（Interfaces）、泛型（Generics）、类（Classes）、枚举类型（Enums）等前端工程师可能不是很熟悉的概念
短期可能会增加一些开发成本，毕竟要多写一些类型的定义，不过对于一个需要长期维护的项目，TypeScript 能够减少其维护成本
集成到构建流程需要一些工作量
可能和一些库结合的不是很完美
***
### 原始数据类型 undefined null
> 可以使用 undefined 和 null  来定义是原始类型的子类
example： 
```js
  let variable: number = undefined ||  variable: Object = null
```
### 任意值 any
> 如果是任意类型的着可以使用 any 关键字
example；
```js
  let variable :any = "hello world" 
  value = 7  //可以赋值为任何类型
```
### 声明为赋值 === variable ：any
> 如果只声明变量为赋值  
example:
```js
  let variable //等价于下面的例子
  let variable:any;

```
### 类型推论  赋值之后类型确认，ts会检查
> 如果一个variable 定义变量时赋值，则这个variable的类型就确定了，不可以在更改，否则报错
```js
index.ts(2,1): error TS2322: Type 'variable ' is not assignable to type 'string || number'.
```
### 联合类型

> 定义variable 
```js
let varibale: number | string;
```

### 接口 interfaces
```js
// 定义一个接口 Person 它的类型是Person 类型
interface Person {
    name: string;
    age: number;
    gender?:any

}
// 约束 tom 变量必须与接口Person 一致
// tom 中的属性必须准守 Person中的规则
let tom: Person = {
    name: 'Tom'
    age: 33
    gender:'male' // 可以填写或者省去 且value 任意类型
};
```

### 接口任意属性
* 有时候我们需要一个接口如有任意属性的
```js
interface Person  {
  name:string,
  age:number,
  [propName:string]:string //定义任意属性，则该Person 接口的所有属性
}
let tom:Perosn ={
  name:'tom',
  age:'23',  // 如果age:23 会报错  定义任意属性，则该Person 接口的所有属性
  gender:'male'
}
```
### 只读属性
* 有时候我们需要一个接口如有任意属性的
```js
interface Person  {
  readonly id:number;
  name:string,
  age:number,
  [propName:string]:string //定义任意属性，则该Person 接口的所有属性
}
let tom:Perosn ={
  id:1 
  name:'tom',
  age:'23',  
  gender:'male'
}
tom.id = 2 // 只读属性,约束存在于第一次给对象赋值的时候，而不是第一次给只读属性赋值的时候
```