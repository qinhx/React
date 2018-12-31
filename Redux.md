# 					Redux

```mermaid
graph LR
B[唯一数据源] -->A((三大原则)) 
C[保持应用状态只读] -->A((三大原则)) 
D[应用状态通过纯函数完成] -->A((三大原则)) 
```

### 									核心部分

```sequence

participant action
participant store
participant reducer
action -> reducer: type  text
note right of reducer:reducer 处理
store ->reducer:action


```

### 									action 详解

1. _redux中信息的载体_ 
2. _store_唯一的信息来源
3. 是一个普通的js对象
4. action发送给store必须通过store的 dispatch方法 

```mermaid
graph LR
A((action)) --> B[type]
A -->C[things]
D{创建方法} -->F(action creator)
F --> F1(func) 
F -->F2(return)
F2 -->F21[type]
F2 -->F22[text]
F22 -->F221[待办事项]
```

__action creator 样例：__

```js
function addTodo(text){
    return {
        type:  ' ADD',
        text
    }
}
```

### 											reducer 

## 解析reducer

_根据action 的type作出不同的解析_

```mermaid
graph LR
A[reducer] -->B((function))
A -->C((返回state))
B -->B1(state)
B -->B2(action)
```

state有多个属性，可以拆分多个reducer 来进行解析

### 																						store

```mermaid
graph LR
A1(createStore创建store)-->A
A((Store)) -->B(保存应用状态)
A -->C(getState获取hangtag)
A -->D(dispatch发送更新意图 )
A -->F(subscribe注册监听函数)
A2(createStore参数) -->A21(reducer)
A2 -->A22(initialState)
```

