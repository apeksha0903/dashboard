import React from 'react';
import { 
  Box,
  Typography,
  Button,
  Container,
  Chip,
  Stack,
  Link
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import { Height } from '@mui/icons-material';
const NewFeatureChip = styled(Chip)(({ theme }) => ({
  backgroundColor: theme.palette.error.light,
  color: theme.palette.error.contrastText,
  '& .MuiChip-label': {
    fontWeight: 500,
  }
}));

const Hero_section = () => {
  return (
    <Box sx={{ textAlign: "center", mt: "96px" }}>
      {/* Feature announcement banner */}
      <Container maxWidth="md">
        <Link href="#" underline="none" sx={{ display: "inline-block" }}>
          <Box sx={{
            display: "inline-flex",
            alignItems: "center",
            py: 1,
            px: 2,
            border: "1px solid #FDE6E6",
            borderRadius: "24px",
            bgcolor: "#FEF3F2",
            gap: 1
          }}>
            <NewFeatureChip label="New feature" size="small" />
            <Typography variant="body2" color="#E63F3A">
              Check out the team dashboard
            </Typography>
            <ArrowForwardIcon sx={{ fontSize: 16, color: "text.primary" }} />
          </Box>
        </Link>

        {/* Main hero content */}
        <Typography variant="h1" sx={{ 
          fontSize: { xs: "40px", md: "56px" },
          fontWeight: 600,
          mt: 3,
          mb: 2
        }}>
          Beautiful analytics to grow smarter
        </Typography>
        
        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Powerful, self-serve product and growth analytics to help you convert, engage,
          and retain more users. Trusted by over 4,000 startups.
        </Typography>

        <Stack direction={{lg:"row", md:"row",sm:"row",xs:"column"}} spacing={2} justifyContent="center">
            <Button variant="outlined" sx={{
                borderRadius:"20px",
            }}>
                {<PlayCircleOutlinedIcon/>}Demo
            </Button>
          <Button variant="contained" color="primary" sx={{
            borderRadius:"20px",
            bgcolor:"#E63F3A"
          }}>
            Sign up
          </Button>
        </Stack>
        <Box sx={{ 
          mt: 8,
          width: {
            xs: '100%',  // full width on mobile
            sm: '90%',   // 90% width on tablet
            md: '90%',   // 80% width on desktop
            lg: '90%'    // 70% width on large screens
          },
          mx: 'auto',   // center the box
          position: 'relative'
        }}>
          <img
            src="/images/Chatbot.png"  // Replace with your image path
            alt="Analytics Dashboard"
            style={{
              width: '100%',
              height: 'auto',
              borderRadius: '8px',
              boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)'
            }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default Hero_section;