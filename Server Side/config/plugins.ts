module.exports = ({ env }) => ({
    'users-permissions': {
      config: {
        register: {
          allowedFields: ['firstname', 'lastname', 'Phone'],
        },
      },
    },
  });