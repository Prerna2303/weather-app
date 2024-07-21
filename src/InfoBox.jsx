import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

function InfoBox({info}) {
    const INIT_URL = "https://images.unsplash.com/photo-1580049904360-a9c3b79f86ff?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzR8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";

    const HOT_URL = "https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEhPVCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D";
    const COLD_URL = "https://images.unsplash.com/photo-1550077404-c00d89693129?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fENPTEQlMjB3ZWF0aGVyfGVufDB8fDB8fHww";
    const RAIN_URL = "https://images.unsplash.com/photo-1534274988757-a28bf1a57c17?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTZ8fFJBSU4lMjB3ZWF0aGVyfGVufDB8fDB8fHww";

  return (
    <div className="InfoBox">
      <div className="cardContainer">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          sx={{ height: 140 }}
          image= {
            info.humidity > 80
            ? RAIN_URL
            : info.temp > 15
            ? HOT_URL
            : COLD_URL
          }
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {info.city} {
                info.humidity > 80
                ? <ThunderstormIcon />
                : info.temp > 15
                ? <WbSunnyIcon />
                : <AcUnitIcon />
            }
          </Typography>
          <Typography variant="body2" color="text.secondary" component={"span"}>
            <p>Temperature = {info.temp}&deg;C</p>
            <p>Humidity = {info.humidity}&deg;C</p>
            <p>Min Temp = {info.tempMin}&deg;C</p>
            <p>Max Temp = {info.tempMax}&deg;C</p>
            <p>The weather can be described as {info.weather} and feels like = {info.feelslike}&deg;C</p>
          </Typography>
        </CardContent>
      
      </Card>
      </div>
    </div>
  );
}

export default InfoBox;
