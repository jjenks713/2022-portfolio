import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import IconButton from '@mui/material/IconButton';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import InfoIcon from '@mui/icons-material/Info';
import { useState } from 'react'


export default function ReactFunction() {

    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
      setActive(!isActive);
    };
    

    return (
        <div className='grid justify-center'>
          <Box sx={{ width: 1000, height: 450}}>
          <ImageList variant="masonry" cols={3} gap={8}>
              {itemData.map((item) => (
                  <>
  
                  {isActive ? 
                      <ImageListItem key={item.img}>
                      <a //eslint-disable-line
                      href={item.link} 
                      target="_blank">
                      <img //eslint-disable-line
                      src={`${item.img}?w=248&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                      />
                      </a>
                      <ImageListItemBar
                      title={item.title}
                      subtitle={item.description}
                      actionIcon={
                      <IconButton
                          sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                          aria-label={`info about ${item.description}`}
                          id={item.title}
                          onClick={handleToggle}
                      >
                          <InfoIcon />
                      </IconButton>
                      }
                      />
                      </ImageListItem>
                  : 
                      <ImageListItem key={item.img} className="relative">
                      <a //eslint-disable-line
                      href={item.link} 
                      target="_blank">
                      <img //eslint-disable-line
                      className='opacity-20'
                      src={`${item.img}?w=248&fit=crop&auto=format`}
                      srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                      alt={item.title}
                      loading="lazy"
                      />
                      <div
                      className='absolute top-0 flex bg-transparent bg-cover text-black text-lg text-center'
                      
                      ><p>{item.description}</p></div>
                      </a>
                      <ImageListItemBar
                          sx={{
                              background:
                              'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
                              'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
                          }}
                          title={item.title}
                          actionIcon={
                              <IconButton
                              sx={{ color: 'white' }}
                              aria-label={`star ${item.title}`}
                              onClick={handleToggle}
  
                              >
                              <InfoIcon />
                              </IconButton>
                          }
                          />
                      </ImageListItem>
                  }
                  </>
              ))}
          </ImageList>
          </Box>
        </div>
    );
}

const itemData = [
{
    img: '/images/self-port.jpg',
    title: 'Creepy but Cute Press',
    link: "https://cbcp-next.vercel.app/",
    description: "Website for small business using HTML, CSS, Bootstrap, javascript, React, Next.js, sendMail, Google Cloud Run"
  },
  {
    img: '/images/logo-dark.png',
    title: 'Samplified',
    link: "https://samplified-next.vercel.app/",
    description: "Full stack sample sharing app using React, Next.js, MongoDB, AWS, MUI, Tailwind, Vercel"
  },
    {
    img: '/images/rick.jpg',
    title: 'Clicky Game',
    link: "https://jjenks713.github.io/clicky/",
    description: "React app, simple clicky game"
  },
    {
    img: 'https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'Google Book Search',
    link: "https://gentle-castle-12772.herokuapp.com/",
    description: "React app, using Google Books API and MongoDB to search, save and delete books!"
  },
    {
    img: '/images/santa.JPG',
    title: 'Socially Aware Santa',
    link: "https://self-aware-santa.herokuapp.com/#/",
    description: "Vue.js application to create and manage secret santa lists. This uses Vue and MongoDB"
  },
]