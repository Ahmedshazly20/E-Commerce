'use strict';

export async function register(ctx) {
  const { username, email, password } = ctx.request.body;

  // ✅ استخدام Service الأساسي بتاع user‑permissions
  const pluginStore = await strapi.plugin('user-permissions');
  const { userService } = pluginStore.services;

  try {
    // 1️⃣ إنشاء المستخدم
    const newUser = await userService.add({
      username,
      email,
      password,
      confirmed: true,
      provider: 'local',
    });

    // 2️⃣ إنشاء cart مربوط على user
    await strapi.entityService.create('api::cart.cart', {
      data: {
        user: newUser.id,
      },
    });

    // ✅ الرجوع بنجاح
    ctx.body = {
      user: newUser,
      message: 'User registered and cart created successfully',
    };
  } catch (error) {
    ctx.throw(400, error?.message || 'Registration failed');
  }
}
