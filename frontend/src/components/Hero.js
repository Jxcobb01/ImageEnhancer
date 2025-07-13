import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

function Hero() {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');
  const [enhancedUrl, setEnhancedUrl] = useState(null);

  const onDrop = useCallback(async (acceptedFiles) => {
    if (acceptedFiles && acceptedFiles.length > 0) {
      const file = acceptedFiles[0];
      setImage(Object.assign(file, {
        preview: URL.createObjectURL(file)
      }));
      setLoading(true);
      setSuccess(false);
      setError('');
      setEnhancedUrl(null);
      const formData = new FormData();
      formData.append('file', file);
      try {
        const response = await axios.post('http://localhost:8000/api/enhance', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          responseType: 'blob',
        });
        const url = URL.createObjectURL(response.data);
        setEnhancedUrl(url);
        setSuccess(true);
      } catch (err) {
        setError('Failed to upload and process image.');
      } finally {
        setLoading(false);
      }
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/jpeg': [],
      'image/png': []
    },
    multiple: false
  });

  return (
    <section className="bg-white py-16 shadow-md">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-4">AI Image Enhancer</h1>
        <p className="text-lg md:text-2xl text-gray-700 mb-8">Enhance your images instantly with the power of AI. Sharpen, upscale, and restore photos in one click.</p>
        <div {...getRootProps()} className={`mx-auto w-full max-w-md p-8 border-2 border-dashed rounded-lg cursor-pointer transition ${isDragActive ? 'border-blue-600 bg-blue-50' : 'border-gray-300 bg-gray-100'}`}>
          <input {...getInputProps()} />
          {image ? (
            <div>
              <img src={image.preview} alt="Preview" className="mx-auto mb-4 max-h-48 rounded shadow" />
              <div className="text-gray-700">{image.name}</div>
            </div>
          ) : (
            <div className="text-gray-500">
              {isDragActive ? 'Drop the image here ...' : 'Drag & drop a JPEG or PNG image here, or click to select one'}
            </div>
          )}
        </div>
        {loading && <div className="mt-4 text-blue-600">Processing image...</div>}
        {success && enhancedUrl && (
          <div className="mt-8">
            <div className="mb-4">
              <img src={enhancedUrl} alt="Enhanced Preview" className="mx-auto max-h-64 rounded shadow border" />
            </div>
            <div className="flex justify-center gap-4">
              <a href={enhancedUrl} download="enhanced.png" className="bg-blue-600 text-white px-6 py-2 rounded font-semibold shadow hover:bg-blue-700 transition">Download</a>
              <a href={enhancedUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-200 text-blue-700 px-6 py-2 rounded font-semibold shadow hover:bg-gray-300 transition">Preview</a>
            </div>
          </div>
        )}
        {success && !enhancedUrl && <div className="mt-4 text-green-600">Image uploaded and processed successfully!</div>}
        {error && <div className="mt-4 text-red-600">{error}</div>}
      </div>
    </section>
  );
}

export default Hero; 