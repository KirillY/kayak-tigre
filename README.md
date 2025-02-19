# Content Management Guide 

This part of the guide explains how to update the website content, add images, and troubleshoot common issues.

## Updating Content

### Content Structure

The website content is organized in a multilingual structure with three languages (EN, ES, RU). Each language follows the same page hierarchy:

```
content/
├── en/                     # English content
│   ├── _index.md          # Home page
│   ├── about/
│   │   └── _index.md      # About section
│   ├── services/
│   │   ├── _index.md      # Services listing
│   │   └── delta-full-day.md
│   └── blog/
│       ├── _index.md      # Blog listing
│       └── 2025/
│           ├── _index.md  # Year archive
│           └── 02/
│               ├── _index.md      # Month archive
│               └── first-post.md
├── es/                     # Spanish content
│   └── [Same structure as English]
└── ru/                     # Russian content
    └── [Same structure as English]
```

Each language section contains 9 pages:
1. Home page (`_index.md`)
2. About section (`about/_index.md`)
3. Services section (`services/_index.md`)
4. Service page (`services/delta-full-day.md`)
5. Blog section (`blog/_index.md`)
6. Blog post (`blog/2025/02/first-post.md`)
7. Blog year archive (`blog/2025/_index.md`)
8. Blog month archive (`blog/2025/02/_index.md`)
9. Services index (`services/_index.md`)

### Services and Blog Posts
The content for services and blog posts is located in their respective directories under each language section:
- Services: `content/{lang}/services/`
- Blog posts: `content/{lang}/blog/`

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

# Developers Guide

This part describes how to install dependencies to start updating the site layout

### Prerequisites

Before you start development, ensure you have the following tools installed:

1. **Go (via asdf)**:
   ```bash
   # Install asdf-golang plugin
   asdf plugin add golang
   # Install latest Go version
   asdf install golang latest
   asdf global golang latest
   ```
   For more details, visit [asdf-golang](https://github.com/asdf-community/asdf-golang)

2. **Hugo**:
   - Follow the installation guide at [gohugo.io/installation](https://gohugo.io/installation/)
   - Ensure you install the extended version which includes SCSS support

3. **Hinode**:
   - Our site uses the Hinode theme, a modern Hugo theme
   - Documentation available at [gethinode/hinode](https://github.com/gethinode/hinode)

### Local Development Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/KirillY/kayak-tigre.git
   cd kayak-tigre
   ```

2. Install dependencies for E2E testing:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   hugo server
   ```

4. Run E2E tests:
   ```bash
   npm test
   ```

The site will be available at `http://localhost:1313` with hot-reload enabled.
