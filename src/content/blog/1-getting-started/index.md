---
title: Getting started
description: Hit the ground running.
publicationDate: 2024-11-03T21:50:42Z
---

### Prerequisites

- **Node.js** - `v18.17.1` or `v20.3.0` or higher. (`v19` is not supported).
- **Text Editor** - We recommend [Visual Studio Code](https://code.visualstudio.com/) with the [Astro](https://marketplace.visualstudio.com/items?itemName=astro-build.astro-vscode) extension.
- **Terminal** - We'll use the terminal to run `git` commands.
- **Git** - Used to pull and push your project to [GitHub](https://github.com/).

## Download and install Astro Byte

There are a couple ways to download the template. We recommend using GitHub's "Use this template" feature, but you can also clone the repository directly.

### Using GitHub's "Use this template" feature
1. On [Astro Byte's GitHub page](https://github.com/trevortylerlee/astro-byte), click the "Use this template" button on the top right of the page and select "Create a new repository".

2. Name your repostiroy and click "Create repository from template".

3. Once your repository is created, you can clone it to your local machine. Click the green "Code" button and copy the HTTPS URL to your clipboard.

4. Open your terminal and run the following command, replacing the link with the HTTPS URL you copied in the last step.

```sh frame="none"
git clone https://github.com/your-username/new-repository
```

5. Navigate to the project directory and install the dependencies.

```sh frame="none"
cd new-repository
npm install
```

6. For search functionality to work in dev mode, you need to run the build command at least once.

```sh frame="none"
npm run build
```

7. Start the development server and navigate to [localhost:4321](http://localhost:4321) in your web browser.

```sh frame="none"
npm run dev
```

## Customize the website metadata

To change the website metadata, edit `src/siteConfig.ts`.

```ts title="src/siteConfig.ts"
export const SITE: SiteConfiguration = {
  title: "Astro Byte",
  description: "Fast & minimal theme for Astro.",
  url: "https://astro-byte.vercel.app",
  author: "Trevor Tyler Lee",
  locale: "en-CA",
};
```

| Field        | Req | Description                                          |
| :----------- | :-- | :--------------------------------------------------- |
| title        | Yes | Displayed in header and footer. Used in SEO and RSS. |
| description  | Yes | Used in SEO and RSS.                                 |
| url          | Yes | Used in SEO and RSS.                                 |
| author       | Yes | Used in SEO and RSS.                                 |
| locale       | Yes | Determines date formatting. Used in SEO and RSS.     |

---

## Customize navigation bar links

```ts title="src/siteConfig.ts"
export const NAV_LINKS: NavigationLinks = {
  blog: {
    path: "/blog",
    label: "blog",
  },
  projects: {
    path: "/projects",
    label: "projects",
  },
};
```

To add a link to the navigation bar, create a new object with a `path` and a `label` and add it to the `NAV_LINKS` object.

In this example, we'll add a new "About" page to the site.

1. Create a new file called `about.astro` in `src/pages`.

```frame="none" ins={7}
├── src
│   ├── pages
│   │   ├── blog
│   │   │   ├── [...slug].astro
│   │   │   └── index.astro
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── projects
│   │   │   └── index.astro
│   │   ├── robots.txt.ts
│   │   └── rss.xml.js
```

2. Add your content to `about.astro`. Use the `SeoPage.astro` component to configure the metadata for the page.

```astro title="src/pages/about.astro"
---
import BaseLayout from "@/layouts/BaseLayout.astro"
import SeoPage from "@/components/SeoPage.astro"
---

<BaseLayout>
    <SeoPage slot="head" title="About" />
    <h1>About</h1>
    <p>This is my about page.</p>
</BaseLayout>

```

## Add your social media links

```ts title="src/siteConfig.ts"
export const SOCIAL_LINKS: SocialLinks = {
  email: {
    label: "Email",
    url: "mailto:ttl@trevortylerlee.com",
  },
  github: {
    label: "GitHub",
    url: "https://github.com/trevortylerlee",
  },
  twitter: {
    label: "Twitter",
    url: "https://twitter.com/boogerbuttcheek",
  },
};
```

## Deploy the site

To set up RSS and Giscus, it's easier if the site is deployed and has a URL for you to use. Instantly deploy to Vercel or Netlify by clicking the buttons below.

<div class="flex gap-2">
  <a target="_blank" aria-label="Deploy with Vercel" href="https://vercel.com/new/clone?repository-url=https://github.com/trevortylerlee/astro-byte">
    <img src="/deploy_vercel.svg" />
  </a>
  <a target="_blank" aria-label="Deploy with Netlify" href="https://app.netlify.com/start/deploy?repository=https://github.com/trevortylerlee/astro-byte">
    <img src="/deploy_netlify.svg" />
  </a>
</div>

To deploy manually see [Astro's docs](https://docs.astro.build/en/guides/deploy/).

## Set up RSS

Change the `site` option to the deployed site's URL.

```js title="astro.config.mjs" {2}
export default defineConfig({
  // Change site to your deployed URL
  site: "https://astro-byte.vercel.app",
  integrations: [
    tailwind(),
    sitemap(),
    pagefind(),
    expressiveCode({
      themes: ["min-dark"],
    }),
  ],
});
```

## Set up Giscus

Follow the steps at [giscus.app](https://giscus.app). Once you get your  custom Giscus script from that site, go to `Giscus.astro` and replace that script with your own.

```js title="src/components/Giscus.astro"
<script
  is:inline
  src="https://giscus.app/client.js"
  data-repo="trevortylerlee/astro-byte"
  data-repo-id="R_kgDOL_6l9Q"
  data-category="Announcements"
  data-category-id="DIC_kwDOL_6l9c4Cfk55"
  data-mapping="pathname"
  data-strict="0"
  data-reactions-enabled="1"
  data-emit-metadata="0"
  data-input-position="top"
  data-theme="preferred_color_scheme"
  data-lang="en"
  data-loading="lazy"
  crossorigin="anonymous"
  async
></script>

```

To change the Giscus themes used, edit the `setGiscusTheme` function in `BaseHead.astro`.

```js title="src/components/BaseHead.astro" {10}

const setGiscusTheme = () => {
  const giscus = document.querySelector(".giscus-frame");

  const isDark = document.documentElement.classList.contains("dark");

  if (giscus) {
    const url = new URL(giscus.src);
    // Change "dark" and "light" to other Giscus themes
    url.searchParams.set("theme", isDark ? "dark" : "light");
    giscus.src = url.toString();
  }
};
```
