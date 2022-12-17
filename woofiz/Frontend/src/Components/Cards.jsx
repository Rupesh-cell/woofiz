import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import '../Scss/featured.scss';
import axios from 'axios';

export default function cards() {
  
const options = {method: 'GET', url: 'http://localhost:3001/api/products'};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});


const go = {method: 'POST', url: 'http://localhost:3001/api/products/create'};

axios.request(options).then(function (response) {
  console.log(response.data);
}).catch(function (error) {
  console.error(error);
});
  return (
    <div className="card-collector">
          
          <div className="new">
          <h2>Featured Products</h2>
        <div className="cards-c">
          
    <Card sx={{ maxWidth: 265 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src="https://scontent.fpnq9-1.fna.fbcdn.net/v/t1.6435-9/186484352_738217190185816_210249930828436604_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=WCP3dxyAzZ8AX_igi1r&_nc_ht=scontent.fpnq9-1.fna&oh=00_AfDVJhTdr-_xhekGAgGYFjjYw806uo_ztcHHuG7yGYbhyw&oe=63B86B4A"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 265 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src="https://scontent.fpnq9-1.fna.fbcdn.net/v/t1.6435-9/186484352_738217190185816_210249930828436604_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=WCP3dxyAzZ8AX_igi1r&_nc_ht=scontent.fpnq9-1.fna&oh=00_AfDVJhTdr-_xhekGAgGYFjjYw806uo_ztcHHuG7yGYbhyw&oe=63B86B4A"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 265 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src="https://scontent.fpnq9-1.fna.fbcdn.net/v/t1.6435-9/186484352_738217190185816_210249930828436604_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=WCP3dxyAzZ8AX_igi1r&_nc_ht=scontent.fpnq9-1.fna&oh=00_AfDVJhTdr-_xhekGAgGYFjjYw806uo_ztcHHuG7yGYbhyw&oe=63B86B4A"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
         
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 265 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src="https://scontent.fpnq9-1.fna.fbcdn.net/v/t1.6435-9/186484352_738217190185816_210249930828436604_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=WCP3dxyAzZ8AX_igi1r&_nc_ht=scontent.fpnq9-1.fna&oh=00_AfDVJhTdr-_xhekGAgGYFjjYw806uo_ztcHHuG7yGYbhyw&oe=63B86B4A"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard hdjnm,
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 265 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src="https://scontent.fpnq9-1.fna.fbcdn.net/v/t1.6435-9/186484352_738217190185816_210249930828436604_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=WCP3dxyAzZ8AX_igi1r&_nc_ht=scontent.fpnq9-1.fna&oh=00_AfDVJhTdr-_xhekGAgGYFjjYw806uo_ztcHHuG7yGYbhyw&oe=63B86B4A"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>

    <Card sx={{ maxWidth: 265 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src="https://scontent.fpnq9-1.fna.fbcdn.net/v/t1.6435-9/186484352_738217190185816_210249930828436604_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=WCP3dxyAzZ8AX_igi1r&_nc_ht=scontent.fpnq9-1.fna&oh=00_AfDVJhTdr-_xhekGAgGYFjjYw806uo_ztcHHuG7yGYbhyw&oe=63B86B4A"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 265 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src="https://scontent.fpnq9-1.fna.fbcdn.net/v/t1.6435-9/186484352_738217190185816_210249930828436604_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=WCP3dxyAzZ8AX_igi1r&_nc_ht=scontent.fpnq9-1.fna&oh=00_AfDVJhTdr-_xhekGAgGYFjjYw806uo_ztcHHuG7yGYbhyw&oe=63B86B4A"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 265 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src="https://scontent.fpnq9-1.fna.fbcdn.net/v/t1.6435-9/186484352_738217190185816_210249930828436604_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=WCP3dxyAzZ8AX_igi1r&_nc_ht=scontent.fpnq9-1.fna&oh=00_AfDVJhTdr-_xhekGAgGYFjjYw806uo_ztcHHuG7yGYbhyw&oe=63B86B4A"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 265 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          src="https://scontent.fpnq9-1.fna.fbcdn.net/v/t1.6435-9/186484352_738217190185816_210249930828436604_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=WCP3dxyAzZ8AX_igi1r&_nc_ht=scontent.fpnq9-1.fna&oh=00_AfDVJhTdr-_xhekGAgGYFjjYw806uo_ztcHHuG7yGYbhyw&oe=63B86B4A"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Lizard
          </Typography>
          
        </CardContent>
      </CardActionArea>
      <CardActions>
      </CardActions>
    </Card>
   
    </div>
    </div>
    </div>
    
  );
}
