export default function sitemap() {
  return [
    {
      url: 'https://technicalcup-a1.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1,
    },
    {
      url: 'https://technicalcup-a1.vercel.app/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://technicalcup-a1.vercel.app/studyhub',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
      url: 'https://technicalcup-a1.vercel.app/gallery',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
        url: 'https://technicalcup-a1.vercel.app/announcements',
        lastModified: new Date(),
        changeFrequency: 'daily',
        priority: 0.8,
      },
  ]
}
