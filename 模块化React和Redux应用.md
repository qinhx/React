# 		模块化React和Redux应用

1. 模块化的要点
2. 代码文件的组织方式
3. 状态树的设计
4. 开发辅助工具

**模块化应用要点**

- [ ] 代码文件的组织结构
- [ ] 确定模块边界
- [ ] Store的状态树设计

*代码文件的组织方式*

1. 按角色组织

   **MVC框架**

   - controllers
   - models
   - views

   **Redux应用中**

   - reducers/                  ------>包含所有Reducer的reducer

     todoReducer.js

     filterReducer.js

   - actions/                   ------->包含所有action构造函数

     todoActions.js

     filterAction.js

   - components/              ------->包含所有傻瓜组件

     todoList.js

     todoItem.js

     filter.js

   - containers/                --------------->包含所有容器组件

     todoListContainer.js

     todoItemContainer.js

     filterCOontainer.js

2. **按功能组织**

   *完成同一应用功能的代码放在同一个目录下*

   - todoList/

     action.js

     index.js

     reducer.js

     views/

     ​	component.js

     ​	container.js

   - filter/

     action.js

     reducer.js

     index.js

     views/

     ​	component.js

     ​	container.js

   **模块接口**

   1. 低耦合高内聚

   **状态树的设计**

   - 一个模块控制一个状态节点
   - 避免冗余数据
   - 树形结构扁平化

   **考虑应用可以无限扩展，组件命名也要避免冲突，命名时最好加上唯一前缀**
