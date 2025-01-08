import { Box, Container, Grid, Typography, Stack } from '@mui/material';

const Footer = () => {
  return (
    <Box 
      component="footer" 
      sx={{ 
        py: { xs: 3, md: 5 },
        borderTop: '1px solid',
        borderColor: 'divider',
        justifyContent:'center',
        alignItems:'center'
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={{ xs: 2, md: 4 }}>
          {/* Product Column */}
          <Grid item xs={6} sm={6} md={4} lg={2}>
            <Typography variant="subtitle2" fontWeight={600} fontSize={"14px"} color='#667085' mb={2}>
              Product
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2" color="text.secondary" sx={{fontSize:"16px", fontWeight:600, color:"#475467"}}>
                Overview
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{fontSize:"16px", fontWeight:600, color:"#475467"}}>
                Features
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{fontSize:"16px", fontWeight:600, color:"#475467"}}>
                Solutions
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{fontSize:"16px", fontWeight:600, color:"#475467"}}>
                Tutorials
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{fontSize:"16px", fontWeight:600, color:"#475467"}}>
                Pricing
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{fontSize:"16px", fontWeight:600, color:"#475467"}}>
                Releases
              </Typography>
            </Stack>
          </Grid>

          {/* Company Column */}
          <Grid item xs={6} sm={6} md={4}  lg={2}>
            <Typography variant="subtitle2" fontWeight={600} fontSize={"14px"} color='#667085'  mb={2}>
              Company
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2" color="text.secondary" sx={{fontSize:"16px", fontWeight:600, color:"#475467"}}>
                About us
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{fontSize:"16px", fontWeight:600, color:"#475467"}}>
                Careers
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{fontSize:"16px", fontWeight:600, color:"#475467"}}>
                Press
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{fontSize:"16px", fontWeight:600, color:"#475467"}}>
                News
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{fontSize:"16px", fontWeight:600, color:"#475467"}}>
                Media kit
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{fontSize:"16px", fontWeight:600, color:"#475467"}}>
                Contact
              </Typography>
            </Stack>
          </Grid>

          {/* Resources Column */}
          <Grid item xs={6} sm={6} md={4} lg={2}>
            <Typography variant="subtitle2" fontWeight={600} fontSize={"14px"} color='#667085'  mb={2}>
              Resources
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2" color="text.secondary" sx={{fontSize:"16px", fontWeight:600, color:"#475467"}}>
                Blog
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{fontSize:"16px", fontWeight:600, color:"#475467"}}>
                Newsletter
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{fontSize:"16px", fontWeight:600, color:"#475467"}}>
                Events
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{fontSize:"16px", fontWeight:600, color:"#475467"}}>
                Help center
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{fontSize:"16px", fontWeight:600, color:"#475467"}}>
                Tutorials
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{fontSize:"16px", fontWeight:600, color:"#475467"}}>
                Support
              </Typography>
            </Stack>
          </Grid>

          {/* Use cases Column */}
          <Grid item xs={6} sm={6} md={4} lg={2}>
            <Typography variant="subtitle2" fontWeight={600} fontSize={"14px"} color='#667085'  mb={2}>
              Use cases
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2" color="text.secondary" sx={{fontSize:"16px", fontWeight:600, color:"#475467"}}>
                Startups
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{fontSize:"16px", fontWeight:600, color:"#475467"}}>
                Enterprise
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{fontSize:"16px", fontWeight:600, color:"#475467"}}>
                Government
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{fontSize:"16px", fontWeight:600, color:"#475467"}}>
                SaaS center
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{fontSize:"16px", fontWeight:600, color:"#475467"}}>
                Marketplaces
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{fontSize:"16px", fontWeight:600, color:"#475467"}}>
                Ecommerce
              </Typography>
            </Stack>
          </Grid>

          {/* Social Column */}
          <Grid item xs={6} sm={6} md={4} lg={2}>
            <Typography variant="subtitle2" fontWeight={600} fontSize={"14px"} color='#667085'  mb={2}>
              Social
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2" color="text.secondary" sx={{fontSize:"16px", fontWeight:600, color:"#475467"}}>
                Twitter
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{fontSize:"16px", fontWeight:600, color:"#475467"}}>
                LinkedIn
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{fontSize:"16px", fontWeight:600, color:"#475467"}}>
                Facebook
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{fontSize:"16px", fontWeight:600, color:"#475467"}}>
                GitHub
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{fontSize:"16px", fontWeight:600, color:"#475467"}}>
                Dribbble
              </Typography>
            </Stack>
          </Grid>

          {/* Legal Column */}
          <Grid item xs={6} sm={6} md={4} lg={2}>
            <Typography variant="subtitle2" fontWeight={600} fontSize={"14px"} color='#667085'  mb={2}>
              Legal
            </Typography>
            <Stack spacing={1}>
              <Typography variant="body2" color="text.secondary" sx={{fontSize:"16px", fontWeight:600, color:"#475467"}}>
                Terms
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{fontSize:"16px", fontWeight:600, color:"#475467"}}>
                Privacy
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{fontSize:"16px", fontWeight:600, color:"#475467"}}>
                Cookies
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{fontSize:"16px", fontWeight:600, color:"#475467"}}>
                Licenses
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{fontSize:"16px", fontWeight:600, color:"#475467"}}>
                Settings
              </Typography>
              <Typography variant="body2" color="text.secondary" sx={{fontSize:"16px", fontWeight:600, color:"#475467"}}>
                Contact
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        {/* Bottom Section */}
        <Box
          sx={{
            mt: { xs: 4, md: 8 },
            pt: { xs: 2, md: 3 },
            borderTop: '1px solid',
            borderColor: 'divider',
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            justifyContent: 'space-between',
            alignItems: { xs: 'center', sm: 'center' },
            textAlign: { xs: 'center', sm: 'left' },
            gap: 2
          }}
        >
          <Box 
            component="img" 
            src="/images/company_logo.png" 
            alt="Logo" 
            sx={{ 
              height: { xs: 32, md: 32, lg:32}
            }} 
          />
          <Typography 
            variant="body2" 
            color="text.secondary"
            sx={{
              fontSize: { xs: '0.75rem', md: '0.875rem' }
            }}
          >
            © 2024 ZyskTechnologies. All rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
