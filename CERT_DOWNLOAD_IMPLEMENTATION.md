# Certificate Download Form - MinIOrange Integration

## Overview
Successfully replaced Firebase Phone Auth with MinIOrange OTP service for the certificate download feature. Improved UX with a 6-digit OTP input component that supports paste functionality and auto-submit.

## Changes Made

### 1. **New Components Created**

#### `src/app/Components/parkComponents/OtpInput.jsx` ✅
- 6-digit OTP input with individual boxes
- Auto-focuses on first box on mount
- Keyboard navigation (arrow keys, backspace)
- Paste functionality: detects paste, fills multiple boxes, and auto-submits if complete
- Consistent 6-digit format (fixed digit length)
- Better visual feedback with border color transitions

### 2. **Updated Components**

#### `src/app/Components/parkComponents/CertDownloadFormStep1.jsx` ✅
**Changes:**
- Removed Firebase imports and RecaptchaVerifier
- Replaced Firebase OTP sending with MinIOrange API call
- Removed recaptcha container div
- Phone number still normalizes to +91 format for Indian numbers
- Server-side OTP handling via `/api/cert-otp` endpoint

#### `src/app/Components/parkComponents/CertDownloadFormStep2.jsx` ✅
**Changes:**
- Replaced Firebase confirmation with MinIOrange verification
- Integrated new OtpInput component (replaces text input)
- OTP auto-submits when 6 digits are entered
- Manual submit button still available
- Server-side OTP verification via `/api/cert-verify` endpoint
- Email sent after successful verification with download link

#### `src/app/Components/parkComponents/ParkInfoBase.jsx` ✅
**Changes:**
- Certificate download button now appears ONLY on ksh-hosur-i page
- Conditional rendering: `{pathname.includes("ksh-hosur-i") ? <button>... : null}`
- Button hidden from all other park pages

### 3. **API Routes Updated**

#### `src/app/api/cert-otp/route.js` ✅
**Functionality:**
- Receives phone number from client
- Calls MinIOrange API endpoint: `https://api.miniorange.com/auth/v1/otp/send`
- Uses credentials from env:
  - `MINIORANGE_CUSTOMER_KEY`
  - `MINIORANGE_API_KEY`
- Sends fixed **6-digit OTP** (configured in request)
- Returns transaction ID for reference
- Error handling with descriptive messages

#### `src/app/api/cert-verify/route.js` ✅
**Functionality:**
- Receives: `{ phone, otp, name, email, organization }`
- Verifies OTP with MinIOrange API: `https://api.miniorange.com/auth/v1/otp/verify`
- On successful verification:
  - Sends email with download link via SMTP
  - Email includes download URL and extraction instructions
- Graceful failure if email not configured

### 4. **Certifications Setup**

#### `public/certifications/` ✅
- Created folder structure ready for certificates
- README.md with instructions for creating RAR file
- Download link: `https://www.kshinfra.com/certifications/ksh-certifications.rar`

**To complete:**
1. Create RAR file containing 3 PDF certifications
2. Name it: `ksh-certifications.rar`
3. Place in: `/public/certifications/`

## Configuration

### Environment Variables (Already Set)
```
MINIORANGE_CUSTOMER_KEY=390195
MINIORANGE_API_KEY=wEtUPpJEhmZL764O134qVaU2jLV7E85p
MINIORANGE_TOKEN_KEY=bIed1xmqeZ3NUlck
```

### SMTP Configuration (Already Set)
```
SMTP_HOST=zprosmtp.logix.in
SMTP_PORT=587
SMTP_USER=leasing@kshinfra.com
SMTP_PASS=lsG2025*
```

## User Flow (Complete)

### Step 1: Details Form
1. User clicks "Download Certifications" button (ksh-hosur-i only)
2. Modal opens with form:
   - Full Name *
   - Email Address *
   - Phone Number * (formats to +91)
   - Organization (optional)
3. Click "Get OTP"
4. MinIOrange sends 6-digit OTP to phone

### Step 2: OTP Verification
1. Modal shows OTP input (6 boxes)
2. User enters/pastes 6-digit code
3. Auto-submits on complete entry OR click "Verify OTP"
4. On success:
   - Download starts automatically
   - Email sent with download link
   - Success page shown with:
     - Re-download button
     - Close button
     - Link if download didn't start

## OTP Input Features

### Standard Entry
- Click box and type
- Auto-advances to next box
- Backspace moves to previous box

### Paste Entry
- Paste 6 digits anywhere
- Automatically fills all boxes
- Auto-submits immediately
- Example: Paste "123456" → instant submission

### Keyboard Navigation
- ← Arrow Left: move to previous box
- → Arrow Right: move to next box
- Backspace: clear and move back
- Numbers only: non-numeric keys rejected

## Testing Checklist

- [ ] Build passes: `npm run build`
- [ ] Download button visible ONLY on ksh-hosur-i page
- [ ] Download button hidden on all other park pages
- [ ] Form validation works:
  - [ ] Name validation (letters & spaces only)
  - [ ] Email validation
  - [ ] Phone validation (7-15 digits)
- [ ] OTP input accepts 6 digits
- [ ] Typing works (auto-advance between boxes)
- [ ] Paste works (auto-fill and submit)
- [ ] MinIOrange OTP sends successfully
- [ ] Verification succeeds with valid OTP
- [ ] Download triggers automatically
- [ ] Email received with download link
- [ ] RAR file downloads and extracts properly
- [ ] All 3 PDFs in extracted folder
- [ ] Resend OTP button disabled for 30 seconds
- [ ] Edit details button takes back to form

## Technical Details

### OTP Length
- **Fixed 6 digits** (consistent, not variable)
- Input boxes: 6 total
- No support for variable lengths

### Security
- OTP verification happens server-side
- Phone number normalized but not validated against real phone provider
- Email-based confirmation link available as backup
- 30-second cooldown on OTP resend

### Browser Compatibility
- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile-responsive (boxes scale for mobile)
- Paste handling works on all modern browsers
- InputMode="numeric" for mobile keyboard

## Files Modified
1. ✅ src/app/Components/parkComponents/OtpInput.jsx (NEW)
2. ✅ src/app/Components/parkComponents/CertDownloadFormStep1.jsx
3. ✅ src/app/Components/parkComponents/CertDownloadFormStep2.jsx
4. ✅ src/app/Components/parkComponents/ParkInfoBase.jsx
5. ✅ src/app/api/cert-otp/route.js
6. ✅ src/app/api/cert-verify/route.js
7. ✅ public/certifications/ (NEW - folder structure)
8. ✅ public/certifications/README.md (NEW)

## Build Status
✅ **Build Successful** - No errors or TypeScript issues

## Next Steps for User
1. Create RAR file with 3 certification PDFs
2. Place at: `/public/certifications/ksh-certifications.rar`
3. Test the form on ksh-hosur-i page
4. Verify MinIOrange OTP sends to test phone
5. Confirm download and email receipt

---

**Implementation Date:** 2026-04-29  
**Status:** Ready for Testing  
**Firebase Dependency:** ✅ Removed  
**MinIOrange Integration:** ✅ Complete
