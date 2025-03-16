'use client';

import React from 'react';
import { Box, Container, Typography, Grid, Stack } from '@mui/material';

const Hero = () => {
  return (
    <Box
      sx={{
        pt: { xs: 8, md: 12 },
        pb: { xs: 8, md: 12 },
        background:
          'linear-gradient(180deg, rgba(76, 175, 80, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',
      }}>
      <Container maxWidth='lg'>
        <Grid container spacing={4} alignItems='center'>
          <Grid item xs={12} md={6}>
            <Stack spacing={4}>
              <Typography
                variant='h1'
                component='h1'
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: '2.5rem', sm: '3rem', md: '3.5rem' },
                  lineHeight: 1.2,
                  mb: 2,
                }}>
                Revolutionizing Supplements with{' '}
                <Box component='span' sx={{ color: 'primary.main' }}>
                  AI-Driven
                </Box>{' '}
                Personalization
              </Typography>

              <Typography
                variant='h5'
                component='p'
                sx={{
                  color: 'text.secondary',
                  fontWeight: 400,
                  mb: 4,
                }}>
                SupElite matches supplements to your individual goals, health
                data, and preferences for safe, effective plans backed by
                biohacker doctors.
              </Typography>

              {/* Buttons removed as requested */}
            </Stack>
          </Grid>

          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                height: { xs: '300px', md: '500px' },
                width: '100%',
                background:
                  'linear-gradient(135deg, rgba(76, 175, 80, 0.2) 0%, rgba(76, 175, 80, 0.6) 100%)',
                borderRadius: '16px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 10px 30px rgba(76, 175, 80, 0.2)',
              }}>
              <Box
                sx={{
                  position: 'relative',
                  width: '80%',
                  height: '80%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {/* Supplement bottle */}
                <Box
                  sx={{
                    width: '120px',
                    height: '200px',
                    backgroundColor: '#4CAF50',
                    borderRadius: '10px 10px 5px 5px',
                    position: 'relative',
                    mb: 2,
                    boxShadow: '0 5px 15px rgba(0,0,0,0.1)',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: '15%',
                      left: '10%',
                      width: '80%',
                      height: '70%',
                      backgroundColor: 'white',
                      opacity: 0.9,
                      borderRadius: '5px',
                    },
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      top: '5%',
                      left: '25%',
                      width: '50%',
                      height: '5%',
                      backgroundColor: '#2E7D32',
                      borderRadius: '2px',
                    },
                  }}
                />

                <Typography
                  variant='h4'
                  color='white'
                  sx={{
                    fontWeight: 600,
                    textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    zIndex: 1,
                    position: 'relative',
                    textAlign: 'center',
                    mt: 4,
                  }}>
                  AI-Driven Supplements
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Hero;
