# README

## RUN

```shell
pnpm isntall

pnpm run start
```

## 发布

```shell
pnpm run deploy
```

会根据 commit 自动生成 changelog 和版本发布

1. PATCH 版本更新（X.Y.<font color=Crimson>Z</font>）
   - fix: 修复 Bug 的提交会触发 PATCH 版本更新。
   - perf: 优化数据库查询速度
2. MINOR 版本更新（X.<font color=Crimson>Y</font>.Z）
   - feat: 增加新功能的提交会触发 MINOR 版本更新。例如：
3. MAJOR 版本更新（<font color=Crimson>X</font>.Y.Z）
   - BREAKING CHANGE: 任何提交消息中包含 BREAKING CHANGE 字样，都会触发 MAJOR 版本更新
