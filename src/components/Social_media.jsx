import { Box } from '@mui/material';
import React from 'react';

const SocialMedia = () => {

    const companies = {
        company1: {
            logo: "../images/social_media/Logomark (2).png",
            name: "../images/social_media/Logotype (2).png"
        },
        company2: {
            logo: "../images/social_media/Logomark (1).png",
            name: "../images/social_media/Logotype (1).png"
        },
        company3: {
            logo: "../images/social_media/Logomark.png",
            name: "../images/social_media/Logotype.png"
        },
        company4: {
            logo: "../images/social_media/Logomark (5).png",
            name: "../images/social_media/Logotype (5).png"
        },
        company5: {
            logo: "../images/social_media/Logomark (4).png",
            name: "../images/social_media/Logotype (4).png"
        },
        company6: {
            logo: "../images/social_media/Logomark (3).png",
            name: "../images/social_media/Logotype (1).png"
        }
    }

    return(
        <Box sx={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            justifyContent: "center" ,
            pt:{lg:"80px",md:"80px",sm:"80px",xs:"16px"},
            pb:{lg:"80px",md:"80px",sm:"80px",xs:"16px"},
        }}>
            <Box sx={{
                fontSize:"16px",
                lineHeight:"24px",
                fontWeight:"500",
                textAlign:"center",
                color:"#475467",
            }}
            >
                <p>Join 4,000+ companies already growing</p>
            </Box>
            <Box sx={{
                display: "grid",
                gridTemplateColumns: {
                    lg: "repeat(6, 1fr)",
                    md: "repeat(3, 1fr)",
                    sm: "repeat(2, 1fr)",
                    xs: "repeat(2, 1fr)"
                },
                gap: 4,
                width: "100%",
                maxWidth: "1200px",
                px: 2
            }}>
                {Object.entries(companies).map(([companyKey, paths]) => (
                    <Box key={companyKey} sx={{
                        display: "flex",
                        flexDirection: "column",  // Stack logo and name vertically
                        justifyContent: "center",
                        alignItems: "center",
                        gap: 2  // Space between logo and name
                    }}>
                        <img 
                            src={paths.logo} 
                            alt={`${companyKey} logo`}
                            style={{
                                maxWidth: "100%",
                                height: {lg:"44px",md:"40px",sm:"36px",sm:"33px"},
                                width: {lg:"44px",md:"40px",sm:"36px",sm:"33px"},
                            }}
                        />
                        <img 
                            src={paths.name} 
                            alt={`${companyKey} name`}
                            style={{
                                maxWidth: "100%",
                                height: "auto"
                            }}
                        />
                    </Box>
                ))}
            </Box>
        </Box>
    );
};

export default SocialMedia;
