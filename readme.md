## 提交

- 提交当前根项目和所有子组件
- 可以添加 `--message` 提交信息

```bash
npm run manage -- --push --message "更新功能"
```

## 发布

- 发布到 npm 或者内部仓库（私有模块）
- 追加目录表示要发布的组件, #后跟发布级别 [major, minor, patch]
- 目录可以是多个, 用空格隔开

```bash
# 发布 common 分类下 swiper 组件
npm run manage -- --publish common/swiper#patch
```

```bash
# 发布 common 分类下 swiper 组件
npm run manage -- --publish components/common/swiper#patch
```

```bash
# 发布 common 分类下所有组件
npm run manage -- --publish components/common#patch
```

```bash
# 发布 common 分类下所有组件
npm run manage -- --publish common#patch
```

```bash
# 发布所有组件
npm run manage -- --publish components#patch
```

```bash
# 发布 common 分类下所有组件，和 web-common 分类下的 input 组件
npm run manage -- --publish common#patch components/web-common/input#patch
```

## 更新

- 更新根项目和所有子组件
- 项目有未提交改动无效

```bash
npm run manage -- --update
```

## 开发

- 产出在 built 文件夹

```bash
npm run start-before
npm start
```

## 生成 demo 动态路由

```bash
npm run manage -- --router
```

## 上线前编译

- 产出在 built-production 文件夹

```bash
npm run start-before-production
npm run gulp-production
npm run client-build-production
```

## 本地上线预览

```bash
npm run server-production
```