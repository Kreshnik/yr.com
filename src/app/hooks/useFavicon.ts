import { useEffect } from 'react';

export function useFavicon() {
  useEffect(() => {
    // Create SVG favicon
    const svg = `
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <circle cx="100" cy="100" r="95" fill="#4A00BF" />
        <circle cx="100" cy="100" r="75" fill="none" stroke="white" stroke-width="2" opacity="0.3" />
        <path d="M100,60 L105,75 L120,75 L108,85 L113,100 L100,90 L87,100 L92,85 L80,75 L95,75 Z" fill="white"/>
        <text x="100" y="135" text-anchor="middle" fill="white" font-size="24" font-weight="600" font-family="system-ui, -apple-system, sans-serif">mediumchat</text>
      </svg>
    `;
    
    const blob = new Blob([svg], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    
    const link = document.querySelector("link[rel*='icon']") as HTMLLinkElement || document.createElement('link');
    link.type = 'image/svg+xml';
    link.rel = 'icon';
    link.href = url;
    
    if (!document.querySelector("link[rel*='icon']")) {
      document.head.appendChild(link);
    }
    
    // Update title
    document.title = 'Mediumchat - Free Psychic Reading';
    
    return () => {
      URL.revokeObjectURL(url);
    };
  }, []);
}