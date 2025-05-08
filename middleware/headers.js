const setCustomHeaders = (req, res, next) => {
  // Remove X-Frame-Options to allow embedding in iframes (like Discord Activity)
  res.removeHeader('X-Frame-Options');

  // Configure Content Security Policy (CSP)
  // This is a basic policy. You'll need to refine it based on your specific needs,
  // especially for scripts, styles, images, fonts, and connect-src directives.
  const cspDirectives = {
    'default-src': ["'self'"],
    'script-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'], // 'unsafe-inline' might be needed for some libraries, try to remove if possible.
    'style-src': ["'self'", "'unsafe-inline'", 'https://fonts.googleapis.com'], // 'unsafe-inline' for styled-components in dev, consider nonce/hash in prod
    'img-src': ["'self'", 'data:'], // 'data:' for inline SVGs or base64 images
    'font-src': ["'self'", 'https://fonts.gstatic.com'],
    'connect-src': ["'self'"], // Add your API endpoints, WebSocket servers, etc.
    'frame-ancestors': ["'self'", 'https://*.discord.com'], // IMPORTANT: Allows embedding by Discord
    'object-src': ["'none'"],
    'base-uri': ["'self'"],
    'form-action': ["'self'"],
    'frame-src': ["'self'", 'https://*.discord.com'], // Explicitly allow discord.com iframes to be certain
  };

  const cspString = Object.entries(cspDirectives)
    .map(([key, values]) => `${key} ${values.join(' ')}`)
    .join('; ');

  res.setHeader('Content-Security-Policy', cspString);

  // Optional: Referrer-Policy (adjust as needed for your analytics or linking requirements)
  res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');

  // Optional: Permissions-Policy (example, adjust based on features you use)
  // res.setHeader('Permissions-Policy', 'geolocation=(), microphone=(), camera=()');

  next();
};

module.exports = setCustomHeaders; 