export default async function handler(req, res) {
    const { filename } = req.query;
    // Implement your file deletion logic here
    res.status(200).json({ message: 'File deleted successfully' });
}
