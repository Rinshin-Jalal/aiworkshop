# Cloudflare Pages Deployment

## Prerequisites
- Install Wrangler: `npm install -g wrangler`
- Login: `wrangler login`

## Quick Deploy Steps

1. **Build the project**:
```bash
npm run build
```

2. **Deploy to Cloudflare Pages**:
```bash
wrangler pages deploy dist --project-name=ai-workshop
```

Or use the npm script:
```bash
npm run deploy
```

## First Time Setup

1. Create Cloudflare Pages project (interactive):
```bash
wrangler pages project create ai-workshop
```

2. Deploy:
```bash
npm run deploy
```

## Environment Variables

Add environment variables in Cloudflare Dashboard:
1. Go to Workers & Pages → your project → Settings → Environment Variables
2. Add: `VITE_GEMINI_API_KEY` with your key

Or via CLI:
```bash
wrangler pages secret put VITE_GEMINI_API_KEY
```

## Custom Domain

After deployment, add custom domain:
1. Cloudflare Dashboard → Workers & Pages → your project
2. Custom Domains tab → Set up custom domain

## Automatic Deployment (Optional)

For Git-based auto-deploy, connect your repo in Cloudflare Pages dashboard:
- Set build command: `npm run build`
- Set build output directory: `dist`

## Files for Deployment

- `wrangler.toml` - Minimal configuration (optional for simple deployments)
- `_headers` - Security headers
- `dist/` - Built static files (auto-generated)

## Preview Locally

```bash
npm run build
npm run preview
```
