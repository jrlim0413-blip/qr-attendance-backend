export default function handler(req, res) {
  if (req.method === 'POST') {
    const { code } = req.body;

    console.log("✅ Received code:", code);

    res.status(200).json({
      message: "✅ Code received!",
      received: code
    });
  } else {
    res.status(405).json({
      error: "❌ Method Not Allowed"
    });
  }
}
