# Vue 3 Component Demo

基于 Vue 3 + Composition API 开发的前端交互式组件项目，覆盖待办事项、API 搜索、表单校验及动态组件等常见前端场景，聚焦组件设计、状态管理与数据交互。

## 项目亮点

- **基于 Vue 3 Composition API 编写**：通过响应式数据、计算属性、侦听器等核心特性实现组件逻辑，涵盖状态管理、事件监听、鼠标追踪等功能。
- **多功能示例集合**：包含 TodoList、Wiki 搜索、Github 用户查看、密码生成器、计算器、随机名言等小型项目，覆盖常见前端开发场景。
- **网络请求与数据交互**：使用 Axios 和原生 Fetch 实现数据获取，并优化高频输入场景（如搜索）。
- **动态组件与异步加载**：实现选项卡切换、异步组件渲染等动态 UI 示例。
- **工程化实践**：使用 Vite 构建与开发，集成 ESLint 和 Prettier 进行代码质量管理。
- **模块化设计**：按功能模块拆分组件与页面结构，提升代码组织性和后续扩展能力。

## 技术栈

- Vue 3（Composition API）
- Vite
- Vue Router
- Axios / Fetch API
- Firebase Realtime Database（用于 TodoList）

## 快速开始

1. 安装依赖

   ```bash
   npm install
   ```

2. 本地开发

   ```bash
   npm run dev
   ```

3. 打包

   ```bash
   npm run build
   ```

主要配置见：

- [package.json](./package.json)
- [vite.config.js](./vite.config.js)

### 脚手架信息

项目最初使用Vite + Vue3创建

```zsh
npm create vue
```

## 项目结构

- [src](./src)/
  - [main.js](./src/main.js) — 应用入口（全局指令注册、路由挂载）
  - [router/index.js](./src/router/index.js) — 路由配置
  - [assets](./src/assets/)/
    - [base.css](./src/assets/base.css) — 全局样式
    - [utils.js](./src/assets/utils.js) — 通用工具函数（含 debounce 实现）
  - pages/
    - ProjectsDisplay.vue — 项目展示页（统一入口）
  - projects/ — 各功能示例
    - TodoList.vue — Todo 示例（集成 Firebase Realtime Database，实现数据持久化与同步）
    - GithubUsersSearch.vue — GitHub 用户搜索（Axios + debounce 优化请求频率）
    - WikiClone.vue — Wikipedia 搜索示例（Axios）
    - PasswordGenerator.vue — 密码生成器
    - SimpleCalculator.vue — 简易计算器
    - RandomQuoteGenerator.vue — 随机名言
    - DadJokes.vue — 异步请求示例
    - ProgressSteps.vue — 步骤状态显示
    - FormValidation.vue — 表单校验
    - AccordionComponent.vue — 手风琴组件
  - components/
    - composables/ - 组合式函数示例
      - counter.js — 状态复用示例
      - mouse.js — 鼠标位置监听
      - event.js — 事件监听封装

## 说明

- 部分示例依赖第三方公开 API（Wikipedia、GitHub、icanhazdadjoke 、jsonplaceholder），网络环境可能影响展示效果

## Todo List

- 使用 Vue 3 Composition API 管理待办列表状态，通过 Firebase Realtime Database 实现数据读取、添加与删除。
- 添加和删除采用乐观更新，减少操作等待；请求失败时回滚本地状态并提示错误。
- 使用 UUID 作为稳定任务 ID，并处理提交中的重复操作（防止添加请求并发提交，并禁用待保存任务的删除操作）与失败反馈。
