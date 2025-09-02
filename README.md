This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## ✅ Production Ready for Vercel

This project has been optimized and is ready for deployment on Vercel with:
- ✅ All ESLint errors fixed
- ✅ Next.js Image optimization implemented
- ✅ Modern remotePatterns configuration
- ✅ Vercel configuration file included
- ✅ Security headers configured
- ✅ Build optimization enabled
- ✅ **Enterprise Contact Form System** with spam protection, email notifications, and data logging

## 📋 Contact Form Features

### 🛡️ Spam Protection
- **hCaptcha** human verification
- **Honeypot** field detection
- **Rate limiting** (3 submissions/hour per IP)
- **Content filtering** for spam patterns
- **Input sanitization** to prevent XSS

### 📧 Email System
- **User confirmation** emails with professional templates
- **Admin notifications** with all submission details
- **Multiple email providers** supported (Resend, SendGrid, SMTP)
- **Responsive HTML** email templates

### 📊 Data Management
- **Google Sheets** integration for automatic logging
- **Comprehensive validation** on all inputs
- **Sanitized data** storage
- **Privacy compliant** processing

### ⚡ Performance
- **Serverless** API routes optimized for Vercel
- **Client-side validation** for instant feedback
- **Progressive enhancement** for accessibility
- **Mobile-responsive** design

📖 **[Complete Setup Guide](./CONTACT_FORM_SETUP.md)** - Follow the detailed guide to configure email services, captcha, and optional Google Sheets integration.

## Quick Deploy to Vercel

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Production ready"
   git push origin main
   ```

2. **Deploy on Vercel:**
   - Go to [vercel.com](https://vercel.com)
   - Connect your GitHub repository
   - Click "Deploy" (no configuration needed!)

3. **Or use Vercel CLI:**
   ```bash
   npm i -g vercel
   vercel
   ```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
