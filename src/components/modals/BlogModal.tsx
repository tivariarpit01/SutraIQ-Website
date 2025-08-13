// components/BlogModal.tsx
"use client";

import React from "react";

interface BlogModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  image?: string;
  content: string;
  createdAt: string;
}

export default function BlogModal({
  isOpen,
  onClose,
  title,
  image,
  content,
  createdAt,
}: BlogModalProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Overlay with blur */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm z-40"
        onClick={onClose}
      ></div>

      {/* Modal content */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-3xl w-full max-h-[80vh] overflow-y-auto relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-700 dark:text-gray-300 hover:text-red-500 text-2xl font-bold"
            aria-label="Close modal"
          >
            &times;
          </button>

          {image && (
            <div className="w-full h-64 rounded-t-lg overflow-hidden">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          <div className="p-6">
            <h2 className="text-3xl font-bold mb-2">{title}</h2>
            <p className="text-gray-500 mb-4 text-sm">
              {new Date(createdAt).toLocaleDateString()}
            </p>

            <div
              className="prose prose-lg prose-slate dark:prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: content }}
            />
          </div>
        </div>
      </div>
    </>
  );
}
