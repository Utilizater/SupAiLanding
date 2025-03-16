'use client';

import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  TextField,
  Button,
  Stack,
  Link,
} from '@mui/material';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Contact = () => {
  return (
    <Box
      id='contact'
      sx={{ py: { xs: 8, md: 12 }, bgcolor: 'rgba(76, 175, 80, 0.05)' }}>
      <Container maxWidth='lg'>
        <Box sx={{ textAlign: 'center', maxWidth: '800px', mx: 'auto' }}>
          <Typography
            variant='h2'
            component='h2'
            sx={{
              fontWeight: 700,
              mb: 2,
            }}>
            Get in Touch
          </Typography>
          <Typography
            variant='h5'
            sx={{
              color: 'text.secondary',
              mb: 6,
            }}>
            Interested in investing in SupElite? Contact us to learn more about
            our innovative platform and growth opportunities.
          </Typography>

          <Stack spacing={4} sx={{ maxWidth: '500px', mx: 'auto' }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <PhoneIcon color='primary' fontSize='large' />
              <Typography variant='h6'>
                <Link href='tel:17866160635' underline='hover' color='inherit'>
                  1 (786) 616-0635
                </Link>
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <EmailIcon color='primary' fontSize='large' />
              <Typography variant='h6'>
                <Link
                  href='mailto:supai.general@gmail.com'
                  underline='hover'
                  color='inherit'>
                  supai.general@gmail.com
                </Link>
              </Typography>
            </Box>

            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <LinkedInIcon color='primary' fontSize='large' />
              <Typography variant='h6'>
                <Link
                  href='https://www.linkedin.com/in/stanislav-chentsov-2a3b91335/'
                  target='_blank'
                  rel='noopener noreferrer'
                  underline='hover'
                  color='inherit'>
                  Stanislav Chentsov
                </Link>
              </Typography>
            </Box>
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default Contact;
