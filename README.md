# multiline-ellipsis

### 多行省略指令效果

![多行省略指令效果图](https://github.com/xm2by/multiline-ellipsis/blob/master/src/assets/example.gif)

### Demo运行

本项目为vue多行省略指令的demo，如果想看demo运行效果，可将项目clone下来，依次执行：

```bash
// 安装依赖
npm install
```

```bash
// 启动demo项目
npm run serve
```

### 项目中引入方式

多行省略指令源码存放在项目的`src/components/multilineEllipsis`文件夹中，如果想在自己项目中使用，可以将该文件夹拷贝至项目中，然后在`main.js`中引入并全局注册指令即可正常使用：

```js
// 引入ellipsis指令
import ellipsis from './components/multilineEllipsis/index'

// 全局注册
Vue.use(ellipsis)
```

### 指令使用方法

多行文本省略指令`v-ellipsis`会接收3个参数：

| 参数      | 说明            | 类型
|:--------:| :-------------:|:-------------:|
| line     | 行数，设置需要显示省略号时的行数 | number
|showTitle | 是否显示title，文本超出显示省略时，当鼠标hover上去时是否在title上显示完整的内容 | boolean
|rightBlank | 默认省略号显示在指定行数的末尾，如果需要将省略号距离末尾留有一定空白，可设置该参数 | number

具体使用如下：

```vue
 <div v-ellipsis="{ 'line': 1, 'showTitle': true, 'rightBlank': 10 }">我和我的祖国一刻也不能分割无论我走到哪里都流出一首赞歌我歌唱每一座高山我歌唱每一条河袅袅炊烟小小村落路上一道辙你用你那母亲的脉搏和我诉说我的祖国和我像海和浪花一朵浪是海的赤子海是那浪的依托每当大海在微笑我就是笑的旋涡我分担着海的忧愁分享海的欢乐永远给我碧浪清波心中的歌啦啦</div>
```