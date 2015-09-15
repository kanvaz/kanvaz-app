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

  toJson () {
    var data = {
      files: this.files
    };

    return JSON.stringify(data);
  }
}

export class KanvazService {

  apiEndpoint = 'http://localhost:6767/kanvaz';
  headers = {
    "Content-type": "application/x-www-form-urlencoded; charset=UTF-8"
  };

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
          content: 'h1 { color: blue; }'
        },
        {
          name: 'app.js',
          content: 'console.log(\'Hello World!\');'
        }
      ]);
  }

  private toJson (response) {
    return response.json()
  }

  private logSuccess (data) {
    console.log('Request succeeded with JSON response', data);
    return data;
  }

  private logError (error) {
    console.log('Request failed', error);
  }

  save (kanvaz: Kanvaz) {
    return fetch(this.apiEndpoint, {
      method: 'post',
      headers: this.headers,
      body: kanvaz.toJson()
    })
    .then(this.toJson)
    .then(this.logSuccess)
    .catch(this.logError);
  }

  fetch (id: string) {
    return fetch(this.apiEndpoint + '/' + id, {
      method: 'get',
      headers: this.headers
    })
    .then(this.toJson)
    .then(this.logSuccess)
    .then((data) => new Kanvaz(data.files))
    .catch(this.logError);
  }
}
