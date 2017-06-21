module.exports.activate = () => {
  console.log('YOU SEE I\'AM NOT THAT AWFUL!')
}

module.exports.pro = {
  selector: '.source.js',
  getSuggestions: () => {
    console.log('I\'AM NOT REGISTERED HERE!')
    return [
      {
        test: 'something'
      }
    ]
  }
}
