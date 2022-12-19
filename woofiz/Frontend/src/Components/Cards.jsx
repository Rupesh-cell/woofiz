import React, { useEffect, useState } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import "../Scss/featured.scss";
import axios from "axios";

export default function Cards() {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    const options = {
      method: "GET",
      url: "http://localhost:3001/api/products",
    };

    axios
      .request(options)
      .then(function (response) {
        setProducts(response.data.products);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="card-collector">
      <div className="new">
        <h2>Featured Products</h2>
        <div className="cards-c">
          {products ? (
            products?.map((items, index) => {
              return (
                <Card sx={{ maxWidth: 265 }}>
                  {console.log(items)}
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="140"
                      src={items.productImages[0].image}
                    />
                    <CardContent>
                      <Typography gutterBottom variant="h5" component="div">
                        {items.name}
                      </Typography>
                    </CardContent>
                  </CardActionArea>
                  <CardActions></CardActions>
                </Card>
              );
            })
          ) : (
            <h1>No data available</h1>
          )}
        </div>
      </div>
    </div>
  );
}
