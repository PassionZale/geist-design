/**
 * 示例 Generator
 *
 * @returns {import('plop').PlopGeneratorConfig}
 */
export const getGenerator = () => {
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
      // modify sidebars
      {
        type: 'modify',
        path: 'docs/.vitepress/config/sidebar.ts',
        pattern: ` /** PLOP_INJECT_SIDEBAR */`,
        template: `,\n        { text: '{{pascalCase name}}', link: '/components/{{kebabCase name}}' } /** PLOP_INJECT_SIDEBAR */`
      }
    ]
  }
}
