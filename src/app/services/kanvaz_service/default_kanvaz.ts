import {Kanvaz} from '../../model/kanvaz';

export let defaultKanvaz = new Kanvaz([
 {
    name: 'index.html',
    content: `<!doctype html>
<html>
<head>
  <meta charset="utf-8">
  <title>Kanvaz</title>
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <h1>Hello</h1>
  <script src="app.js"></script>
</body>
</html>`
  },
  {
    name: 'styles.css',
    content: 'h1 { color: red; }'
  },
  {
    name: 'app.js',
    content: 'console.log(\'Hello World!\');'
  }
])
