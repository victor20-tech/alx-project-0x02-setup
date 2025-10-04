import React, { useState } from 'react';
import type { PostModalProps, NewPostData } from '@/interfaces'; 

const PostModal: React.FC<PostModalProps> = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !content.trim()) {
      alert('Please fill out both the title and content.');
      return;
    }
    
    // Pass the collected data back to the parent component
    onSubmit({ title, content });
    
    // Reset form and close modal
    setTitle('');
    setContent('');
    onClose();
  };

  return (
    // Modal Overlay
    <div className="fixed inset-0 bg-gray-900 bg-opacity-70 z-50 flex justify-center items-center p-4" onClick={onClose}>
      
      {/* Modal Content - Stop clicks from closing the modal */}
      <div 
        className="bg-white rounded-lg shadow-2xl w-full max-w-md p-6 transform transition-all duration-300"
        onClick={(e) => e.stopPropagation()} 
      >
        <div className="flex justify-between items-center border-b pb-3 mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">Create New Post</h2>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-gray-600 transition"
          >
            &times;
          </button>
        </div>

        {/* Form Implementation */}
        <form onSubmit={handleSubmit}>
          
          <div className="mb-4">
            <label htmlFor="postTitle" className="block text-sm font-medium text-gray-700 mb-1">Title</label>
            <input
              type="text"
              id="postTitle"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="mb-6">
            <label htmlFor="postContent" className="block text-sm font-medium text-gray-700 mb-1">Content</label>
            <textarea
              id="postContent"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              rows={4}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              required
            />
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 transition"
            >
              Save Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PostModal;