import React from 'react';
import { Box } from "@mui/material";

function EmojiBullet(props) {
    const { emoji, text } = props;

    return (
        <div className=" text-base hover:animate-bounce mb-2">
            <Box component={'li'} fontSize={'1rem'} lineHeight={1.5} style={{ cursor: 'pointer',color:'rgb(203 213 225)' }}>
                <Box component={'span'} aria-label="cheese"
                    role="img"
                    mr={{ xs: '0.5rem', md: '1rem' }} fontSize={'1.5rem'}>{emoji}</Box> {text}
            </Box>
        </div>);
}

export default EmojiBullet;