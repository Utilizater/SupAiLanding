'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Stack,
  Button,
  Paper,
} from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const About = () => {
  return (
    <Box id='about' sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth='lg'>
        <Grid container spacing={6} alignItems='center'>
          <Grid item xs={12} md={6}>
            <Box
              sx={{
                position: 'relative',
                height: { xs: '300px', md: '500px' },
                width: '100%',
                background:
                  'linear-gradient(135deg, rgba(46, 125, 50, 0.2) 0%, rgba(46, 125, 50, 0.6) 100%)',
                borderRadius: '16px',
                overflow: 'hidden',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 10px 30px rgba(46, 125, 50, 0.2)',
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
                {/* Business chart visualization */}
                <Box
                  sx={{
                    width: '200px',
                    height: '150px',
                    position: 'relative',
                    mb: 3,
                  }}>
                  {/* Bar chart visualization */}
                  <Box
                    sx={{
                      display: 'flex',
                      height: '100%',
                      alignItems: 'flex-end',
                      justifyContent: 'space-between',
                      padding: '10px',
                      border: '2px solid rgba(255,255,255,0.5)',
                      borderTop: 'none',
                      borderRight: 'none',
                      position: 'relative',
                      '&::before': {
                        content: '""',
                        position: 'absolute',
                        left: 0,
                        top: 0,
                        width: '100%',
                        height: '100%',
                        borderTop: '2px dashed rgba(255,255,255,0.5)',
                        borderBottom: '2px dashed rgba(255,255,255,0.5)',
                      },
                    }}>
                    {[40, 65, 50, 85, 70, 90].map((height, index) => (
                      <Box
                        key={index}
                        sx={{
                          width: '20px',
                          height: `${height}%`,
                          backgroundColor:
                            index % 2 === 0 ? '#4CAF50' : '#81C784',
                          borderRadius: '3px 3px 0 0',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            backgroundColor: '#2E7D32',
                            transform: 'translateY(-5px)',
                          },
                        }}
                      />
                    ))}
                  </Box>
                </Box>

                <Typography
                  variant='h4'
                  color='white'
                  sx={{
                    fontWeight: 600,
                    textShadow: '0 2px 4px rgba(0,0,0,0.2)',
                    zIndex: 1,
                    position: 'relative',
                    textAlign: 'center',
                  }}>
                  Investment Opportunity
                </Typography>
              </Box>
            </Box>
          </Grid>

          <Grid item xs={12} md={6}>
            <Stack spacing={4}>
              <Typography
                variant='h2'
                component='h2'
                sx={{
                  fontWeight: 700,
                  mb: 2,
                }}>
                Why Invest in SupElite?
              </Typography>

              <Typography
                variant='body1'
                sx={{ color: 'text.secondary', mb: 2 }}>
                SupElite is revolutionizing the supplement industry by combining
                cutting-edge AI technology with expert human guidance. Our
                platform offers a unique opportunity for investors looking to
                enter the rapidly growing health and wellness market.
              </Typography>

              <Typography
                variant='body1'
                sx={{ color: 'text.secondary', mb: 2 }}>
                With our AI-driven personalization, we're able to provide
                customers with tailored supplement plans that meet their
                specific health goals and needs, creating a highly engaging and
                effective user experience.
              </Typography>

              <Box sx={{ mt: 2 }}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={6}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        bgcolor: 'rgba(76, 175, 80, 0.08)',
                        height: '100%',
                      }}>
                      <Typography variant='h6' sx={{ fontWeight: 600, mb: 1 }}>
                        Market Opportunity
                      </Typography>
                      <Typography variant='body2'>
                        The global dietary supplements market is projected to
                        reach $272.4 billion by 2028, growing at a CAGR of 8.9%.
                      </Typography>
                    </Paper>
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Paper
                      elevation={0}
                      sx={{
                        p: 3,
                        bgcolor: 'rgba(76, 175, 80, 0.08)',
                        height: '100%',
                      }}>
                      <Typography variant='h6' sx={{ fontWeight: 600, mb: 1 }}>
                        Competitive Edge
                      </Typography>
                      <Typography variant='body2'>
                        Our unique combination of AI technology and expert
                        guidance creates a powerful value proposition unmatched
                        in the market.
                      </Typography>
                    </Paper>
                  </Grid>
                </Grid>
              </Box>

              {/* Investor Deck button removed as requested */}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default About;
