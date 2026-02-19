

## Expand Crisis Hotlines with Verified Global Numbers

Update `src/pages/Hotlines.tsx` to include accurate, researched crisis hotline numbers for 35+ countries, with strong Southeast Asia coverage. All numbers are cross-referenced from FindAHelpline.com, OpenCounseling, and official organization websites.

### Countries and Verified Numbers

**Southeast Asia (10 countries):**
- **Philippines** -- HOPELINE (02) 8804-4673, In Touch Crisis Line +63 2 8893 7603, NCMH Crisis Hotline 1800-1888-1553 (all 24/7)
- **Indonesia** -- Healing119 Hotline 119 (24/7), Into The Light Indonesia 021-7884-5555
- **Thailand** -- Social Help Center 1300 (24/7), Samaritans of Thailand 02-113-6789
- **Malaysia** -- MIASA Crisis Helpline 1-800-18-0066 (24/7), Befrienders KL 03-7627-2929 (24/7)
- **Singapore** -- Samaritans of Singapore 1767 (24/7), National Mindline 1771
- **Vietnam** -- HOPE Suicide Prevention 0865-044-400, National Child Helpline 111 (24/7)
- **Myanmar** -- We Are All Ears 09-777-206-035
- **Cambodia** -- Child Helpline Cambodia 1280 (24/7), TPO Cambodia 017-222-372
- **Brunei** -- Mental Health Helpline 145
- **Laos** -- Lao Women's Union Hotline 1362

**East Asia (5):**
- Japan, South Korea, China, Taiwan, Hong Kong

**South Asia (5):**
- India, Pakistan, Bangladesh, Sri Lanka, Nepal

**Europe (8):**
- Germany, France, Spain, Italy, Netherlands, Sweden, Ireland, Switzerland

**Americas (5):**
- Mexico, Brazil, Argentina, Colombia, New Zealand

**Middle East and Africa (4):**
- South Africa, Nigeria, Kenya, UAE

Plus the existing 4 (US, UK, Canada, Australia).

### Technical Details

**File changed:** `src/pages/Hotlines.tsx`

- Expand the `data` record from 4 to ~35+ countries with verified phone numbers, text/chat options where available, and hours
- Countries sorted alphabetically in the dropdown
- No structural/UI changes -- same Select dropdown and card layout
- Each entry includes: organization name, phone number, text option (if available), hours of operation

