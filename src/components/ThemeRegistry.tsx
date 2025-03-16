'use client';

import React, { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Experimental_CssVarsProvider as CssVarsProvider } from '@mui/material/styles';
import theme from '@/theme';

export default function ThemeRegistry({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);

  // useEffect only runs on the client, so we need to make sure we don't render
  // the ThemeProvider until after the client has mounted
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    // During SSR, return a basic container
    return <>{children}</>;
  }

  return (
    <CssVarsProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </CssVarsProvider>
  );
}
