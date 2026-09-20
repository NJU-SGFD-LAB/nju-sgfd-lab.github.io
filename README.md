# NJU GFD Lab Website

南京大学地球流体力学实验室网站 Demo，使用 Jekyll 和 GitHub Pages 构建。

后续维护、素材整理和 Agent 交接请先阅读 [`PROJECT_HANDOFF.md`](PROJECT_HANDOFF.md)。

## 当前状态

本版本用于确认信息架构、视觉方向和内容填写方式。成员、论文与成果、博客及联系方式中带有 `DEMO` 标记的内容均为占位内容，正式发布前需要替换。

## 本地运行

建议使用 Homebrew Ruby，而不是 macOS 自带的旧版 Ruby。

```bash
export PATH="/opt/homebrew/opt/ruby/bin:$PATH"
bundle config set --local path vendor/bundle
bundle install
bundle exec jekyll serve
```

然后访问 `http://127.0.0.1:4000/`。

## 内容入口

- 首页中英文文案和研究方向：`_data/home.yml`
- 导航：`_data/navigation.yml`
- 实验仪器列表：`_data/instruments.yml`
- 成员：`_data/members.yml`
- 论文与成果：`_data/outputs.yml`
- 博客文章：`_posts/zh/`
- 仪器详情：`_instruments/zh/` 和 `_instruments/en/`
- 中文页面入口：`zh/`
- 英文页面入口：`en/`

核心稳定页面提供中英文版本。博客正文暂以中文为主，文章可通过 `title_en` 和 `excerpt_en` 为英文首页提供英文标题与简介。

## 页面结构

- 首页：主视觉、简介与研究方向、最新成果与博客、联系信息
- 实验仪器：装置列表及中英文详情页
- 成员：指导老师与学生成员
- 论文与成果：期刊论文、会议报告与学生项目
- 博客：按时间倒序排列
- 关于我们：实验室历史、研究方法与学生科研理念
