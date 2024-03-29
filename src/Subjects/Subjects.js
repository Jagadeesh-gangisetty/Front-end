import './Subjects.css';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import {Link} from 'react-router-dom';
export default function Subjects() {
    const [isHovered,setIsHovered] = React.useState(false);
    const [isHoveredIndex,setIsHoveredIndex] = React.useState();
    const [hoveredIndex,setHoveredIndex] = React.useState();

    const arr=[1,2,3,4,5,6,7,8,9];

    const images=['sub1.png','sub2.png','sub3.png','sub4.jpg','sub5.jpg','sub6.jpg','sub7.jpg','sub8.jpg','sub9.png'];

    const handleMouseEnter1 = (index) => {
      setHoveredIndex(index);
    };
  
    const handleMouseLeave1 = () => {
      setHoveredIndex(null);
    };

   const handleMouseEnter = (index) => {
        setIsHovered(true);
        setIsHoveredIndex(index);
      };
    
    const  handleMouseLeave = () => {
        setIsHovered(false);
      };


  return (
    <>
    <div className='sub-name'>Our featured courses</div>
    <div className='subflex'>
    {arr.map((ele, index) => (
        <Card sx={{ maxWidth: 345 }}
         key={index}
         className={`card ${hoveredIndex === index ? 'hovered' : ''}`}
            onMouseEnter={() => handleMouseEnter1(index)}
            onMouseLeave={handleMouseLeave1}
         >
        <CardActionArea>
            <CardMedia
            component="img"
            height="180"
            image={images[index]}
            alt="green iguana"
            
            />
            <CardContent>
            <Typography 
            gutterBottom variant="h5" component="div"
             className={isHovered && isHoveredIndex === index ? "hovered-content" : "sub-course-name"}
              onMouseEnter={() => handleMouseEnter(index)}
             onMouseLeave={handleMouseLeave}>
            <Link to  = "/VideoPlayer">Fundamental of UX for Application design</Link>
            </Typography>
            <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000
                species, ranging across all continents except Antarctica
            </Typography>
            </CardContent>
        </CardActionArea>
        <CardActions>
            <Button size="small" color="primary">
            Share
            </Button>
        </CardActions>
        </Card>
        ))}
    </div>
    </>
  );
}