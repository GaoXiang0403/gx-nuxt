/*
 * @Author: xiang.gao 57524479+GaoXiang0403@users.noreply.github.com
 * @Date: 2023-11-21 06:37:44
 * @LastEditors: xiang.gao 57524479+GaoXiang0403@users.noreply.github.com
 * @LastEditTime: 2023-12-04 14:08:52
 * @FilePath: /nuxt-demo/nuxt.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n"],
  i18n: {
    vueI18n: "./i18n.config.ts",
  },
});
