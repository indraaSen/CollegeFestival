import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActions } from '@mui/material';
import moment from 'moment';
import { userContext } from '../../component/feature/MainComponent/MainComponent';

const CardComponent = ({eventProgram, cardColor,cardImage,eventDate}:{eventProgram:string, cardColor:string, cardImage:string,eventDate:string}) => {
  
  const contextData = React.useContext(userContext);

  
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
          Event Date : {eventDate} <br />
          Event Start : {'04:00 PM'} <br />
          Event End : {'09:00 PM'} <br />
          Event status : {new Date().toLocaleDateString('en-GB') > eventDate ? 'Success' : new Date().toLocaleDateString('en-GB') < eventDate ? 'Up Comming': new Date().toLocaleDateString('en-GB') === eventDate ? "Live": ''}
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