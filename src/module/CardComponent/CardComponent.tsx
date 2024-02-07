import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const CardComponent = ({eventProgram, cardColor,eventDate,eventStart,eventEnd,eventStatus}:{eventProgram:string, cardColor:string,eventDate:string,eventStart:string,eventEnd:string,eventStatus:string}) => {

  return (
    <Card sx={{ maxWidth: 250 }}>
      <CardMedia
        sx={{ height: 140 }}
        component="img"
        image={""}
        title={eventProgram}
      
      />
      <CardContent sx={{background: {cardColor}}}>
        <Typography gutterBottom variant="h5" component="div">
          {eventProgram}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <b>
          Event Date : {eventDate} <br />
          Event Start : {eventStart} <br />
          Event End : {eventEnd} <br />
          Event status : {eventStatus}
          </b>
        </Typography>
      </CardContent>
      {/* <CardActions>
        <Button size="small" onClick={momentcomp}>Share</Button>
      </CardActions> */}
    </Card>
  );
}

export default CardComponent;

