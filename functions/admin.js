export async function onRequest(context) {
  const { request, env } = context;

  const ADMIN_PASSWORD = env.ADMIN_PASSWORD;
  const ADMIN_PIN = env.ADMIN_PIN;
  const AUTH_SECRET = env.AUTH_SECRET || 'clicksolve-admin-auth-key';

  if (!ADMIN_PASSWORD || !ADMIN_PIN) {
    return context.next();
  }

  const cookie = request.headers.get('Cookie') || '';
  const authToken = getCookie(cookie, 'admin_auth');

  if (authToken) {
    const expected = await generateToken(ADMIN_PASSWORD + ADMIN_PIN, AUTH_SECRET);
    if (authToken === expected) {
      return context.next();
    }
  }

  if (request.method === 'POST') {
    const formData = await request.formData();
    const step = formData.get('step');
    const password = formData.get('password') || '';
    const pin = formData.get('pin') || '';
    const sessionPassword = formData.get('session_password') || '';

    if (step === '1') {
      if (password === ADMIN_PASSWORD) {
        return new Response(renderPinPage(password), {
          headers: { 'Content-Type': 'text/html; charset=utf-8' }
        });
      }
      return new Response(renderPasswordPage('Incorrect password. Try again.'), {
        status: 401,
        headers: { 'Content-Type': 'text/html; charset=utf-8' }
      });
    }

    if (step === '2') {
      if (sessionPassword === ADMIN_PASSWORD && pin === ADMIN_PIN) {
        const token = await generateToken(ADMIN_PASSWORD + ADMIN_PIN, AUTH_SECRET);
        return new Response(null, {
          status: 302,
          headers: {
            'Location': '/admin',
            'Set-Cookie': `admin_auth=${token}; Path=/admin; HttpOnly; Secure; SameSite=Strict; Max-Age=86400`
          }
        });
      }
      return new Response(renderPasswordPage('Incorrect PIN. Start over.'), {
        status: 401,
        headers: { 'Content-Type': 'text/html; charset=utf-8' }
      });
    }
  }

  return new Response(renderPasswordPage(), {
    headers: { 'Content-Type': 'text/html; charset=utf-8' }
  });
}

function getCookie(cookieString, name) {
  const match = cookieString.match(new RegExp(`(?:^|;\\s*)${name}=([^;]*)`));
  return match ? match[1] : null;
}

async function generateToken(input, secret) {
  const encoder = new TextEncoder();
  const key = await crypto.subtle.importKey(
    'raw',
    encoder.encode(secret),
    { name: 'HMAC', hash: 'SHA-256' },
    false,
    ['sign']
  );
  const signature = await crypto.subtle.sign('HMAC', key, encoder.encode(input));
  return btoa(String.fromCharCode(...new Uint8Array(signature)));
}

function renderPasswordPage(error = '') {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin Access | ClickSolveTools</title>
  <meta name="robots" content="noindex, nofollow">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-[#0f172a] text-[#f1f5f9] min-h-screen flex items-center justify-center">
  <div class="w-full max-w-sm mx-auto px-6">
    <div class="bg-[#1e293b] rounded-xl p-8 border border-[#334155] shadow-2xl">
      <div class="text-center mb-8">
        <div class="text-4xl mb-3">🔒</div>
        <h1 class="text-xl font-bold">Admin Access</h1>
        <p class="text-sm text-[#94a3b8] mt-2">Step 1 of 2 — Enter password</p>
      </div>
      ${error ? `<div class="bg-red-500/10 border border-red-500/30 text-red-400 text-sm rounded-lg px-4 py-3 mb-6 text-center">${error}</div>` : ''}
      <form method="POST" action="/admin">
        <input type="hidden" name="step" value="1">
        <label for="password" class="block text-sm font-medium text-[#94a3b8] mb-2">Password</label>
        <input type="password" id="password" name="password" required autofocus
          class="w-full px-4 py-3 bg-[#0f172a] border border-[#334155] rounded-lg text-[#f1f5f9] focus:outline-none focus:ring-2 focus:ring-[#38bdf8] focus:border-transparent text-base"
          placeholder="Enter admin password">
        <button type="submit"
          class="w-full mt-6 px-4 py-3 bg-[#38bdf8] text-[#0f172a] font-semibold rounded-lg hover:bg-[#7dd3fc] transition-colors focus:outline-none focus:ring-2 focus:ring-[#38bdf8] focus:ring-offset-2 focus:ring-offset-[#1e293b]">
          Continue →
        </button>
      </form>
    </div>
    <p class="text-center text-xs text-[#475569] mt-6">
      <a href="/" class="hover:text-[#94a3b8] transition-colors">← Back to ClickSolveTools</a>
    </p>
  </div>
</body>
</html>`;
}

function renderPinPage(password) {
  const escaped = password.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Admin Access | ClickSolveTools</title>
  <meta name="robots" content="noindex, nofollow">
  <script src="https://cdn.tailwindcss.com"></script>
</head>
<body class="bg-[#0f172a] text-[#f1f5f9] min-h-screen flex items-center justify-center">
  <div class="w-full max-w-sm mx-auto px-6">
    <div class="bg-[#1e293b] rounded-xl p-8 border border-[#334155] shadow-2xl">
      <div class="text-center mb-8">
        <div class="text-4xl mb-3">🔑</div>
        <h1 class="text-xl font-bold">Admin Access</h1>
        <p class="text-sm text-[#94a3b8] mt-2">Step 2 of 2 — Enter PIN</p>
      </div>
      <div class="bg-green-500/10 border border-green-500/30 text-green-400 text-sm rounded-lg px-4 py-3 mb-6 text-center">
        ✓ Password verified
      </div>
      <form method="POST" action="/admin">
        <input type="hidden" name="step" value="2">
        <input type="hidden" name="session_password" value="${escaped}">
        <label for="pin" class="block text-sm font-medium text-[#94a3b8] mb-2">PIN Code</label>
        <input type="password" id="pin" name="pin" required autofocus inputmode="numeric" pattern="[0-9]*"
          class="w-full px-4 py-3 bg-[#0f172a] border border-[#334155] rounded-lg text-[#f1f5f9] focus:outline-none focus:ring-2 focus:ring-[#38bdf8] focus:border-transparent text-base text-center tracking-[0.5em] text-2xl"
          placeholder="• • • • • •">
        <button type="submit"
          class="w-full mt-6 px-4 py-3 bg-[#38bdf8] text-[#0f172a] font-semibold rounded-lg hover:bg-[#7dd3fc] transition-colors focus:outline-none focus:ring-2 focus:ring-[#38bdf8] focus:ring-offset-2 focus:ring-offset-[#1e293b]">
          Unlock Admin →
        </button>
      </form>
    </div>
    <p class="text-center text-xs text-[#475569] mt-6">
      <a href="/" class="hover:text-[#94a3b8] transition-colors">← Back to ClickSolveTools</a>
    </p>
  </div>
</body>
</html>`;
}
