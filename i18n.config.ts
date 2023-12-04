/*
 * @Author: xiang.gao 57524479+GaoXiang0403@users.noreply.github.com
 * @Date: 2023-12-04 13:52:31
 * @LastEditors: xiang.gao 57524479+GaoXiang0403@users.noreply.github.com
 * @LastEditTime: 2023-12-04 13:52:38
 * @FilePath: /nuxt-demo/i18n.config.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
export default defineI18nConfig(() => ({
  legacy: false,
  locale: "en",
  messages: {
    en: {
      welcome: "Welcome",
    },
    fr: {
      welcome: "Bienvenue",
    },
  },
}));
