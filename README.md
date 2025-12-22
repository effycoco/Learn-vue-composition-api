```zsh
npm create vue
```

学习Composition API 基础并完成10个项目。[教程链接](https://www.youtube.com/watch?v=pgWZLS75Nmo)。

# Emit

组件实例提供了一个自定义事件系统。父组件可以通过`v-on` 或 `@` 来选择性地监听子组件上抛的事件，就像监听原生 DOM 事件那样。

所以父组件监听某个事件，子组件（比如按钮被点击时）抛出这个事件给父组件，父组件里该事件的处理函数对该事件做出反应。
见官方教程[组件基础-监听事件](https://cn.vuejs.org/guide/essentials/component-basics.html#listening-to-events)一节。
