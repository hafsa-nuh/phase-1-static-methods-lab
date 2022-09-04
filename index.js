class Formatter {
  //add static methods here
  static capitalize(string){
    return string.charAt( 0 ).toUpperCase() + string.slice( 1 )
  }
  static sanitize(string){
    return string.replace( /[^A-Za-z0-9 '-]/g, '' )
  }
  //this has 2 fails
  // static titleize(sentence){
  //   let except = [ 'the','a', 'an', 'but', 'of', 'and', 'for', 'at', 'by','from']
  //   let all =[]
  //   let newWord = sentence.split("")
  //   for ( let i = 0 ; i< newWord.length; i++){
  //     if (i == 0){
  //       all.push(this.capitalize(newWord[i]))
  //     }else {
  //       if (except.includes(newWord[i])){
  //         all.push(newWord[i])
  //       }else {
  //         all.push(this.capitalize(newWord[i]))
  //       }
  //     }
  //   }
  //   return all.join('')
  // }

  // this have pass
  static titleize( sentence ) {
    let exceptions = [ 'the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from' ]
    let result = [];
    let arrayOfWords = sentence.split( " " )
    for ( let n = 0; n < arrayOfWords.length; n++ ) {
      if ( n == 0 ) {
        result.push( this.capitalize( arrayOfWords[ n ] ) )
      } else {
        if ( exceptions.includes( arrayOfWords[ n ] ) ) {
          result.push( arrayOfWords[ n ] )
        } else {
          result.push( this.capitalize( arrayOfWords[ n ] ) )
        }
      }

    }
    return result.join( " " );
  }
}