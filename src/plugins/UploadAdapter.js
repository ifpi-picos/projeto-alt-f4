import firebase from 'firebase/app'

class UploadAdapter {
  constructor (loader, firebase) {
    // The file loader instance to use during the upload.
    this.loader = loader
  }

  // Starts the upload process.
  upload () {
    return this.loader.file.then(async file => {
      try {
        const format = file.name.split('.')[1]
        const filePath = `images/${new Date().getTime()}.${format}`
        const fileSnapshot = await firebase
          .storage()
          .ref(filePath)
          .put(file)
        const url = await fileSnapshot.ref.getDownloadURL()
        console.log('url: ', url)
        return { default: url }
      } catch (error) {
        console.error(error)
      }
    })
  }

  // Aborts the upload process.
  abort () {
    // Reject the promise returned from the upload() method.
    console.log('upload cancel')
  }
}

export default UploadAdapter
