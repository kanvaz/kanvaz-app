export class Kanvaz {

  files:Array<any> = [];

  constructor(files:Array<any>) {
    this.files = files;
  }

  addFile(name, content) {
    this.files.push({
      name: name,
      content: content
    });
  }

  removeFile(file) {
    this.files = this.files.filter((f) => {
      return f.name !== file.name;
    })
  }

  setFileContents(name, content) {
    this.files.filter((file) => {
      return file.name === name;
    })[0].content = content;
  }

  getFileContents(name) {
    var file = this.files.filter((file) => {
      return file.name === name;
    })[0];
    return (file) ? file.content : '';
  }
}

export class KanvazService {
  create() {
    return new Kanvaz([
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
      ]);
  }
}
