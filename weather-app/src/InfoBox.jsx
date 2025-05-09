import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

export default function InfoBox({ data }) {
    const { location, current } = data;
    const  COLD_URL='https://th.bing.com/th/id/OIP.GcVapOYzL5k8f6P0ZquyPQHaEq?w=233&h=180&c=7&r=0&o=5&cb=iwc1&dpr=1.3&pid=1.7';
    const HOT_URL='https://th.bing.com/th/id/OIP.WEsgaQPSQWE2AZ81k842owHaE8?cb=iwc1&rs=1&pid=ImgDetMain';
    const RAIN_URL='https://i.ytimg.com/vi/RR4qALfav5w/maxresdefault.jpg';
    
    return (
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          height="140"
          image={current.humidity>80?RAIN_URL:current.temperature>30?HOT_URL:COLD_URL}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {location.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Humidity: {current.humidity}%
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Visibility: {current.visibility} km
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            Temperature: {current.temperature}°C
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {current.weather_descriptions[0]} and feels like {current.feelslike}°C
          </Typography>
        </CardContent>
      </Card>
    );
  }
  