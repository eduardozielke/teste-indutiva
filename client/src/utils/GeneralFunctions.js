export const TabTitle = (newTitle) => {
    if(newTitle) {
        return document.title = newTitle
    } 
    document.title = "Page not Found!"
}

export const renderOptions = (source) => {
    return source.map((item, index) => {
      return <option key={index} value={item.category}>{item.category[0].toUpperCase() + item.category.slice(1)}</option>
    })
}

export const renderPhotos = (source) => {
    return source.map((photo, index) => {
      return <img src={photo} key={index} className='previewImage' alt='imagePreview' />
    })
  }