import multer from 'multer';
import nextConnect from 'next-connect';

const upload = multer({ storage: multer.memoryStorage() });
const handler = nextConnect();

handler.use(upload.single('file')).post((req, res) => {
    const file = req.file;
    if (!file) return res.status(400).json({ error: 'No file uploaded.' });

    // Here, you would typically save the file to a storage solution (e.g., AWS S3).
    res.status(200).json({ message: 'File uploaded successfully', file });
});

export default handler;
