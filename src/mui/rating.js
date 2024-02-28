import { Rating ,defaultValue , name } from "@mui/material";

export function Myrate(){
    return(
        <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
    )
}