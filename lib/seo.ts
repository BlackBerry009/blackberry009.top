export const seo = {
  title: 'Blackberry | 开发者、设计师、细节控、创始人',
  description:
    'Blackberry，一名前端开发者。崇尚自由、热爱生活。',
  url: new URL(
    process.env.NODE_ENV === 'production'
      ? 'https://cali.so'
      : 'http://localhost:3000'
  ),
} as const
