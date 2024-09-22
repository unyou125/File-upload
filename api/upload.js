// api/upload.js
import multer from 'multer';
import nextConnect from 'next-connect';

const upload = multer({ storage: multer.memoryStorage() }); // Use memory storage for serverless functions
const handler = nextConnect();

handler.use(upload.single('file')).post((req, res) => {
    // Handle file upload
    const file = req.file;
    if (!file) return res.status(400).json({ error: 'No file uploaded.' });

    // Here you can save the file to a storage solution (e.g., S3, local disk, etc.)
    res.status(200).json({ message: 'File uploaded successfully', file });
});

export default handler;
