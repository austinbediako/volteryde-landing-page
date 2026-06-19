import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const RESEND_API_URL = "https://api.resend.com/emails";
const BASE_URL = "https://volteryde.com";

// Icons are served as static files from the Next.js public folder.
// <img> tags are the only reliable way to display icons in email clients —
// inline SVGs are stripped by Gmail and most other clients.
const ICONS = {
  check:    `${BASE_URL}/icons/check.svg`,
  tracking: `${BASE_URL}/icons/tracking.svg`,
  payment:  `${BASE_URL}/icons/payment.svg`,
  electric: `${BASE_URL}/icons/electric.svg`,
};

function buildEmailHtml(): string {
  const year = new Date().getFullYear();

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>You're on the Volteryde Waitlist!</title>
</head>
<body style="margin:0;padding:0;background:#f0f4f0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f4f0;padding:32px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border-radius:20px;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,0.12);">

          <!-- HEADER -->
          <tr>
            <td style="background:#1b3a1b;padding:32px 40px 28px;text-align:center;">
              <img src="${BASE_URL}/logotextwhite.png" alt="Volteryde" width="150" style="display:block;margin:0 auto;" />
            </td>
          </tr>

          <!-- HERO IMAGE -->
          <tr>
            <td style="background:linear-gradient(160deg,#1b3a1b 0%,#0d4d0d 60%,#086608 100%);text-align:center;padding:8px 0 0;">
              <img src="${BASE_URL}/assets/heroSectionImage.png" alt="Volteryde App" width="540" style="display:block;margin:0 auto;max-width:100%;" />
            </td>
          </tr>

          <!-- GREEN ACCENT BAR -->
          <tr>
            <td style="background:#0CCF0E;height:5px;font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- MAIN CONTENT -->
          <tr>
            <td style="background:#ffffff;padding:48px 48px 36px;">

              <!-- Checkmark + headline -->
              <table cellpadding="0" cellspacing="0" style="margin-bottom:4px;">
                <tr>
                  <td style="vertical-align:middle;padding-right:10px;">
                    <img src="${ICONS.check}" alt="" width="28" height="28" style="display:block;" />
                  </td>
                  <td style="vertical-align:middle;">
                    <h1 style="margin:0;font-size:34px;font-weight:900;color:#1b3a1b;line-height:1.15;">You're on the list!</h1>
                  </td>
                </tr>
              </table>
              <p style="margin:0 0 6px;font-size:13px;font-weight:600;letter-spacing:0.06em;color:#0CCF0E;text-transform:uppercase;">Waitlist confirmed</p>

              <p style="margin:20px 0 28px;font-size:16px;color:#595959;line-height:1.7;">
                Thank you for joining the Volteryde waitlist. We're building the smartest electric
                bus booking experience in Ghana — and you'll be one of the very first to get access
                when we launch on the <strong style="color:#1b3a1b;">App Store</strong> and
                <strong style="color:#1b3a1b;">Google Play</strong>.
              </p>

              <hr style="border:none;border-top:1px solid #efefef;margin:0 0 28px;" />

              <p style="margin:0 0 18px;font-size:11px;font-weight:800;letter-spacing:0.10em;color:#0CCF0E;text-transform:uppercase;">What you'll get</p>

              <!-- Feature 1 -->
              <table cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:18px;">
                <tr>
                  <td width="48" style="vertical-align:top;">
                    <div style="width:40px;height:40px;background:#f0fef0;border-radius:12px;text-align:center;line-height:40px;">
                      <img src="${ICONS.tracking}" alt="Tracking" width="22" height="22" style="display:inline-block;vertical-align:middle;" />
                    </div>
                  </td>
                  <td style="padding-left:14px;vertical-align:top;">
                    <p style="margin:0 0 3px;font-size:15px;font-weight:700;color:#1b3a1b;">Real-time Bus Tracking</p>
                    <p style="margin:0;font-size:14px;color:#737373;line-height:1.55;">Know exactly where your bus is — always. No more waiting in the dark.</p>
                  </td>
                </tr>
              </table>

              <!-- Feature 2 -->
              <table cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:18px;">
                <tr>
                  <td width="48" style="vertical-align:top;">
                    <div style="width:40px;height:40px;background:#f0fef0;border-radius:12px;text-align:center;line-height:40px;">
                      <img src="${ICONS.payment}" alt="Payment" width="22" height="22" style="display:inline-block;vertical-align:middle;" />
                    </div>
                  </td>
                  <td style="padding-left:14px;vertical-align:top;">
                    <p style="margin:0 0 3px;font-size:15px;font-weight:700;color:#1b3a1b;">Seamless Digital Payments</p>
                    <p style="margin:0;font-size:14px;color:#737373;line-height:1.55;">Pay from your phone in seconds — no cash, no queues, no stress.</p>
                  </td>
                </tr>
              </table>

              <!-- Feature 3 -->
              <table cellpadding="0" cellspacing="0" width="100%" style="margin-bottom:36px;">
                <tr>
                  <td width="48" style="vertical-align:top;">
                    <div style="width:40px;height:40px;background:#f0fef0;border-radius:12px;text-align:center;line-height:40px;">
                      <img src="${ICONS.electric}" alt="Electric" width="22" height="22" style="display:inline-block;vertical-align:middle;" />
                    </div>
                  </td>
                  <td style="padding-left:14px;vertical-align:top;">
                    <p style="margin:0 0 3px;font-size:15px;font-weight:700;color:#1b3a1b;">Guaranteed Seats on Electric Buses</p>
                    <p style="margin:0;font-size:14px;color:#737373;line-height:1.55;">Book ahead, ride green. Every seat, every time — guaranteed.</p>
                  </td>
                </tr>
              </table>

              <!-- CTA Button -->
              <table cellpadding="0" cellspacing="0" style="margin:0 auto 32px;">
                <tr>
                  <td style="background:#0CCF0E;border-radius:50px;">
                    <a href="https://volteryde.com" style="display:inline-block;padding:15px 40px;font-size:16px;font-weight:700;color:#ffffff;text-decoration:none;">Visit Volteryde.com &rarr;</a>
                  </td>
                </tr>
              </table>

              <p style="margin:0;font-size:13px;color:#aaa;text-align:center;line-height:1.6;">We'll only contact you about important updates — like our launch. No spam, ever.</p>
            </td>
          </tr>

          <!-- SOCIAL LINKS -->
          <tr>
            <td style="background:#f8faf8;padding:22px 48px;text-align:center;border-top:1px solid #efefef;">
              <p style="margin:0 0 10px;font-size:12px;color:#999;font-weight:600;text-transform:uppercase;letter-spacing:0.08em;">Follow us</p>
              <a href="https://x.com/volteryde" style="display:inline-block;margin:0 8px;color:#1b3a1b;text-decoration:none;font-size:13px;font-weight:600;">X / Twitter</a>
              <span style="color:#ddd;">&middot;</span>
              <a href="https://www.instagram.com/volterydeghana/" style="display:inline-block;margin:0 8px;color:#1b3a1b;text-decoration:none;font-size:13px;font-weight:600;">Instagram</a>
              <span style="color:#ddd;">&middot;</span>
              <a href="https://www.linkedin.com/company/volteryde/" style="display:inline-block;margin:0 8px;color:#1b3a1b;text-decoration:none;font-size:13px;font-weight:600;">LinkedIn</a>
              <span style="color:#ddd;">&middot;</span>
              <a href="https://www.tiktok.com/@volteryde" style="display:inline-block;margin:0 8px;color:#1b3a1b;text-decoration:none;font-size:13px;font-weight:600;">TikTok</a>
            </td>
          </tr>

          <!-- FOOTER -->
          <tr>
            <td style="background:#1b3a1b;padding:22px 48px;text-align:center;">
              <p style="margin:0;font-size:12px;color:#6a8c6a;line-height:1.7;">
                &copy; ${year} Volteryde &middot; Accra, Ghana<br />
                You received this because you joined the waitlist at
                <a href="https://volteryde.com" style="color:#0CCF0E;text-decoration:none;">volteryde.com</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

Deno.serve(async (req: Request) => {
  const webhookSecret = Deno.env.get("WEBHOOK_SECRET");
  if (webhookSecret) {
    const incomingSecret = req.headers.get("x-webhook-secret");
    if (incomingSecret !== webhookSecret) {
      return new Response(JSON.stringify({ error: "Unauthorized" }), {
        status: 401,
        headers: { "Content-Type": "application/json" },
      });
    }
  }

  let body: { record?: { email?: string } };
  try {
    body = await req.json();
  } catch {
    return new Response(JSON.stringify({ error: "Invalid JSON body" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const email = body?.record?.email;
  if (!email || typeof email !== "string") {
    return new Response(JSON.stringify({ error: "Missing email in record" }), {
      status: 400,
      headers: { "Content-Type": "application/json" },
    });
  }

  const resendApiKey = Deno.env.get("RESEND_API_KEY");
  if (!resendApiKey) {
    console.error("RESEND_API_KEY secret is not set");
    return new Response(JSON.stringify({ error: "Email service not configured" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  const res = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${resendApiKey}`,
    },
    body: JSON.stringify({
      from: "Volteryde <hello@volteryde.com>",
      to: email,
      subject: "You're on the Volteryde waitlist!",
      html: buildEmailHtml(),
    }),
  });

  if (!res.ok) {
    const errText = await res.text();
    console.error("Resend error:", errText);
    return new Response(JSON.stringify({ error: "Failed to send email" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }

  return new Response(JSON.stringify({ success: true }), {
    headers: { "Content-Type": "application/json" },
  });
});
