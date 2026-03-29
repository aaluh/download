// Updated POST method handler for the Vercel API

export default async function handler(req, res) {
    if (req.method === 'POST') {
        // Logic for handling POST request
        res.status(200).json({ message: 'POST request received' });
    } else {
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}