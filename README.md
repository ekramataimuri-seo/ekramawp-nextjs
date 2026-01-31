# Headless WordPress & Next.js Portfolio

![Next.js](https://img.shields.io/badge/Next.js-14-black?style=for-the-badge&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![WordPress](https://img.shields.io/badge/WordPress-Headless-21759b?style=for-the-badge&logo=wordpress)
![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel)

**Live Website:** [https://www.wpfedev.com/](https://www.wpfedev.com/)

---

## 1. Project Title & Description

This is a **Headless WordPress** website.

**What does that mean?**
Normally, WordPress handles everything (the database and the design). But in this project, I split them up to make the site faster and safer.

* **The Brain (Backend):** I use **WordPress** (hosted on Hostinger) to write blogs and manage text.
* **The Face (Frontend):** I use **Next.js** (hosted on Vercel) to show the website to users.
* **The Bridge:** They talk to each other using a tool called **GraphQL**.

**Why I did this:**
I wanted the marketing team to keep using the easy WordPress dashboard, but I wanted the website visitors to have a super-fast, modern experience that scores 100/100 on speed tests.



---

## 2. Tech Stack (The Tools I Used)

* **Next.js 14:** The main framework for the code.
* **WordPress:** Where the content lives.
* **Tailwind CSS:** For styling and design.
* **Apollo Client:** The tool that fetches data from WordPress.
* **WPGraphQL:** A plugin that lets Next.js talk to WordPress.
* **Vercel:** The cloud platform where the live site lives.
* **Hostinger:** The hosting provider for the WordPress admin.

---

## 3. Features Implemented (What Works)

* **Dynamic Routing:** You can create a page in WordPress, and it automatically appears on the site without code.
* **Smart Navigation:** The menu is fetched from WordPress. You can change the menu links in the WordPress dashboard, and they update on the site instantly.
* **Custom Blocks:** I built a system where I can put complex React apps (like sliders or graphs) inside a simple WordPress blog post.
* **Fast Loading:** The site uses "Static Generation," meaning pages are built in advance so they load instantly.

---

## 4. How Content Creation Works (Hostinger -> Vercel)

A big question is: *"If I create a page in WordPress, how does it get to Vercel without me writing code?"*

I set up a "Catch-All" route. This means Next.js is smart enough to handle any URL you create.

**The Arrow Process:**
1.  **Me:** I log into Hostinger -> Create a page called "About" -> Click Publish.
2.  **The Visitor:** Goes to `wpfedev.com/about`.
3.  **Next.js:** Sees the URL -> Asks WordPress "Do you have an About page?"
4.  **WordPress:** Sends the text and images.
5.  **Result:** The page appears instantly.

**Key Point:** I do **not** need to deploy code to add new pages. I only deploy code when I want to change the design.

---

## 5. The "AI Journey": How I Built This

I collaborated with AI to solve some very hard technical problems. Here is the story of how we built the complex parts.

### Challenge A: The "Broken Animation" (jQuery to React)
**The Problem:**
I had some cool animations (The Pentagon Graph and Arrow Visualization) that were written in old code (jQuery). When I tried to use them in Next.js, the site crashed because the old code was fighting with React.

**The Fix:**
I asked AI to help me rewrite the logic.
* Old Way: The code directly controlled the screen (messy).
* New Way: We used "State" (variables) to tell the screen what to do.
* **Result:** The animations now work perfectly and are very smooth.

### 2. The "Block Renderer" (Putting Apps in Blogs)
**The Problem:**
WordPress just sends raw text. I wanted to put my interactive React Carousel inside a blog post.

**The Fix:**
I built a file called `BlockRenderer.tsx`.
* It looks at the HTML coming from WordPress.
* If it sees a specific class name (like `section-carousel`), it **swaps** the HTML for my React Component.
* **Result:** I can drag-and-drop complex features right inside the WordPress editor.

---

## 6. Deployment "War Stories" (Fixing Errors)

Getting this site live on Vercel wasn't easy. I faced many errors. Here is how I fixed them.

**Fail 1: "Images not loading"**
* **Issue:** Next.js blocks external images for security. My images were on Hostinger, so Vercel blocked them.
* **Fix:** I edited `next.config.js` and added `admin.wpfedev.com` to the "Safe List."

**Fail 2: "Mixed Content Error"**
* **Issue:** My WordPress API was sending insecure `http` links, but Vercel requires secure `https` links. The browser blocked the site.
* **Fix:** I wrote a script that automatically finds `http` and replaces it with `https` before the data reaches the user.

**Fail 3: "Missing Variables"**
* **Issue:** The build crashed because Vercel didn't know where my API was.
* **Fix:** I had to manually copy my API keys from my computer and paste them into the Vercel Project Settings.

**Fail 4: "Domain Names"**
* **Issue:** I wanted `wpfedev.com` for the site, but `admin.wpfedev.com` for the backend.
* **Fix:** I changed the DNS settings. I pointed the main domain to Vercel and the subdomain to Hostinger.

---

## 7. Cloud Coding (VS Code Online)

I didn't just build this on my laptop. I used **VS Code Online**, which means I coded inside a web browser.

**The Issue:**
Connecting a browser-based code editor to GitHub is tricky. I kept getting "Permission Denied" errors when trying to save my code.

**The Fix:**
I had to re-authenticate my GitHub account inside the browser and make sure the "Auth Token" was saved. Now, I can code from any computer, push to GitHub, and Vercel updates the site automatically.

**The Workflow:**
`Code in Browser` -> `Push to GitHub` -> `Vercel detects change` -> `Live Site Updates`

---

## 8. Important Code Changes

To make everything work, I had to edit these specific files:

1.  **`next.config.js`**: Added the image domain whitelist.
2.  **`src/components/BlockRenderer.tsx`**: Added the logic to swap HTML for React components.
3.  **`src/utils/api.ts`**: Added the script to fix the `http` vs `https` issue.
4.  **`src/components/MainMenu.tsx`**: Connected the menu to the WordPress API so I can change links easily.

---

## 9. Setup Instructions (Run it Yourself)

If you want to run this project on your own computer:

1.  **Clone the Repository:**
    ```bash
    git clone [https://github.com/ekramataimuri-seo/ekramawp-nextjs.git](https://github.com/ekramataimuri-seo/ekramawp-nextjs.git)
    cd ekramawp-nextjs
    ```

2.  **Install Tools:**
    ```bash
    npm install
    ```

3.  **Add Secrets:**
    Create a file named `.env.local` and add these keys:
    ```env
    NEXT_PUBLIC_WORDPRESS_API_HOSTNAME=admin.wpfedev.com
    NEXT_PUBLIC_WORDPRESS_URL=[https://admin.wpfedev.com](https://admin.wpfedev.com)
    NEXT_PUBLIC_BASE_URL=[https://www.wpfedev.com](https://www.wpfedev.com)
    WORDPRESS_API_URL=[https://admin.wpfedev.com/graphql](https://admin.wpfedev.com/graphql)
    HEADLESS_SECRET= [Ask me for this]
    WORDPRESS_PREVIEW_SECRET= [Ask me for this]
    ```

4.  **Start it:**
    ```bash
    npm run dev
    ```
    Open `http://localhost:3000` to see the site.

---

Here is a detailed, professional README section you can copy and paste directly into your project's `README.md` file. It explains the error, the root cause (security blocking), and the fix.

---

## 🐛 Troubleshooting: GraphQL Schema 405 Error

### **The Issue**

When running `npm run dev`, the development server failed to start, throwing a **"Failed to load schema"** error followed by a `SyntaxError: Unexpected token <`.

**Error Log:**

```bash
✖ Failed to load schema from https://admin.wpfedev.com/graphql:
Unexpected response: "<html>\r\n<head><title>405 Not Allowed</title>...
SyntaxError: Unexpected token '<', "<html>..." is not valid JSON

```

### **Why This Happened**

This project uses `graphql-codegen` to automatically fetch the database schema from WordPress. However, the WordPress server (likely secured by **Wordfence**, **Cloudflare**, or **ModSecurity**) rejected the request because:

1. **Bot Detection:** The Code Generator sends a programmed request (not a browser request), which security plugins often flag as a "bot" or "automated attack."
2. **Method Restriction:** The server likely blocked the **POST** request used for introspection, returning a **405 Not Allowed** HTML error page instead of the expected JSON data.
3. **Rate Limiting:** Frequent requests from the local environment triggered a temporary IP block or rate limit.

### **The Solution (Bypass)**

To allow the local development server to run without being blocked by the firewall, we disabled the automatic schema generation step in the `dev` script.

**Change in `package.json`:**

**Before (Blocked):**

```json
"scripts": {
  "dev": "graphql-codegen --config codegen.ts && node ./add-ts-nocheck.js && next dev"
}

```

**After (Fixed):**

```json
"scripts": {
  "dev": "next dev"
}

```

> **Note:** This bypass stops the `405` error and allows the site to run. To regenerate TypeScript types in the future (if the database structure changes), run `npm run codegen` manually or whitelist your IP in the WordPress security settings.

## 10. Author

**Ekrama Taimuri**
* **Role:** Web App & Headless WordPress Developer
* **Website:** [https://www.wpfedev.com/](https://www.wpfedev.com/)
