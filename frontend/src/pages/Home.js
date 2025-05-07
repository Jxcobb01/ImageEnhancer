import React, { useState } from 'react';
import { useDropzone } from 'react-dropzone';
import axios from 'axios';

function Home() {
  const [image, setImage] = useState(null);
  const [enhancedImage, setEnhancedImage] = useState(null);
  const [loading, setLoading] = useState(false);

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png']
    },
    maxFiles: 1,
    onDrop: acceptedFiles => {
      setImage(URL.createObjectURL(acceptedFiles[0]));
    }
  });

  const handleEnhance = async () => {
    if (!image) return;

    setLoading(true);
    try {
      const formData = new FormData();
      const response = await fetch(image);
      const blob = await response.blob();
      formData.append('file', blob, 'image.jpg');

      const result = await axios.post('http://localhost:8000/enhance', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      // TODO: Handle the enhanced image response
      setEnhancedImage(result.data);
    } catch (error) {
      console.error('Error enhancing image:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-8">AI Image Enhancer</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <div
            {...getRootProps()}
            className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center cursor-pointer hover:border-blue-500 transition-colors"
          >
            <input {...getInputProps()} />
            {image ? (
              <img src={image} alt="Original" className="max-w-full h-auto" />
            ) : (
              <p>Drag and drop an image here, or click to select one</p>
            )}
          </div>
          
          <button
            onClick={handleEnhance}
            disabled={!image || loading}
            className="mt-4 w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Enhancing...' : 'Enhance Image'}
          </button>
        </div>

        <div className="border-2 border-gray-300 rounded-lg p-8">
          <h2 className="text-xl font-semibold mb-4">Enhanced Image</h2>
          {enhancedImage ? (
            <img src={enhancedImage} alt="Enhanced" className="max-w-full h-auto" />
          ) : (
            <p className="text-gray-500">Enhanced image will appear here</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home; 