export default {
  async afterCreate(event) {
    const { result } = event;

    try {
      // إنشاء سلة للمستخدم الجديد
      await strapi.entityService.create("api::cart.cart", {
        data: {
          user: result.id,
        },
      });
    } catch (error) {
      strapi.log.error("Error creating cart for new user:", error);
    }
  },
};
