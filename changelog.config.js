module.exports = {
  disableEmoji: false,
  format: '{type}{scope}: {emoji}{subject}',
  list: [
    'feat',
    'fix',
    'test',
    'build',
    'revert',
    'chore',
    'docs',
    'refactor',
    'style',
    'ci',
    'perf',
  ],
  maxMessageLength: 64,
  minMessageLength: 3,
  questions: [
    'type',
    'scope',
    'subject',
    'body',
    'breaking',
    'issues',
    'lerna',
  ],
  scopes: [],
  types: {
    feat: {
      description: 'A new feature（一项新功能）',
      emoji: '🎸',
      value: 'feat',
    },
    fix: {
      description: 'A bug fix（错误修复）',
      emoji: '🐛',
      value: 'fix',
    },
    chore: {
      description:
        'Build process or auxiliary tool changes（构建过程或辅助工具的变化）',
      emoji: '🤖',
      value: 'chore',
    },
    build: {
      description:
        'Changes that affect the build system or external dependencies（影响构建系统或外部依赖项的更改）',
      emoji: '📦️',
      value: 'build',
    },
    revert: {
      description: 'Reverts a previous commit（恢复之前的提交）',
      emoji: '⏪️',
      value: 'revert',
    },
    ci: {
      description: 'CI related changes（CI 相关的变化）',
      emoji: '🎡',
      value: 'ci',
    },
    docs: {
      description: 'Documentation only changes（仅文档更改）',
      emoji: '✏️',
      value: 'docs',
    },
    perf: {
      description:
        'A code change that improves performance（提高性能的代码更改）',
      emoji: '⚡️',
      value: 'perf',
    },
    refactor: {
      description:
        'A code change that neither fixes a bug or adds a feature（既不修复错误也不添加功能的代码更改）',
      emoji: '💡',
      value: 'refactor',
    },
    release: {
      description: 'Create a release commit（创建一个版本提交）',
      emoji: '🏹',
      value: 'release',
    },
    style: {
      description:
        'Markup, white-space, formatting, missing semi-colons...（标记、空格、格式、缺少分号...）',
      emoji: '💄',
      value: 'style',
    },
    test: {
      description: 'Adding missing tests（添加缺少的测试）',
      emoji: '💍',
      value: 'test',
    },
    messages: {
      type: "Select the type of change that you're committing(选择您要提交的更改类型):",
      customScope:
        'Select the scope this component affects(选择该组件影响的范围):',
      subject:
        'Write a short, imperative mood description of the change(写一个简短的、命令式的变化情绪描述):\n',
      body: 'Provide a longer description of the change(提供更详细的变更描述):\n ',
      breaking: 'List any breaking changes(列出所有重大变更):\n',
      footer:
        'Issues this commit closes, e.g #123(此提交关闭的问题，例如#123):',
      confirmCommit:
        'The packages that this commit has affected(此提交影响的包)\n',
    },
  },
};
