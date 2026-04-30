interface SubscribeRequest {
  email: string;
}

interface Subscriber {
  email: string;
  subscribedAt: string;
  source: string;
}

const CORS_HEADERS = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
  'Content-Type': 'application/json',
};

export const onRequestPost: PagesFunction<{ SUBSCRIBERS: KVNamespace }> = async (context) => {
  try {
    const { email } = (await context.request.json()) as SubscribeRequest;

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ success: false, error: 'Invalid email address' }),
        { status: 400, headers: CORS_HEADERS }
      );
    }

    const normalizedEmail = email.toLowerCase().trim();
    const key = `subscriber:${normalizedEmail}`;

    // Check if already subscribed (KV keys are unique)
    const existing = await context.env.SUBSCRIBERS.get(key);
    if (existing) {
      return new Response(
        JSON.stringify({ success: true, message: "You're already on the list!" }),
        { status: 200, headers: CORS_HEADERS }
      );
    }

    // Store subscriber
    const subscriber: Subscriber = {
      email: normalizedEmail,
      subscribedAt: new Date().toISOString(),
      source: 'website',
    };

    await context.env.SUBSCRIBERS.put(key, JSON.stringify(subscriber));

    return new Response(
      JSON.stringify({ success: true, message: 'Subscribed! Stay fly.' }),
      { status: 200, headers: CORS_HEADERS }
    );
  } catch (err) {
    console.error('Subscribe error:', err);
    return new Response(
      JSON.stringify({ success: false, error: 'Something went wrong. Try again later.' }),
      { status: 500, headers: CORS_HEADERS }
    );
  }
};

export const onRequestOptions: PagesFunction = async () => {
  return new Response(null, { status: 204, headers: CORS_HEADERS });
};
