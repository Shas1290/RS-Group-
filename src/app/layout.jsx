import React from 'react';
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <div className="h-full min-h-screen flex flex-col antialiased">
      {children}
    </div>
  );
}
