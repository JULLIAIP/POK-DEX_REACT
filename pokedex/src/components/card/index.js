import * as React from "react";
import { IconButton } from "@mui/material";
import { NavLink } from "react-router-dom";
import {
  BottomCard,
  ButtonsAlign,
  CardContain,
  ImageContain,
  TopCard,
} from "./style";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";
import CircleIcon from "@mui/icons-material/Circle";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";

export default function ActionAreaCard(props) {
  return (
    <CardContain>
      <TopCard>
        <CircleIcon />
        <MoreHorizIcon />
      </TopCard>
      <ImageContain>
        <img src={props.item.sprites.front_default} alt={props.item.id} />{" "}
      </ImageContain>
      <BottomCard>
        <h5>{props.item.forms[0].name}</h5>
        <ButtonsAlign>
          <IconButton aria-label="verDetalhes" size="small"  title={'VER DETALHES'}>
            <NavLink to={`/details/${props.item.id}`}>
              <RemoveRedEyeIcon />
            </NavLink>
          </IconButton>

          <IconButton
            title={props.action}
            aria-label="action"
            size="small"
            onClick={() => props.fc(props.item)}
          >
            {props.icon}
          </IconButton>
        </ButtonsAlign>
      </BottomCard>
    </CardContain>
  );
}
