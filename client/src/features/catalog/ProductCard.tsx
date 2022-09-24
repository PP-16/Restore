import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Avatar,
  CardHeader,
  IconButton,
} from "@mui/material";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { Product } from "../../app/models/Product";
import { Link } from "react-router-dom";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import agent from "../../app/api/agent";
import { useAppDispatch, useAppSelector } from "../../app/store/configureStore";
import { addBasketItemAsync, setBasket } from "../basket/basketSlice";

interface Props {
  product: Product;
}

export default function ProductCard({ product }: Props) {
  const { status } = useAppSelector((state) => state.basket);
  const dispatch = useAppDispatch();

  return (
    <>
      <Card sx={{ maxWidth: "100%" }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
              {product.name.at(0)?.toUpperCase()}
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={product.pictureUrl}
          subheader={product.name}
        />
        <CardMedia
          component="img"
          alt="green iguana"
          height="100%"
          sx={{ backgroundColorSize: "contain", bgcolor: "#F6F6F6" }}
          image={product.pictureUrl}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            ฿ {(product.price / 100).toFixed(2)}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.brand}
          </Typography>
        </CardContent>
        <CardActions>
          <LoadingButton
            loading={status.includes("pendingAddItem" + product.id)} //includes('pending') ข้อควำมที่ต้องกำรค้นหำหรือเปรียบเทียบ
            onClick={() =>dispatch(addBasketItemAsync({ productId: product.id }))}
            size="small"
          >
            Add to cart
          </LoadingButton>
          <Button size="small" component={Link} to={`/catalog/${product.id}`}>
            View
          </Button>
        </CardActions>
      </Card>
    </>
  );
}
