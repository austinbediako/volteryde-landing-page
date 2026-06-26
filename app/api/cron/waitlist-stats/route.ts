import { NextRequest, NextResponse } from "next/server";

const RESEND_API_URL = "https://api.resend.com/emails";
const BASE_URL = "https://volteryde.com";

export async function GET(req: NextRequest) {
  const authHeader = req.headers.get("authorization");
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  const resendApiKey = process.env.RESEND_API_KEY;

  if (!supabaseUrl || !supabaseKey || !resendApiKey) {
    return NextResponse.json({ error: "Missing env vars" }, { status: 500 });
  }

  // Total signups
  const totalRes = await fetch(`${supabaseUrl}/rest/v1/waitlist?select=id,email,created_at`, {
    headers: {
      apikey: supabaseKey,
      Authorization: `Bearer ${supabaseKey}`,
      Prefer: "count=exact",
    },
  });

  if (!totalRes.ok) {
    return NextResponse.json({ error: "Failed to query waitlist" }, { status: 500 });
  }

  const allEntries: { id: string; email: string; created_at: string }[] = await totalRes.json();
  const totalCount = allEntries.length;

  // New signups in the last 24 hours
  const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString();
  const newEntries = allEntries.filter((e) => e.created_at >= yesterday);
  const newCount = newEntries.length;

  // Most recent signup
  const sorted = [...allEntries].sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime()
  );
  const latestEmail = sorted[0]?.email ?? "—";
  const latestDate = sorted[0]?.created_at
    ? new Date(sorted[0].created_at).toLocaleString("en-GB", { timeZone: "Africa/Accra" })
    : "—";

  const year = new Date().getFullYear();
  const today = new Date().toLocaleDateString("en-GB", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
    timeZone: "Africa/Accra",
  });

  const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Volteryde Waitlist — Daily Report</title>
</head>
<body style="margin:0;padding:0;background:#f0f4f0;font-family:'Helvetica Neue',Helvetica,Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background:#f0f4f0;padding:32px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;border-radius:20px;overflow:hidden;box-shadow:0 8px 40px rgba(0,0,0,0.12);">

          <!-- HEADER -->
          <tr>
            <td style="background:#1b3a1b;padding:28px 40px;text-align:center;">
              <img src="${BASE_URL}/logotextwhite.png" alt="Volteryde" width="140" style="display:block;margin:0 auto;" />
            </td>
          </tr>

          <!-- GREEN BAR -->
          <tr>
            <td style="background:#0CCF0E;height:4px;font-size:0;line-height:0;">&nbsp;</td>
          </tr>

          <!-- TITLE -->
          <tr>
            <td style="background:#ffffff;padding:36px 48px 0;">
              <p style="margin:0 0 4px;font-size:11px;font-weight:800;letter-spacing:0.10em;color:#0CCF0E;text-transform:uppercase;">Daily Report</p>
              <h1 style="margin:0 0 6px;font-size:28px;font-weight:900;color:#1b3a1b;">Waitlist Stats</h1>
              <p style="margin:0;font-size:14px;color:#888;">${today}</p>
            </td>
          </tr>

          <!-- STAT CARDS -->
          <tr>
            <td style="background:#ffffff;padding:28px 48px;">
              <table width="100%" cellpadding="0" cellspacing="0">
                <tr>
                  <!-- Total -->
                  <td width="48%" style="background:#f0fef0;border-radius:16px;padding:24px;text-align:center;vertical-align:top;">
                    <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:#0CCF0E;text-transform:uppercase;letter-spacing:0.08em;">Total Signups</p>
                    <p style="margin:0;font-size:48px;font-weight:900;color:#1b3a1b;line-height:1;">${totalCount}</p>
                  </td>
                  <td width="4%"></td>
                  <!-- New today -->
                  <td width="48%" style="background:#1b3a1b;border-radius:16px;padding:24px;text-align:center;vertical-align:top;">
                    <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:#0CCF0E;text-transform:uppercase;letter-spacing:0.08em;">New (24h)</p>
                    <p style="margin:0;font-size:48px;font-weight:900;color:#ffffff;line-height:1;">${newCount}</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- LATEST SIGNUP -->
          <tr>
            <td style="background:#ffffff;padding:0 48px 36px;">
              <hr style="border:none;border-top:1px solid #efefef;margin:0 0 24px;" />
              <p style="margin:0 0 12px;font-size:11px;font-weight:800;letter-spacing:0.10em;color:#0CCF0E;text-transform:uppercase;">Most Recent Signup</p>
              <table cellpadding="0" cellspacing="0" width="100%" style="background:#f8faf8;border-radius:12px;padding:16px 20px;">
                <tr>
                  <td>
                    <p style="margin:0 0 2px;font-size:15px;font-weight:700;color:#1b3a1b;">${latestEmail}</p>
                    <p style="margin:0;font-size:13px;color:#888;">${latestDate} (GMT)</p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          ${newEntries.length > 0 ? `
          <!-- NEW SIGNUPS LIST -->
          <tr>
            <td style="background:#ffffff;padding:0 48px 36px;">
              <p style="margin:0 0 12px;font-size:11px;font-weight:800;letter-spacing:0.10em;color:#0CCF0E;text-transform:uppercase;">New Signups Today</p>
              <table cellpadding="0" cellspacing="0" width="100%">
                ${newEntries.map((e, i) => `
                <tr>
                  <td style="padding:10px 16px;background:${i % 2 === 0 ? "#f8faf8" : "#ffffff"};border-radius:8px;">
                    <p style="margin:0;font-size:14px;color:#1b3a1b;font-weight:600;">${e.email}</p>
                    <p style="margin:0;font-size:12px;color:#aaa;">${new Date(e.created_at).toLocaleString("en-GB", { timeZone: "Africa/Accra" })}</p>
                  </td>
                </tr>`).join("")}
              </table>
            </td>
          </tr>
          ` : `
          <tr>
            <td style="background:#ffffff;padding:0 48px 36px;">
              <p style="margin:0;font-size:14px;color:#aaa;text-align:center;">No new signups in the last 24 hours.</p>
            </td>
          </tr>
          `}

          <!-- FOOTER -->
          <tr>
            <td style="background:#1b3a1b;padding:22px 48px;text-align:center;">
              <p style="margin:0;font-size:12px;color:#6a8c6a;line-height:1.7;">
                &copy; ${year} Volteryde &middot; Accra, Ghana<br />
                Automated daily report from <a href="${BASE_URL}" style="color:#0CCF0E;text-decoration:none;">volteryde.com</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;

  const emailRes = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${resendApiKey}`,
    },
    body: JSON.stringify({
      from: "Volteryde <hello@volteryde.com>",
      to: "austinbediako4@gmail.com",
      subject: `Waitlist Daily Report — ${totalCount} total, ${newCount} new today`,
      html,
    }),
  });

  if (!emailRes.ok) {
    const err = await emailRes.text();
    console.error("Resend error:", err);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }

  return NextResponse.json({ success: true, total: totalCount, newToday: newCount });
}
