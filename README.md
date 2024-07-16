# miniRedux

这个项目用于记录学习并实现 `redux` 及其生态过程中的一些基础知识。

// TODO

- [ ] Redux combineReducers 实用程序函数尝试对此进行优化。如果 slice reducers 都没有返回新的值，则 combineReducers 返回旧 state 对象而不是新 state 对象。这意味着 reducer 中的 mutation 会导致 root state 对象不被更新，因此 UI 不会重新渲染。
