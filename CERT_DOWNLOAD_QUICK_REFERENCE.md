# Certificate Download Form - Quick Reference

## 🎯 What Was Done

### ✅ Replaced Firebase with MinIOrange
- Firebase Phone Auth → MinIOrange OTP API
- Server-side OTP handling via `/api/cert-otp`
- Server-side OTP verification via `/api/cert-verify`

### ✅ Improved OTP Input UI
- **Old:** Single text input with reveal animation
- **New:** 6 individual boxes with better UX
  - Type to fill boxes (auto-advance)
  - Paste entire OTP (auto-fills all boxes)
  - Auto-submit when complete
  - Still has manual "Verify OTP" button

### ✅ Fixed 6-Digit OTP
- Consistent format (not variable)
- Always 6 digits (never 4 or 8)
- Easy to enter and paste

### ✅ Limited to KSH Hosur I
- Button shows ONLY on `/ksh-hosur-i` page
- Hidden from all other park pages
- Conditional rendering in `ParkInfoBase.jsx`

## 📁 File Structure

```
src/
  app/
    Components/
      parkComponents/
        OtpInput.jsx                    ← NEW (6-box OTP input)
        CertDownloadFormStep1.jsx       ← UPDATED (MinIOrange OTP send)
        CertDownloadFormStep2.jsx       ← UPDATED (MinIOrange verification + new OTP component)
        CertDownloadModal.jsx           ← No changes needed
        ParkInfoBase.jsx                ← UPDATED (ksh-hosur-i only)
    api/
      cert-otp/
        route.js                        ← UPDATED (MinIOrange API call)
      cert-verify/
        route.js                        ← UPDATED (MinIOrange verification + email)

public/
  certifications/
    README.md                           ← Instructions for RAR file
    ksh-certifications.rar              ← TO BE ADDED BY USER
```

## 🔧 MinIOrange Configuration

Already set in `.env.local` and `.env.production`:
```
MINIORANGE_CUSTOMER_KEY=390195
MINIORANGE_API_KEY=wEtUPpJEhmZL764O134qVaU2jLV7E85p
MINIORANGE_TOKEN_KEY=bIed1xmqeZ3NUlck
```

## 📧 SMTP Configuration

Already set:
```
SMTP_HOST=zprosmtp.logix.in
SMTP_PORT=587
SMTP_USER=leasing@kshinfra.com
SMTP_PASS=lsG2025*
```

## 🚀 User Journey

### Step 1: Fill Form
```
[ksh-hosur-i page]
    ↓
[Click "Download Certifications"]
    ↓
Modal Opens:
  - Name
  - Email
  - Phone (+91 format)
  - Organization (optional)
    ↓
[Click "Get OTP"]
    ↓
MinIOrange sends SMS with 6-digit code
```

### Step 2: Enter OTP
```
Modal shows 6 boxes:
  [1] [2] [3] [4] [5] [6]

User can:
- Type: 1 → 2 → 3 → 4 → 5 → 6 (auto-advances)
- Paste: Paste "123456" → auto-fills all + submits
    ↓
Auto-submit OR click "Verify OTP"
```

### Step 3: Download & Email
```
[Verification successful]
    ↓
Download starts: ksh-certifications.rar
Email sent to user with download link
    ↓
Success page with:
  - Re-download button
  - Close button
  - Fallback link if download failed
```

## 🎨 OTP Input Component Props

```javascript
<OtpInput
  value={otp}                    // Current OTP string
  onChange={(val) => {...}}      // Called on each digit change
  onSubmit={(val) => {...}}      // Called when 6 digits complete
  disabled={isVerifying}         // Disable during verification
  length={6}                     // Number of boxes (fixed to 6)
/>
```

## 🧪 Quick Test Steps

1. **Navigation:**
   - ✅ Visit `/ksh-hosur-i`
   - ✅ "Download Certifications" button visible
   - ✅ Visit other park (e.g., `/ksh-chakan-i`)
   - ✅ "Download Certifications" button NOT visible

2. **Form Entry:**
   - ✅ Fill Name: "John Doe"
   - ✅ Fill Email: "john@example.com"
   - ✅ Fill Phone: "9876543210" (auto-formats to +919876543210)
   - ✅ Fill Organization: "Acme Corp" (optional)

3. **OTP Input:**
   - ✅ Type: Each digit auto-advances to next box
   - ✅ Paste: Paste 6 digits, all boxes fill
   - ✅ Auto-submit: Completes when all 6 boxes filled
   - ✅ Manual submit: Also works with button

4. **Success:**
   - ✅ Download starts automatically
   - ✅ Email received with link
   - ✅ RAR file extracts to 3 PDFs

## ⚠️ Important Notes

1. **RAR File Required:**
   - Create `/public/certifications/ksh-certifications.rar`
   - Must contain 3 PDF files
   - Will be downloaded by users

2. **MinIOrange SMS:**
   - Real phone number required
   - OTP sent via SMS to that number
   - 6-digit code, valid for ~5 minutes

3. **Email Verification:**
   - User receives download link via email
   - Can download anytime
   - Backup if initial download fails

4. **Test vs Production:**
   - MinIOrange credentials work in both environments
   - Email uses SMTP (same config in both)
   - Make sure RAR file exists before testing

## 📝 API Response Examples

### OTP Send (`/api/cert-otp`)
```json
✅ Success:
{
  "success": true,
  "transactionId": "txn_123456"
}

❌ Error:
{
  "success": false,
  "error": "Failed to send OTP"
}
```

### OTP Verify (`/api/cert-verify`)
```json
✅ Success:
{
  "success": true
}

❌ Error (invalid OTP):
{
  "success": false,
  "error": "OTP verification failed"
}
```

## 🔒 Security Notes

- ✅ Phone number validated client-side (7-15 digits)
- ✅ OTP verification happens server-side
- ✅ Email sent after successful verification
- ✅ No OTP exposure in frontend code
- ✅ 30-second resend cooldown prevents spam

## 🆘 Troubleshooting

| Issue | Solution |
|-------|----------|
| OTP not sending | Check MinIOrange credentials in env |
| Email not received | Check SMTP config, verify inbox |
| Download not starting | Check `/public/certifications/ksh-certifications.rar` exists |
| Button not showing | Verify you're on `/ksh-hosur-i` page |
| OTP boxes stuck | Refresh page, try again |
| Paste not working | Use modern browser (Chrome, Firefox, Safari, Edge) |

---

**Last Updated:** 2026-04-29  
**Status:** ✅ Ready for Testing
