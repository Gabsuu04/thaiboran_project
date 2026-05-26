# Thai Boran - Quick Setup Guide

## Issue: PowerShell Execution Policy

The PowerShell execution policy is blocking npm commands. Here are two ways to fix this:

### Solution 1: Run Command Prompt Instead (Quickest)

**Do this:**
1. Click Start
2. Type `cmd` and press Enter
3. Run these commands in Command Prompt (not PowerShell):

```cmd
cd /d c:\Users\Gabriel\thaiburan-main
npm install
npm run dev
```

Then open your browser to: http://localhost:5173

---

### Solution 2: Allow PowerShell Scripts (Permanent)

If you want to use PowerShell, run it as Administrator:

1. Right-click PowerShell → "Run as Administrator"
2. Type this command:
```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```
3. Type `Y` and press Enter
4. Now npm will work in PowerShell

---

## Quick Start (After fixing above)

```cmd
cd /d c:\Users\Gabriel\thaiburan-main

# Install dependencies
npm install

# Start React development server
npm run dev
```

Open: http://localhost:5173

---

## Folder Locations

**Project folder:** `c:\Users\Gabriel\thaiburan-main`

**React files:** `resources/js/`
**Styles:** `resources/css/index.css`
**Laravel API:** `app/Http/Controllers/`

---

## Quick Commands Reference

```cmd
# Install Node dependencies
npm install

# Start React dev server (hot reload)
npm run dev

# Build for production
npm run build
```

---

**Note:** Use Command Prompt (cmd) if you continue having PowerShell issues!
