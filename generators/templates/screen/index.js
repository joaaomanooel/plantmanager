const addActions = [
  {
    type: 'add',
    path: '../src/screens/{{pascalCase name}}/index.tsx',
    templateFile: 'templates/screen/index.tsx.hbs'
  },
  {
    type: 'add',
    path: '../src/screens/{{pascalCase name}}/styles.ts',
    templateFile: 'templates/screen/styles.ts.hbs'
  },
  {
    type: 'modify',
    path: '../src/navigation/index.tsx',
    pattern: /(-- IMPORT SCREEN --)/gi,
    template: "$1\r\nimport {{pascalCase name}} from '@/screens/{{pascalCase name}}';"
  },
  {
    type: 'modify',
    path: '../src/navigation/index.tsx',
    pattern: new RegExp('(</Stack.Navigator>)', 'g'),
    template:
      '\t<Stack.Screen name={ navigations.{{pascalCase name}} } component={ {{pascalCase name}} } />\n\t\t$1'
  },
  {
    type: 'modify',
    path: '../src/constants/navigations.ts',
    pattern: /(-- CONSTANTS --)/gi,
    template: "$1\r\n\t{{pascalCase name}}: '{{constantCase name}}',"
  }
];

const actions = [...addActions];
const description = 'application screen logic';
const prompts = [{ type: 'input', name: 'name', message: 'screen name please' }];

module.exports = (plop) => plop.setGenerator('screen', { description, prompts, actions });
