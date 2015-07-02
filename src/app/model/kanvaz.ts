export class Kanvaz {

  files:Array<any> = [];

  constructor(files:Array) {
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
