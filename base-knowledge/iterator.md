# iterator 迭代器

## 什么是迭代器

迭代器是指一个满足**迭代器协议**的对象。

迭代器协议定义了产生一系列值（无论是有限个还是无限个）的标准方式，当值为有限个时，所有的值都被迭代完毕后，则会返回一个默认返回值。
**只有实现了一个拥有以下语义（semantic）的 next() 方法，一个对象才能成为迭代器：**

```js
{
  next() {
    return {
      value: any,
      done: boolean
    }
  }
}
```

```js
// 输出斐波拉契数列的前N个数

const iterator = {
  a: 1,
  b: 1,
  currentIndex: 1,
  next() {
    if (this.currentIndex === 1 || this.currentIndex === 2) {
      this.currentIndex++;
      return {
        value: 1,
        done: false,
      };
    }
    const c = this.a + this.b;
    this.a = this.b;
    this.b = c;
    this.currentIndex++;
    return {
      value: c,
      done: false,
    };
  },
};
```

## iterator creator 迭代器创建函数

一个返回迭代器的函数

```js
const createIterator = (total) => {
  let currentIndex = 0;
  return {
    next() {
      console.log(currentIndex > total, currentIndex);
      return {
        value: currentIndex++ < total ? currentIndex : undefined,
        done: currentIndex > total,
      };
    },
  };
};
```

## 可迭代协议

可迭代协议是指如果一个对象可迭代，那么它就实现了这个协议。这个协议指，可迭代对象需要有一个 `Symbol.iterator` 方法，这个方法返回一个迭代器。

```js
const iterable = {
  [Symbol.iterator]() {
    return {
      next() {
        return {
          value: any,
          done: boolean,
        };
      },
    };
  },
};

const obj = {
  [Symbol.iterator]() {
    let currentIndex = 0;
    return {
      next() {
        console.log(currentIndex > 10);
        return {
          value: currentIndex++ < 10 ? currentIndex : undefined,
          done: currentIndex > 10,
        };
      },
    };
  },
};

for (const item of obj) {
  console.log(item);
}
```
