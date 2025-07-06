'use strict';

const registerHandler = require('@strapi/plugin-users-permissions/server/controllers/auth/register');

module.exports = async (ctx, next) => {
  await registerHandler(ctx, async () => {
    const user = ctx.body?.user;

    if (user && user.id) {
      try {
        await strapi.entityService.create('api::cart.cart', {
          data: {
            user: user.id,
          },
        });
      } catch (error) {
        strapi.log.error('Error creating cart for user:', error);
      }
    }
  });
};
