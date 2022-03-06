import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import IconButton from '@mui/material/IconButton';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import InfoIcon from '@mui/icons-material/Info';
import { useState } from 'react'


export default function Javascript() {

    const [isActive, setActive] = useState("false");

    const handleToggle = () => {
      setActive(!isActive);
    };
    

  return (
    <div className='bg-gray-600 flex flex-col justify-center items-center'>
        <Box className='p-10 justify-center masonry sm:masonry-sm md:masonry-md lg:masonry-lg'>
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
        </Box>
      </div>
  );
}

 

const itemData = [
  {
    img: '/images/logo-test.PNG',
    title: 'Charlees Comfort Kitchen',
    link: "https://charlees-comfort-kitchen.com/",
    description: "Website for small business using HTML, CSS, Bootstrap, javascript, jQuery, Express, Node.js, sendMail, Google Calender, Flickr API Gallery"
  },
  {
    img: '/images/download.png',
    title: 'Samplified jQuery',
    link: "https://morning-scrubland-17473.herokuapp.com/",
    description: "Full Stack project sample sharing website (still in progress) using HTML, CSS, Materialize, javascript, jQuery, Express, AWS, Sequelize, Express-Sessions, JAWSDB, Heroku"
  },
  {
    img: '/images/background1.jpg',
    title: 'Octobit Music',
    link: "https://www.octobitmusic.com",
    description: "Website using HTML, CSS, Materialize, javascript, jQuery, Express, Node.js, Google Cloud Run"
  },
  {
    img: '/images/hair2.png',
    title: 'Brows for the Soul',
    link: "https://abramwingle.github.io/JAC-Project-1/",
    description: "Home business coding template, with portfolio photo API and google scheduler with payments"
  },
  {
    img: '/images/burger-back.png',
    title: 'Burger Space',
    link: "https://cryptic-sea-70725.herokuapp.com/",
    description: "A Burger Eatin' Application With Javascript, Node.js, Express, MySQL, Handlebars, Bootstrap"
  },
  {
    img: '/images/favicon2.png',
    title: 'Friend Finder',
    link: "https://peaceful-river-35049.herokuapp.com/",
    description: "Friend Finder implements friend matching based on the user's responses to a ten question survey"
  },
  {
    img: '/images/giftastic.gif',
    title: 'Giphy',
    link: "https://jjenks713.github.io/giphy/",
    description: "Object, usig Giphy API, search through form input and add an artist name. Clicking each artist button displays 10 gifs related to name"
  },
  {
    img: '/images/bot.gif',
    title: 'Liri Node App',
    link: "https://github.com/jjenks713/liri-node-app",
    description: "Backend app to search through Spotify, Bands in town and OMDB api's"
  },
  {
    img: '/images/trains.jpg',
    title: 'Train Scheduler',
    link: "https://jjenks713.github.io/trains/",
    description: "JS schedule app using Firebase and moment.js"
  },
  {
    img: 'https://images.pexels.com/photos/63328/wells-theatre-norfolk-virginian-seats-63328.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'Movie Trivia',
    link: "https://jjenks713.github.io/trivia-game/",
    description: "Simple Javascript application, trivia game"
  },
  {
    img: '/images/store.png',
    title: 'Bamazon Store',
    link: "https://github.com/jjenks713/bamazon",
    description: "Simple command line app with 2 functions, customer allows customer to purchase items. Manager allows allows you to add items, update inventory and view inventory"
  },

];
