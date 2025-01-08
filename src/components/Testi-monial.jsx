import { Box, Typography } from '@mui/material';

const Testimonial = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        maxWidth: '100%',
        margin: '0 auto',
        textAlign: 'center',
        py: 4,
      }}
    >
      {/* Company Logo */}
      <Box sx={{
        display:"flex",
        gap:3
      }}>
        <Box
            component="img"
            src="/images/Testimonial/Logomark (6).png"  // adjust path based on your public folder structure
            alt="Sisyphus"
            sx={{
            height: '40px',
            mb: 3,
            }}
        />
        <Box
            component="img"
            src="/images/Testimonial/Logotype (6).png"  // adjust path based on your public folder structure
            alt="Sisyphus_name"
            sx={{
            height: '40px',
            mb: 3,
            }}
        />
      </Box>

      {/* Testimonial Text */}
      <Typography
        variant="h5"
        color='#101828'
        sx={{
          mb: 4,
          fontWeight: 500,
          lineHeight: 1.4,
          fontSize:{lg:"48px",md:"40px",sm:"35px",xs:"30px"}
        }}
      >
        We've been using Untitled to kick start every new project and can't imagine working without it.
      </Typography>

      {/* Author Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Box
          component="img"
          src="/images/Testimonial/Avatar.png"  // adjust path based on your public folder structure
          alt="Author avatar"
          sx={{
            width: '48px',
            height: '48px',
            borderRadius: '50%',
            mb: 1,
          }}
        />
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 500,
            mb: 0.5,
          }}
        >
          Candice Wu
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
        >
          Product Manager, Sisyphus
        </Typography>
      </Box>
    </Box>
  );
};

export default Testimonial;
