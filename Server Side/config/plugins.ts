module.exports = ({ env }) => ({
    // ...
    "users-permissions": {
      config: {
        register: {
          allowedFields: ["firstname", "lastname","Phone"], // Add your custom fields here
        },
      },
    },
    // ...
  });