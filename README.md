# File Metadata UI

A modern, production-ready Next.js application for extracting file metadata including MIME type, SHA-256 checksum, and rich metadata from various file types.

## Features

- 🚀 Fast metadata extraction powered by Go backend
- 📊 Comprehensive file analysis (MIME type, checksums, size)
- 🎨 Beautiful, responsive UI with Framer Motion animations
- 🔒 Type-safe with TypeScript
- ⚡ Built with Next.js 16 and React 19

## Prerequisites

- Node.js 20+ and npm
- Go backend API running (see backend repository)

## Getting Started

### 1. Clone and Install

```bash
npm install
```

### 2. Environment Configuration

Copy the example environment file and configure your API endpoint:

```bash
cp .env.example .env.local
```

Edit `.env.local` and set your API URL:

```env
# For local development
NEXT_PUBLIC_API_URL=http://localhost:8080

# For production (after deploying your Go backend)
# NEXT_PUBLIC_API_URL=https://your-api-url.com
```

### 3. Run the Development Server

Make sure your Go backend is running on `http://localhost:8080`, then:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### 4. Build for Production

```bash
npm run build
npm start
```

## Deploy on Vercel

### Prerequisites
1. Deploy your Go backend API to a hosting service (Railway, Render, Fly.io, etc.)
2. Note the production API URL

### Deployment Steps

1. **Push to Git**: Ensure your code is pushed to GitHub, GitLab, or Bitbucket

2. **Import to Vercel**:
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your repository

3. **Configure Environment Variables**:
   - In Vercel project settings, go to "Environment Variables"
   - Add: `NEXT_PUBLIC_API_URL` = `https://your-production-api-url.com`

4. **Deploy**: Vercel will automatically build and deploy your application

### Custom Domain (Optional)
- In Vercel project settings, go to "Domains"
- Add your custom domain and follow DNS configuration instructions

## Project Structure

```
├── app/              # Next.js app directory
├── components/       # React components
│   └── HeroUpload.tsx  # Main file upload component
├── lib/
│   ├── api.ts       # API client functions
│   └── utils.ts     # Utility functions
└── public/          # Static assets
```

## API Integration

The app connects to a Go backend API at `/v1/metadata` endpoint. The API:

- Accepts multipart file uploads
- Returns JSON with file metadata
- Includes MIME type detection, SHA-256 checksums, and rich metadata

See `lib/api.ts` for implementation details.

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Vercel Deployment](https://vercel.com/docs)
- [Backend API Repository](#) <!-- Add your backend repo link -->

## License

MIT

