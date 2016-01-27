exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers = {
  listFiles: function(dir, dirname) {
    const getFiles = (dir) => {
      return dir.files.reduce((files, file) => {
        if (typeof file === 'object') {
          return files.concat(getFiles(file));
        }
        return files.concat(file);
      }, []);
    };

    if (dirname) {
      const subdir = dir.files
        .filter(file => typeof file === 'object')
        .find(sub => sub.dir === dirname);

      return getFiles(subdir);
    }

    return getFiles(dir);
  },

  permute: function(arr) {

  },

  fibonacci: function(n) {

  },

  validParentheses: function(n) {

  }
};
