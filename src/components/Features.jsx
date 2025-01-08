import { Box, Typography, Grid, Paper } from '@mui/material';

const featureItems = [
  {
    icon: <img src="/images/features_icon/message-chat-circle.png" alt="Share team inboxes"/>,
    title: "Share team inboxes",
    description: "Whether you have a team of 2 or 200, our shared inboxes keep everyone on the same page and in the loop."
  },
  {
    icon: <img src="/images/features_icon/zap.png" alt="Deliver instant answers" />,
    title: "Deliver instant answers",
    description: "An all-in-one customer service platform that helps you balance everything your customers need to be happy."
  },
  {
    icon: <img src="/images/features_icon/chart-breakout-square.png" alt="Manage your team with reports" />,
    title: "Manage your team with reports",
    description: "Measure what matters with Untitled's easy-to-use reports. You can filter, export, and drilldown on the data in a couple clicks."
  },
  {
    icon: <img src="/images/features_icon/message-smile-circle.png" alt="Connect with customers"/>,
    title: "Connect with customers",
    description: "Solve a problem or close a sale in real-time with chat. If no one is available, customers are seamlessly routed to email without confusion."
  },
  {
    icon: <img src="/images/features_icon/command.png" alt="Connect the tools you already use"/>,
    title: "Connect the tools you already use",
    description: "Explore 100+ integrations that make your day-to-day workflow more efficient and familiar. Plus, our extensive API."
  },
  {
    icon: <img src="/images/features_icon/message-heart-circle.png" alt="Our people make the difference"/>,
    title: "Our people make the difference",
    description: "We're an extension of your customer service team, and all of our resources are free. Chat to our friendly team 24/7 when you need help."
  }
];

export default function Features() {
  return (
    <Box sx={{ py: 8, px: 2 }}>
      <Box sx={{ textAlign: 'center', mb: 6 }}>
        <Typography 
          gutterBottom
          sx={{
            fontWeight:600,
            color:"#E63F3A",
            fontSize:{lg:"16px",md:"16px",sm:"14px",xs:"14px"}
          }}
        >
          Features
        </Typography>
        <Typography 
          variant="h3" 
          component="h2" 
          gutterBottom
          sx={{ mb: 2,fontWeight:600, fontSize:{lg:"36px",md:"34px",sm:"32px",xs:"30px"},color:"#101828"}}
        >
          Analytics that feels like it's from the future
        </Typography>
        <Typography 
          variant="body1" 
          color="text.secondary"
          sx={{ maxWidth: '800px', mx: 'auto' ,fontSize:{lg:"20px",md:"20px",sm:"18px",xs:"18px"}, color:"#475467"}}
        >
          Powerful, self-serve product and growth analytics to help you convert, engage, and retain more users. Trusted by over 4,000 startups.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {featureItems.map((item, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Paper 
              elevation={0}
              sx={{
                p: 3,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent:"center",
                backgroundColor: 'transparent'
              }}
            >
              <Box 
                sx={{ 
                  p: 2, 
                  borderRadius: 1,
                  mb: 1,
                  height:{lg:"48px",md:"46px",sm:"42px",xs:"40px"},
                  width:{lg:"48px",md:"46px",sm:"42px",xs:"40px"},
                  display:"flex",
                  alignItems:"center",
                  justifyContent:"center",
                  border:"1px solid #EAECF0"
                }}
              >
                {item.icon}
              </Box>
              <Typography variant="h6" component="h3" gutterBottom textAlign={"center"} fontWeight={600}
                fontSize={{lg:"20px",md:"20px",sm:"18px",xs:"18px"}} color='#101828'>
                {item.title}
              </Typography>
              <Typography variant="body2" color="#475467" textAlign={"center"} fontWeight={400}
               fontSize={{lg:"16px",md:"16px",sm:"16px",xs:"16px"}}>
                {item.description}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
