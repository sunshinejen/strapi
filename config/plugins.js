module.exports = ({ env }) => ({
  'github-rebuild-action': {
    enabled: true,
    resolve: './src/plugins/github-rebuild-action'
  },
  'home': {
    enabled: true,
    resolve: './src/plugins/home'
  },
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_NAME'),
        api_key: env('CLOUDINARY_KEY'),
        api_secret: env('CLOUDINARY_SECRET'),
      },
      actionOptions: {
        upload: {},
        delete: {},
      },
      breakpoints: {
        medium: 830,
        small: 500,
      }
    },
  },
});