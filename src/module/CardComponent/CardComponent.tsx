import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CardComponent = ({eventProgram, cardColor,cardImage}:{eventProgram:string, cardColor:string, cardImage:string}) => {

  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        sx={{ height: 140 }}
        component="img"
        image={cardImage}
        title={eventProgram}
      
      />
      <CardContent sx={{background: cardColor}}>
        <Typography gutterBottom variant="h5" component="div">
          {eventProgram}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>
          Event Date : {'02/02/2024'} <br />
          Event Start : {'04:00 PM'} <br />
          Event End : {'09:00 PM'} <br />
          Event status : {'Successfull'}
          </b>
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions> */}
    </Card>
  );
}

export default CardComponent;