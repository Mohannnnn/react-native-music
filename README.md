### RN-Music
> 基于react-native开发的音乐🎵APP.

### 开始
```bash
1.IOS下运行 react-native run-ios
2.Android下运行 react-native run-android
```

### 项目目录
```bash
    │-ios                   #ios原生目录
    │-android               #安卓原生目录
    │─src					#主目录，业务代码
    │  actions              #redux actions
    │  components           #页面组件
    │  constants            #actions常量
    │  containers           #组装redux和组件的容器
    │  reducers             #reducers
    │  router               #路由
    │  sagas                #saga中间件
    │  store                #store
    │  static               #静态文件
    │  service              #api相关文件
    │  static               #静态文件
    │  utils                #工具函数
    │  App.js               #app入口文件
    │─index.js			    #根目录入口文件
    └─app.json			    #app配置
```
### 环境
* **node  v10.13.0**
* **npm   v6.5.0**
* **yarn  v1.9.4**
* **Xcode v9.4**
* **JDK   v1.8.0**
* **SDK   v**

### 学习记录
1.navigation

* `this.props.navigation.navigate('RouteName', {paramName: 'value'})`
* `this.props.navigation.getParam('name') , this.props.navigation.state.params`