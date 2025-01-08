import { Box, Typography, Button } from '@mui/material';

const Free_trial = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        py: 8,
        px: 2,
      }}
    >
      <Box
        sx={{
          maxWidth: '600px',
          mx: 'auto',
        }}
      >
        <Typography
          sx={{
            fontSize:{lg:'36px',md:"34px",sm:"32px",xs:"30px"},
            fontWeight:600,
            mb: 2,
            color:"#101828"
          }}
        >
          Start your free trial
        </Typography>

        <Typography
          variant="body1"
          sx={{
            mb: 4,
            color: '#475467',
            fontSize:{lg:'20px',md:"20px",sm:"18px",xs:"18px"},
          }}
        >
          Join over 4,000+ startups already growing with Untitled.
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection:{lg:"row", md:"row", sm:"row", xs:"column"},
            justifyContent: 'center',
            gap:5
          }}
        >
          <Button
            variant="text"
            sx={{
            height:"48px",
              textTransform: 'none',
              fontSize:"16px"
            }}
          >
            Learn more
          </Button>
          <Button
            variant="contained"
            sx={{
              height:"48px",
              textTransform: 'none',
              bgcolor: '#E63F3A',
              fontSize:"16px"
            }}
          >
            Get started
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Free_trial;
