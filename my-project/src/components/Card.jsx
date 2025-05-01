import React from 'react';
import 

function Card({ title, content, useCustomClass = true, useContentAuto = false }) {
  const cardClasses = useCustomClass
    ? 'card' // Use our custom .card class from the plugin
    : 'bg-white rounded-lg p-6 shadow-xl'; // Use standard Tailwind classes

  const contentClasses = useContentAuto
    ? 'content-auto' // Use our custom utility
    : '';

  return (
    <div className={cardClasses}>
      <h3 className="text-lg font-medium mb-2">{title}</h3>
      <p className={`text-gray-600 ${contentClasses}`}>{content}</p>
    </div>
  );
}