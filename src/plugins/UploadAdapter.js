class UploadAdapter {
  constructor (loader) {
    // The file loader instance to use during the upload.
    this.loader = loader
  }

  // Starts the upload process.
  upload () {
    return this.loader.file.then(file => {
      console.log(file)
      // aqui deve ser colocado o código que vai salvar a imagem no storade
      // do firebase e retornar a URL da imagem pra ser salva no firestore junto
      // com o conteúdo da postagem
    })
  }

  // Aborts the upload process.
  abort () {
    // Reject the promise returned from the upload() method.
    console.log('upload cancel')
  }
}

export default UploadAdapter
