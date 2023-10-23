function checkAllOptionsSelected(choices) {
    for (const key in choices) {
      if (choices[key] === null) {
        return false;
      }
    }
    return true;
  }
  