export class Kanvaz {

  files:array;

  constructor(files:array) {
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
    return this.files.filter((file) => {
      return file.name === name;
    })[0].content;
  }
}
