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
}
