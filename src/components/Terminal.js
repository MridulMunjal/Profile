import React from 'react';
import Style from "./Terminal.module.scss";
import classNames from "classnames";
import { Box } from "@mui/material";

const iconClass = "fa fa-circle";

function Terminal(props) {
  const { text } = props;

  return (
    <>
      <Box component={'section'} className={classNames(Style.terminal, Style.shadowed)}
        width={{ xs: '80%', md: '50%' }} borderRadius={'0.5rem'} mb={'4rem'}>
        <Box sx={{ backgroundColor: '#8c8c8c' }} p={'0.5rem'} borderRadius={'0.5rem 0.5rem 0 0'}
          fontSize={'1rem'} style={{ display: 'flex' }}>
          <div className="h-4 w-4 rounded-full bg-red-500"></div>
          <div className="h-4 w-4 rounded-full bg-yellow-500 mx-2"></div>
          <div className="h-4 w-4 rounded-full bg-green-500"></div>
        </Box>
        <Box py={{ xs: '1rem', md: '2rem' }} px={{ xs: '2rem', md: '3rem' }} borderRadius={'0 0 0.5rem 0.5rem'}
          sx={{ backgroundColor: '#27242f' }} fontSize={'1rem'} fontFamily={'Courier New, Courier, monospace'}>
          {text}
        </Box>
      </Box>
    </>);
}

export default Terminal;