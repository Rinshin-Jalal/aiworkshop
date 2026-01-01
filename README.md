<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Run and deploy your AI Studio app

This contains everything you need to run your app locally.

View your app in AI Studio: https://ai.studio/apps/drive/1Un7CmJbTu-oqPVMYhtZcKRoI-3cSb_js

## Run Locally

**Prerequisites:**  Node.js

### Setup

1. Install dependencies:
   ```bash
   npm install
   ```

2. Set up environment variables by creating a `.env.local` file:

   ```bash
   # Gemini API for AI recommendations
   GEMINI_API_KEY=your_gemini_api_key

   # Supabase for database (required for real data persistence)
   # Get these from https://supabase.com/dashboard
   VITE_SUPABASE_URL=your_supabase_project_url
   VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
   ```

3. **Set up Supabase database:**
   - Create a new project at [supabase.com](https://supabase.com)
   - Go to the SQL Editor and run the schema from `supabase/schema.sql`
   - Copy your Project URL and Anon Key from Project Settings > API
   - Add them to your `.env.local` file

4. Run the app:
   ```bash
   npm run dev
   ```
