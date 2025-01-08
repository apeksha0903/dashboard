import { 
  Box, 
  Typography, 
  Accordion, 
  AccordionSummary, 
  AccordionDetails,
  Button,
  Avatar,
  AvatarGroup 
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Faq = () => {
  const faqData = [
    {
      question: "Is there a free trial available?",
      answer: "Yes, you can try us for free for 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
    },
    {
      question: "Can I change my plan later?",
      answer: "Yes, you can change your plan at any time."
    },
    {
      question: "What is your cancellation policy?",
      answer: "You can cancel your subscription at any time."
    },
    {
      question: "Can other info be added to an invoice?",
      answer: "Yes, you can add additional information to your invoices."
    },
    {
      question: "How does billing work?",
      answer: "We bill on a monthly basis."
    },
    {
      question: "How do I change my account email?",
      answer: "You can change your account email through your account settings."
    },
  ];

  return (
    <Box sx={{ maxWidth: '800px', mx: 'auto', py: 8, px: 3 }}>
      <Typography 
        variant="h4" 
        component="h2" 
        align="center" 
        gutterBottom
        color='#101828'
        sx={{ fontWeight:600, mb: 1 , fontSize:{lg:"36px",md:"34px",sm:"32px",xs:"30px"}}}
      >
        Frequently asked questions
      </Typography>
      
      <Typography 
        variant="body1" 
        align="center" 
        color="#475467"
        sx={{ mb: 4 ,
            fontSize:{lg:"20px",md:"20px",sm:"18px",xs:"18px"}
        }}
      >
        Everything you need to know about the product and billing.
      </Typography>

      <Box sx={{ mb: 6 }}>
        {faqData.map((faq, index) => (
          <Accordion key={index} sx={{ mb: 1, '&:before': { display: 'none' } }}>
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              sx={{ 
                '& .MuiAccordionSummary-content': { 
                  margin: '12px 0',
                }
              }}
            >
              <Typography  color='#101828' sx={{fontSize:"18px", fontWeight:500}}>{faq.question}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography color="#475467"  sx={{fontSize:"16px"}}>
                {faq.answer}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>

      <Box 
        sx={{ 
          textAlign: 'center',
          mt: 6,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 2
        }}
      >
        <AvatarGroup 
          max={3}
          sx={{
            '& .MuiAvatar-root': { 
              width:100, 
              height: 50,
              border: '2px solid #fff'
            }
          }}
        >
          {/* Replace src with your actual avatar images */}
          <Avatar alt="Team Member 1" src="/images/Faq/Avatar group.png" width={"50px"}/>
        </AvatarGroup>

        <Typography variant="h6" sx={{ fontWeight:600, fontSize:"20px", color:"#101828" }}>
          Still have questions?
        </Typography>
        
        <Typography color="text.secondary" sx={{ mb: 2, fontSize:"18px", color:"#475467" }}>
          Can't find the answer you're looking for? Please chat to our friendly team.
        </Typography>

        <Button 
          variant="contained" 
          
          sx={{ 
            borderRadius: 2,
            px: 3,
            py: 1,
            bgcolor:"#E63F3A",
            color:"white"
          }}
        >
          Get in touch
        </Button>
      </Box>
    </Box>
  );
};

export default Faq;
