'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Link,
  Stack,
  Divider,
  IconButton,
} from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Box sx={{ bgcolor: '#f5f5f5', pt: 6, pb: 4 }}>
      <Container maxWidth='lg'>
        <Stack spacing={3} sx={{ textAlign: 'center' }}>
          <Typography
            variant='h6'
            component='div'
            sx={{
              fontWeight: 700,
              color: 'primary.main',
              fontSize: '1.75rem',
            }}>
            SupElite
          </Typography>

          <Typography
            variant='body1'
            color='text.secondary'
            sx={{ maxWidth: '600px', mx: 'auto' }}>
            Revolutionizing the supplement industry with AI-driven
            personalization, professional guidance, and an integrated e-commerce
            platform.
          </Typography>

          <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
            <IconButton
              aria-label='LinkedIn'
              color='primary'
              component={Link}
              href='https://www.linkedin.com/in/stanislav-chentsov-2a3b91335/'
              target='_blank'
              rel='noopener noreferrer'
              sx={{
                '&:hover': {
                  backgroundColor: 'rgba(76, 175, 80, 0.1)',
                },
              }}>
              <LinkedInIcon fontSize='large' />
            </IconButton>
          </Box>
        </Stack>

        <Divider sx={{ my: 4 }} />

        <Box sx={{ textAlign: 'center' }}>
          <Typography variant='body2' color='text.secondary'>
            © {currentYear} SupElite. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
