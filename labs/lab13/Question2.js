import http from 'http';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        if (req.url === '/image') {
            const imagePath = path.join(__dirname, 'files', 'img.jpeg');
            fs.readFile(imagePath, (err, data) => {
                if (err) {
                    res.writeHead(500);
                    res.end('Internal Server Error');
                } else {
                    res.writeHead(200, { 'Content-Type': 'image/jpg' });
                    res.end(data);
                }
            });
        } else if (req.url === '/pdf') {
            const pdfPath = path.join(__dirname, 'files', 'Block vs Inline.pdf');
            fs.readFile(pdfPath, (err, data) => {
                if (err) {
                    res.writeHead(500);
                    res.end('Internal Server Error');
                } else {
                    res.writeHead(200, { 'Content-Type': 'application/pdf' });
                    res.end(data);
                }
            });
        } else if (req.url === '/about') {
            const txtPath = path.join(__dirname, 'files', 'about.txt');
            fs.readFile(txtPath, 'utf-8', (err, data) => {
                if (err) {
                    res.writeHead(500);
                    res.end('Internal Server Error');
                } else {
                    res.writeHead(200, { 'Content-Type': 'text/plain' });
                    res.end(data);
                }
            });
        } else if (req.url === '/' || req.url === '/home') {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.end('Welcome to my website');
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Not Found');
        }
    } else {
        res.writeHead(405, { 'Content-Type': 'text/plain' });
        res.end('Method Not Allowed');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});