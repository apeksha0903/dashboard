import { Box, Typography, Button } from '@mui/material';
const Blog = () => {
  const blogPosts = [
    {
      category: 'Design',
      title: 'UX review presentations',
      description: 'How do you create compelling presentations that wow your colleagues and impress your managers?',
      author: 'Olivia Rhye',
      date: '20 Jan 2024',
      image: '/images/blogs/Image.png',
      authorAvatar: '/images/blogs/Avatar (1).png'
    },
    {
      category: 'Product',
      title: 'Migrating to Linear 101',
      description: 'Linear helps streamline software projects, sprints, tasks, and bug tracking. Here\'s how to get started.',
      author: 'Phoenix Baker',
      date: '19 Jan 2024',
      image: '/images/blogs/Image (1).png',
      authorAvatar: '/images/blogs/Avatar (2).png'
    },
    {
      category: 'Software Engineering',
      title: 'Building your API stack',
      description: 'The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them.',
      author: 'Lana Steiner',
      date: '18 Jan 2024',
      image: '/images/blogs/Image (2).png',
      authorAvatar: '/images/blogs/Avatar (3).png'
    }
  ];

  return (
    <Box sx={{ p: 4}}>
      {/* Header */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Box>
          <Typography variant="subtitle1" color="#E63F3A"
           sx={{ mb: 1, 
            fontSize:{lg:"16px",md:"16px",sm:'14px',xs:"14px"},
            fontWeight:600
            }}>
            Our blog
          </Typography>
          <Typography  sx={{ mb: 1,
            fontSize:{lg:"36px",md:"34px",sm:'32px',xs:"30px"},
            fontWeight:600,
            color:"#101828"
           }}>
            Latest blog posts
          </Typography>
          <Typography variant="body1" sx={{
                fontSize:{lg:"20px",md:"20px",sm:'18px',xs:"18px"},
                fontWeight:500,
                color:"#475467"
          }}>
            Tool and strategies modern teams need to help their companies grow.
          </Typography>
        </Box>
        <Button sx={{bgcolor:"#E63F3A", display:{lg:"flex",md:"flex",sm:"none",xs:"none"}}} variant="contained" to="/blog">
          View all posts
        </Button>
      </Box>

      {/* Blog Posts Grid */}
      <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' }, gap: 3 }}>
        {blogPosts.map((post, index) => (
          <Box key={index} sx={{ cursor: 'pointer' }}>
            <Box 
              component="img"
              src={post.image}
              sx={{
                width: '100%',
                height: 200,
                objectFit: 'cover',
                borderRadius: 1,
                mb: 2
              }}
            />
            <Typography variant="subtitle2" sx={{ mb: 1, fontSize:"14px", fontWeight:600, color:"#E63F3A" }}>
              {post.category}
            </Typography>
            <Typography variant="h6" sx={{ 
              mb: 1,
              color: "#101828", 
              fontSize: "24px", 
              fontWeight: 600,
              display: 'flex',
              alignItems: 'center',
              justifyContent:"space-between"
            }}>
              {post.title}
              <Box component="span" sx={{ 
                display: 'inline-flex',
                alignItems: 'center'
              }}>
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Box>
            </Typography>
            <Typography variant="body2" color="#475467" sx={{ mb: 2, fontSize:"16px", fontWeight:400 }}>
              {post.description}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
              <Box
                component="img"
                src={post.authorAvatar || '/default-avatar.png'}
                sx={{
                  width: 32,
                  height: 32,
                  borderRadius: '50%',
                  objectFit: 'cover'
                }}
              />
              <Box>
                <Typography  sx={{ color: '#101828', fontSize: '14px', fontWeight: 600 }}>
                  {post.author}
                </Typography>
                <Typography  sx={{ color: '#475467', fontSize: '14px' }}>
                  {post.date}
                </Typography>
              </Box>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Blog;
