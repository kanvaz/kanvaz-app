export class Kanvaz {

  constructor(files:Array) {
    this.files = files;
  }

  getFiles() {
    return this.files;
  }

  getFileContents(filename) {
    return this.files.filter((file) => {
      return file.name === filename;
    })[0].content;
  }

  writeFileContents(filename, content) {
    this.files.forEach((file) => {
      if (file.name === filename) {
        file.content = content;
      }
    });
  }
}
