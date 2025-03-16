'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
  Stack,
} from '@mui/material';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import GroupsIcon from '@mui/icons-material/Groups';
import InsightsIcon from '@mui/icons-material/Insights';

const features = [
  {
    title: 'AI-Driven Personalization',
    description:
      'Automated matching of supplements to individual goals, health data, and preferences for safe, effective plans.',
    icon: <SmartToyIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
  },
  {
    title: 'Professional Guidance',
    description:
      'Consultations with biohacker doctors provide expert validation and personalized supplement strategies.',
    icon: <MedicalServicesIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
  },
  {
    title: 'Integrated E-Commerce Platform',
    description:
      'A modern, user-friendly online store that offers traditional supplement sales alongside curated bundles.',
    icon: <ShoppingCartIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
  },
  {
    title: 'Subscription Model',
    description:
      'Recurring revenue from personalized supplement plans and premium AI features ensures ongoing customer engagement.',
    icon: <SubscriptionsIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
  },
  {
    title: 'Influencer Partnerships',
    description:
      'Collaborations that combine curated influencer-endorsed stacks with expert-backed advice, reinforcing trust and authenticity.',
    icon: <GroupsIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
  },
  {
    title: 'Data-Backed Customer Experience',
    description:
      'Utilizing key metrics such as active users, repeat purchases, and conversion rates to refine the platform and reduce customer acquisition costs.',
    icon: <InsightsIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
  },
];

const Features = () => {
  return (
    <Box id='features' sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth='lg'>
        <Stack spacing={8}>
          <Box sx={{ textAlign: 'center', mb: 6 }}>
            <Typography
              variant='h2'
              component='h2'
              sx={{
                fontWeight: 700,
                mb: 2,
              }}>
              Our Key Features
            </Typography>
            <Typography
              variant='h5'
              sx={{
                color: 'text.secondary',
                maxWidth: '800px',
                mx: 'auto',
              }}>
              Discover how SupElite is transforming the supplement industry with
              innovative technology and personalized solutions.
            </Typography>
          </Box>

          <Grid container spacing={4}>
            {features.map((feature, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <Card
                  sx={{
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    transition: 'transform 0.3s, box-shadow 0.3s',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 12px 20px rgba(0, 0, 0, 0.1)',
                    },
                  }}>
                  <CardContent sx={{ flexGrow: 1, p: 4 }}>
                    <Box sx={{ mb: 3 }}>{feature.icon}</Box>
                    <Typography
                      gutterBottom
                      variant='h5'
                      component='h3'
                      sx={{
                        fontWeight: 600,
                        mb: 2,
                      }}>
                      {feature.title}
                    </Typography>
                    <Typography variant='body1' color='text.secondary'>
                      {feature.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Stack>
      </Container>
    </Box>
  );
};

export default Features;
