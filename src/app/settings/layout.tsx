'use client'
import React, {useState, useEffect} from 'react';
import { MainLayout } from 'src/layouts/main';
import { MainLayout1 } from 'src/layouts/template_1/main';
import { MainLayout2 } from 'src/layouts/template_3/main';
import { MainLayout3 } from 'src/layouts/template_4/main';
// import { MainLayout4 } from 'src/layouts/template_1/main';

// ----------------------------------------------------------------------

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  const [content, setContent] = useState<string>("main");

  useEffect(() => {
    const handleStorageChange = () => {
      setContent(localStorage.getItem("Template") || "");
    };

    // Update for same-tab changes
    const interval = setInterval(() => {
      const updatedValue = localStorage.getItem("Template");
      if (content !== updatedValue) {
        setContent(updatedValue || "");
      }
    }, 500); // Check every 500ms

    // Cross-tab changes
    window.addEventListener("storage", handleStorageChange);

    // Cleanup
    return () => {
      clearInterval(interval);
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [content]);

  const renderLayout = () => {
    switch (content) {
      case 'template_1':
        return <MainLayout1>{children}</MainLayout1>;
      case 'template_2':
        return <MainLayout2>{children}</MainLayout2>;
      case 'template_3':
        return <MainLayout3>{children}</MainLayout3>;
      case 'template_4':
        return <MainLayout>{children}</MainLayout>;
      default:
        return <MainLayout>{children}</MainLayout>;
    }
  };

  return renderLayout();
}
