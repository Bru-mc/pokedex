const path = require('path');
module.exports = {
  webpack: {
    alias: {
      '@assets': path.resolve(__dirname,'/src/assets'),
      '@components': path.resolve(__dirname,'/src/components'),
      '@constants': path.resolve(__dirname,'/src/constants'),
      '@contexts': path.resolve(__dirname,'/src/contexts'),
      '@helpers': path.resolve(__dirname,'/src/helpers'),
      '@interfaces': path.resolve(__dirname,'/src/interfaces'),
      '@pages': path.resolve(__dirname,'/src/pages'),
      '@services': path.resolve(__dirname,'/src/services'),
    },
  },
};
