import { MetadataRoute } from 'next';

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ayush Vishwakarma Portfolio',
    short_name: 'Ayush Portfolio',
    description: 'Self-taught Full Stack & Android Architect crafting modern web applications, Android apps and futuristic digital experiences.',
    start_url: '/',
    display: 'standalone',
    background_color: '#060608',
    theme_color: '#060608',
    icons: [
      {
        src: '/favicon.svg',
        sizes: 'any',
        type: 'image/svg+xml',
      },
      {
        src: '/ayush-profile.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/ayush-profile.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  };
}
