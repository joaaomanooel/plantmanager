const addActions = [
  {
    type: 'add',
    path: '../src/components/{{pascalCase name}}/index.tsx',
    templateFile: 'templates/component/index.tsx.hbs'
  },
  {
    type: 'add',
    path: '../src/components/{{pascalCase name}}/stories.tsx',
    templateFile: 'templates/component/stories.tsx.hbs'
  },
  {
    type: 'add',
    path: '../src/components/{{pascalCase name}}/styles.ts',
    templateFile: 'templates/component/styles.ts.hbs'
  },
  {
    type: 'modify',
    path: '../src/components/index.ts',
    pattern: /(-- APPEND ITEMS HERE --)/gi,
    template: "$1\r\nexport { default as {{pascalCase name}} } from './{{pascalCase name}}';"
  }
];

const actions = [...addActions]
const description = 'application component logic';
const prompts = [{ type: 'input', name: 'name', message: 'component name please' }];

module.exports = (plop) => plop.setGenerator('component', { description, prompts, actions })
