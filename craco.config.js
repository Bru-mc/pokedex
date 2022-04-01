const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@helpers': path.resolve(__dirname, 'src/helpers'),
    },
  },
};
