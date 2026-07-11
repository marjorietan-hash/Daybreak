# BMI MD — Discovery & Launch Tracker (shared, live)

A single-page web app for the BMI MD account team: a live Discovery Tracker,
Setup Work & Time model, and Gantt to launch. Everyone edits the **same** data
and changes sync in real time via Firebase Firestore. Access is gated by a
shared team password. Hosted on Vercel, code in GitHub.

```
bmimd-tracker-app/
├── index.html        the app (UI + logic)
├── config.js         your Firebase web config + shared login email  ← EDIT THIS
├── defaults.js       starting content (seeded on first run, used by Reset)
├── firestore.rules   security rules (auth required)
├── .gitignore
└── README.md         this file
```

There is **no build step** — it's plain HTML/JS loading Firebase from a CDN.

---

## How it works (30-second version)

- The whole tracker lives in one Firestore document: `trackers/bmimd`.
- The app subscribes to that document; any edit writes back (debounced ~0.6s)
  and every open browser updates within about a second.
- The team signs in with **one shared Email/Password account**. Firestore rules
  require a signed-in user, so the password genuinely protects the data, not
  just the page.

---

## One-time setup

### 1. Create the Firebase project
1. Go to <https://console.firebase.google.com> → **Add project** (name it e.g. `bmimd-tracker`).
2. In the project, click **Build → Firestore Database → Create database**.
   - Start in **Production mode** (rules below will lock it down).
   - Pick a location near your team (e.g. `asia-southeast1`).

### 2. Turn on the shared login
1. **Build → Authentication → Get started**.
2. Enable the **Email/Password** provider (leave "Email link" off).
3. Go to the **Users** tab → **Add user**:
   - Email: `team@bmimd-tracker.app` (must match `SHARED_EMAIL` in `config.js`)
   - Password: **choose your team password** — this is what everyone types on the login screen.
4. Share that password with the team through a secure channel (not email/Slack in plain text if you can avoid it).

### 3. Register a web app & copy the config
1. Project **Settings** (gear icon) → **General** → **Your apps** → **Web** (`</>`).
2. Register the app (nickname `bmimd-tracker-web`). Firebase shows a `firebaseConfig` block.
3. Copy those values into **`config.js`** (replace every `PASTE_...`).
   > These values are **not secret** — they only identify your project and are safe to commit. Your data is protected by the rules + login, not by hiding this config.

### 4. Publish the security rules
- Easiest: **Firestore Database → Rules** tab → paste the contents of `firestore.rules` → **Publish**.
- Or with the CLI: `npm i -g firebase-tools`, `firebase login`, `firebase deploy --only firestore:rules`.

### 5. Push to GitHub
```bash
cd bmimd-tracker-app
git init
git add .
git commit -m "BMI MD tracker"
git branch -M main
git remote add origin https://github.com/<you>/bmimd-tracker.git
git push -u origin main
```

### 6. Deploy on Vercel
1. <https://vercel.com> → **Add New… → Project** → import the GitHub repo.
2. Framework preset: **Other**. Root directory: `./`. Build command: **none**. Output: leave default.
3. **Deploy.** You'll get a URL like `https://bmimd-tracker.vercel.app`.
4. **Add your Vercel domain to Firebase Auth:** Firebase Console → Authentication → **Settings → Authorized domains → Add domain** → paste your `*.vercel.app` domain (and any custom domain). Without this, login is blocked on the live site.

Open the URL, enter the team password, and you're live. The first load seeds the
tracker from `defaults.js`; after that the live document is the source of truth.

---

## Everyday use

- **Edit** any cell — it saves and syncs automatically. The dot by "Synced" turns amber while saving.
- **Status** chips on each discovery topic drive the progress counter.
- **Save file / Load file** — export or restore a JSON backup snapshot.
- **Tracker CSV** — discovery grid for Excel.
- **Reset** — rewrites the shared tracker to the starting template (affects everyone; use with care).
- **Sign out** — top right.

### Rotating the password
Firebase Console → Authentication → Users → the shared user → reset password.
Everyone re-enters the new one. (Anyone still signed in stays in until they sign out.)

---

## Security notes — read these

- **The shared-account model is convenient but coarse.** Everyone uses one login,
  so Firestore can't tell teammates apart and there's no per-person audit trail.
  For confidential client data this is acceptable for a small internal team, but
  if you later want individual accountability, switch to per-person Google
  sign-in restricted to `@hirebooth.com` (ask and I'll wire it up — it's a small change).
- **Concurrent edits are last-write-wins** at the document level. With live sync
  everyone sees the latest, but if two people edit *different cells within the
  same ~0.6s window*, the later save wins. Fine for meeting-style use; not built
  for heavy simultaneous editing.
- **Restrict the API key** (recommended): Google Cloud Console → APIs & Services →
  Credentials → your browser key → set **HTTP referrers** to your Vercel domain(s).
  This stops the key being reused from other sites.
- **Never commit the team password** anywhere in the repo. `config.js` holds the
  shared *email* and project config only — the password lives solely in Firebase Auth.
- Turn on Firestore **backups** (Firebase Console → Firestore → Backups) if you
  want point-in-time recovery beyond the manual JSON export.
