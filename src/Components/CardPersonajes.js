import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";

const CardPersonajes = ({ img, name, status, species }) => {
  return (
    <Card sx={{ width: 250, m: 2, boxShadow: 3 }}>
      <CardMedia component="img" height="250" image={img} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {status}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {species}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CardPersonajes;
