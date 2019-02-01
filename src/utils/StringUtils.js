class StringUtils {
  static containsCaseInsensitive(str, find) {
    return str.search(new RegExp(find, "i")) !== -1;
  }

  static replaceCharacters(str, replaceBy, exceptCharacters = "") {
    let newStr = str;
    for (let character of str) {
      if (!StringUtils.containsCaseInsensitive(exceptCharacters, character)) {
        newStr = newStr.replace(character, replaceBy);
      }
    }
    return newStr;
  }
}

export default StringUtils;
