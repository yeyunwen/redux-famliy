# generator 生成器

生成器是一种特殊的**迭代器**，它同时也是**可迭代对象**。

```js
const generator = function* (result) {
  console.log("生成器的函数体运行");
  result = yield 1; // { value: 1, done: false }
  console.log(result);
  result = yield 2;
  console.log(result);
  return 3;
};

const gen = generator(); // 此时并不会执行函数体，只是生成一个迭代器
const result1 = gen.next("hello"); //  这时候会执行函数体，返回一个对象 { value: 1, done: false }，这个value的只就是yield的返回值。
console.log(gen.next(10)); // { value: 1, done: false } log 会打印 10
gen[Symbol.iterator]() === gen; //true
const Generator = () => {
  return {
    next() {
      return {
        value: 1,
        done: false,
      };
    },
    [Symbol.iterator]() {
      return this;
    },
  };
};
```

## 实现 aync/await

```js
//#region generator 函数内部的执行外部完全可控
const asyncGetData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("async data");
    }, 2000);
  });
};

const task = function* () {
  console.log("task start");
  const data = yield asyncGetData();
  console.log(data);
  console.log("task end");
};

// const gen = task();
// const result = gen.next(); // { value: Promise { <pending> }, done: false }
// result.value.then((data) => {
//   gen.next(data);
// });

const run = (generatorFn) => {
  const gen = generatorFn();
  const next = (nextValue) => {
    const result = gen.next(nextValue);
    if (result.done) {
      return;
    }
    const { value } = result;
    if (typeof value === "object" && typeof value.then === "function") {
      value.then((data) => {
        next(data);
      });
    } else {
      next(value);
    }
  };
  next();
};

const withAsyncAwait = (fn) => () => run(fn);

withAsyncAwait(task)();
```
