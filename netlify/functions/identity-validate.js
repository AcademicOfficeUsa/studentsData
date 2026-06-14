exports.handler = async (event) => {
  try {
    const payload = JSON.parse(event.body || "{}");
    const email = String(
      payload?.user?.email ||
      payload?.email ||
      ""
    ).trim().toLowerCase();

    if (!email.endsWith("@schoolofstjude.co.tz")) {
      return {
        statusCode: 400,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          error: "Only @schoolofstjude.co.tz email addresses are allowed. Please register with your official school email."
        })
      };
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: "Email domain accepted" })
    };
  } catch (error) {
    return {
      statusCode: 400,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ error: "Invalid signup validation request." })
    };
  }
};
