# Kayak Tigre Website Content Management Guide

This guide explains how to update the website content, add images, and troubleshoot common issues.

## Updating Content

### Services and Blog Posts
The content for services and blog posts is located in the `content` directory:
- Services: `content/services/`
- Blog posts: `content/blog/`

Each content file should be in Markdown format (`.md`) with the following structure:
```markdown
---
title: "Your Title"
date: "2024-02-19"
description: "Brief description"
image: "https://your-image-host.com/image.jpg"  # Card preview image
---

Your content goes here...
```

The `image` in the front matter is used as the preview image in the services/blog list view. It will appear as a card header with these properties:
- Fixed height of 300px
- Object-fit: cover (maintains aspect ratio)
- Appears above the title and description
- Hover effect with slight elevation

For content images within the article, use the figure shortcode as described below.

### Adding Images

#### Option 1: External Image Hosting (Recommended)
Using external image hosting services is preferred as it reduces repository size and improves site performance.

Recommended services:
1. [PostImages](https://postimages.org/) - Free, no registration required
2. [Imgur](https://imgur.com/) - Popular, reliable
3. [ImgBB](https://imgbb.com/) - Free, keeps images indefinitely
4. [Cloudinary](https://cloudinary.com/) - Professional option with free tier

To use external images:
1. Upload your image to any of the services above
2. Copy the direct image link
3. Use Hugo's figure shortcode in your markdown:
   ```markdown
   {{< figure src="https://your-image-host.com/image.jpg" alt="Image description" class="img-fluid rounded shadow mb-4" >}}
   ```

For more image styling options, refer to the [Hinode Bootstrap Elements guide](https://demo.gethinode.com/en/blog/bootstrap-elements/#image).

#### Option 2: Local Images
For images that must be in the repository:
1. Place optimized images in the `static/images/` directory
2. Reference using relative paths with Hugo's figure shortcode:
   ```markdown
   {{< figure src="/images/your-image.jpg" alt="Image description" class="img-fluid rounded shadow mb-4" >}}
   ```

Common Bootstrap image classes:
- `img-fluid`: Responsive image that scales with parent width
- `rounded`: Adds rounded corners
- `shadow`: Adds a subtle shadow effect
- `mb-4`: Adds margin bottom spacing (used for vertical spacing between images)

#### Image Optimization Tools
Before uploading images, optimize them using these services:

Online tools:
1. [TinyPNG](https://tinypng.com/) - Best for PNG and JPEG
2. [Squoosh](https://squoosh.app/) - Google's web-based image optimizer
3. [ImageOptim Web](https://imageoptim.com/online) - Simple and effective
4. [Compressor.io](https://compressor.io/) - Supports multiple formats

Recommendations:
- Image format: PNG for graphics, JPEG for photos
- Maximum file size: 800KB
- Optimal dimensions: Max width 1200px for full-width images
- Use WebP format when possible for better compression

### Embedding Instagram Posts
To embed an Instagram post:

1. Go to the Instagram post you want to embed
2. Click the "..." (more options) button
3. Select "Embed"
4. Copy the provided code
5. Paste it in your markdown content:

Example:
```html
<blockquote class="instagram-media" data-instgrm-permalink="https://www.instagram.com/p/EXAMPLE/">
<!-- Instagram embed code -->
</blockquote>
```

## Troubleshooting Build Issues

### If Your Changes Don't Appear
1. After pushing changes, wait a few minutes for the build to complete
2. Check the build status:
   - Go to [Actions](https://github.com/KirillY/kayak-tigre/actions)
   - Look for your recent workflow run
   - If it's red (failed), proceed to next steps

### Identifying Issues
1. Visit the [Commits page](https://github.com/KirillY/kayak-tigre/commits/main)
2. Find your latest commit
3. Review the changes:
   - Green highlights show added content
   - Red highlights show removed content
4. Common issues:
   - Missing or incorrect front matter in markdown files
   - Broken image links
   - Invalid HTML in content
   - Syntax errors in markdown

### Automated Tests
The site has 18 basic page tests that must pass before deployment. If any test fails:
1. The site will remain on the previous working version
2. Check the Actions log for specific test failures
3. Fix the identified issues
4. Push your changes again

For persistent issues or questions, please contact the site administrator.
