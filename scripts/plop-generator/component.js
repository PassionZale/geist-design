/**
 * 组件 Generator
 *
 * @returns {import('plop').PlopGeneratorConfig}
 */
export const getGenerator = () => {
  return {
    description: '创建组件',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: '请输入组件名称'
      }
    ],
    actions: [
      // scss
      {
        type: 'add',
        path: 'src/_styles/_{{kebabCase name}}.scss',
        templateFile: 'scripts/plop-template/component/_styles/scss.hbs'
      },
      // __test__
      {
        type: 'add',
        path: 'src/{{kebabCase name}}/__test__/{{kebabCase name}}.spec.ts',
        templateFile: 'scripts/plop-template/component/__test__/spec.hbs'
      },
      // sfc
      {
        type: 'add',
        path: 'src/{{kebabCase name}}/src/{{kebabCase name}}.vue',
        templateFile: 'scripts/plop-template/component/src/sfc.hbs'
      },
      // props
      {
        type: 'add',
        path: 'src/{{kebabCase name}}/src/props.ts',
        templateFile: 'scripts/plop-template/component/src/props.hbs'
      },
      // interface
      {
        type: 'add',
        path: 'src/{{kebabCase name}}/src/interface.ts',
        templateFile: 'scripts/plop-template/component/src/interface.hbs'
      },
      // index
      {
        type: 'add',
        path: 'src/{{kebabCase name}}/index.ts',
        templateFile: 'scripts/plop-template/component/index.hbs'
      },
      // modify entries
      {
        type: 'modify',
        path: 'src/_styles/index.scss',
        pattern: `/** PLOP_INJECT_IMPORT */`,
        template: `@import './_{{kebabCase name}}.scss';\n/** PLOP_INJECT_IMPORT */`
      },
      {
        type: 'modify',
        path: 'src/components.ts',
        pattern: `/** PLOP_INJECT_EXPORT */`,
        template:
          `export { G{{pascalCase name}} } from './{{kebabCase name}}'\nexport * from './{{kebabCase name}}'\n\n/** PLOP_INJECT_EXPORT */`
      },
      {
        type: 'modify',
        path: 'src/global.d.ts',
        pattern: `/** PLOP_INJECT_EXPORT */`,
        template: `G{{pascalCase name}}: typeof components.G{{pascalCase name}}\n    /** PLOP_INJECT_EXPORT */`
      }
    ]
  }
}
