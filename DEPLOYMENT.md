# Vercel Deployment Guide

## Quick Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fyour-username%2Ffile-meta-ui)

## Prerequisites

Before deploying to Vercel, ensure you have:

1. ✅ **Backend API deployed** and accessible via public URL
2. ✅ **API Key** from your backend service
3. ✅ **GitHub/GitLab/Bitbucket** repository with your code

## Environment Variables for Vercel

You need to configure these environment variables in Vercel:

| Variable | Description | Example |
|----------|-------------|---------|
| `NEXT_PUBLIC_API_URL` | Your deployed backend API URL | `https://your-api.railway.app` |
| `NEXT_PUBLIC_API_KEY` | API authentication key | `5d41402abc4b2a76b9719d911017c592` |
| `NEXT_PUBLIC_SITE_URL` | Your Vercel deployment URL | `https://your-app.vercel.app` |

## Deployment Steps

### 1. Push Your Code to Git

```bash
git add .
git commit -m "Ready for Vercel deployment"
git push origin main
```

### 2. Import to Vercel

1. Go to [vercel.com](https://vercel.com)
2. Click **"Add New Project"**
3. Import your Git repository
4. Vercel will auto-detect Next.js framework

### 3. Configure Environment Variables

In the Vercel project configuration:

1. Navigate to **Settings → Environment Variables**
2. Add the following variables:
   - `NEXT_PUBLIC_API_URL` = Your production API URL
   - `NEXT_PUBLIC_API_KEY` = Your API key
   - `NEXT_PUBLIC_SITE_URL` = Your Vercel app URL (e.g., `https://yourapp.vercel.app`)
3. Apply to: **Production, Preview, and Development**

### 4. Deploy

Click **"Deploy"** and Vercel will:
- Install dependencies
- Run `npm run build`
- Deploy your application
- Provide a deployment URL

## Post-Deployment

### Update Site URL

After first deployment, update `NEXT_PUBLIC_SITE_URL`:

1. Copy your Vercel deployment URL
2. Go to **Settings → Environment Variables**
3. Update `NEXT_PUBLIC_SITE_URL` with your actual Vercel URL
4. Redeploy to apply changes

### Custom Domain (Optional)

1. Go to **Settings → Domains**
2. Add your custom domain
3. Configure DNS as instructed by Vercel
4. Update `NEXT_PUBLIC_SITE_URL` to your custom domain

## Vercel Configuration

The project includes `vercel.json` with:

- ✅ Security headers (X-Frame-Options, CSP, etc.)
- ✅ Clean URLs (no `.html` extensions)
- ✅ Redirects for common routes
- ✅ Optimized caching policies

## Routes Configured

All Next.js app routes are automatically handled:

- `/` - Homepage with file upload
- `/docs` - API documentation
- `/pricing` - Pricing plans
- `/about` - About page
- `/blog` - Blog listing
- `/contact` - Contact form
- `/login` - User login
- `/register` - User registration
- `/privacy` - Privacy policy
- `/terms` - Terms of service

### Special Routes

- `/sitemap.xml` - Auto-generated sitemap
- `/robots.txt` - Auto-generated robots.txt
- `/manifest.json` - PWA manifest

## Troubleshooting

### Build Fails

- Check environment variables are set correctly
- Verify `NEXT_PUBLIC_API_URL` is accessible
- Review build logs in Vercel dashboard

### API Not Working

- Ensure backend allows CORS from your Vercel domain
- Verify `NEXT_PUBLIC_API_KEY` matches backend
- Check network tab in browser DevTools

### 404 Errors

- Verify routes exist in `app/` directory
- Check `vercel.json` redirects configuration
- Ensure trailing slashes are disabled

## Monitoring

After deployment, monitor your app:

1. **Analytics**: Vercel provides built-in analytics
2. **Logs**: Check function logs in Vercel dashboard
3. **Performance**: Use Vercel Speed Insights

## Redeployment

To redeploy:

1. **Automatic**: Push to your git branch (main/master)
2. **Manual**: Click "Redeploy" in Vercel dashboard

## Additional Resources

- [Vercel Next.js Documentation](https://vercel.com/docs/frameworks/nextjs)
- [Environment Variables Guide](https://vercel.com/docs/concepts/projects/environment-variables)
- [Custom Domains](https://vercel.com/docs/concepts/projects/custom-domains)
