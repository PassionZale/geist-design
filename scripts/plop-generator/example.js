/**
 * 示例 Generator
 *
 * @returns {import('plop').PlopGeneratorConfig}
 */

import path from 'node:path'
import fs from 'node:fs'
import url from 'node:url'
import prettier from 'prettier'

const __filename = url.fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const SIDEBAR_MAPS = {
  通用: 'GENERAL',
  布局: 'LAYOUT',
  容器: 'CONTAINER',
  表单: 'FORM',
  数据展示: 'DATA_DISPLAY',
  反馈: 'FEEDBACK',
  导航: 'NAVIGATION',
  其他: 'OTHERS'
}

export const getGenerator = plop => {
  return {
    description: '创建示例',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '请输入组件名称'
      },
      {
        type: 'input',
        name: 'title',
        message: '请输入标题'
      },
      {
        type: 'list',
        name: 'category',
        loop: false,
        message: '请选择分类',
        choices: Object.keys(SIDEBAR_MAPS).map(key => ({
          name: key,
          value: SIDEBAR_MAPS[key]
        }))
      }
    ],
    actions: [
      // markdown
      {
        type: 'add',
        path: 'docs/components/{{kebabCase name}}.md',
        templateFile: 'scripts/plop-template/example/markdown.hbs'
      },
      // sfc
      {
        type: 'add',
        path: 'docs/.vitepress/theme/examples/{{kebabCase name}}/basic.vue',
        templateFile: 'scripts/plop-template/example/sfc.hbs'
      },
      // sidebar
      async function modifySidebars(answers) {
        // sidebar.ts 文件路径
        const entryFilePath = path.resolve(
          __dirname,
          '../../docs/.vitepress/config/sidebar.ts'
        )

        // plop 模板
        const template = `,\n            { text: '{{title}} <small>{{pascalCase name}}</small>', link: '/components/{{kebabCase name}}' } /** PLOP_INJECT_SIDEBAR_{{category}} */`

        // 读取文件内容
        const content = fs.readFileSync(entryFilePath, 'utf-8')

        // 将匹配的标记物替换为 plop 模板
        const result = content.replace(
          ` /** PLOP_INJECT_SIDEBAR_${answers.category} */`,
          plop.renderString(template, answers)
        )

        // 获取 prettier 配置文件
        const prettierConfigs = await prettier.resolveConfig(entryFilePath)

        // 使用 prettier 格式化 result
        const validResult = await prettier.format(result, {
          filepath: entryFilePath,
          ...prettierConfigs
        })

        // 将 result 覆盖写入 sidebar.ts
        fs.writeFileSync(entryFilePath, validResult, 'utf-8')
      }
    ]
  }
}
