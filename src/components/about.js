import React from 'react';
import me from '../../assets/images/me.png';
import logo from '../../assets/images/logo.png';
import { motion, useScroll, useTransform } from "framer-motion";
import React from 'react';
import Style from './Home.module.scss';
import classNames from 'classnames';
import EmojiBullet from './emojibullet';
import SocialIcon from "./smallIcon";
import { Box } from "@mui/material";
import { info } from "../../info";

const About = () => {
    return (
        <>
            <div className='font-Bold'>
                <Box component={'main'} display={'flex'} flexDirection={{ xs: 'column', md: 'row' }} alignItems={'center'}
                    justifyContent={'center'} minHeight={'calc(100vh - 175px)'} id={'home'}>
                    <Box className={classNames(Style.avatar, Style.shadowed)} alt={'image of developer'} style={{ background: info.gradient }} component={'img'} src={me} width={{ xs: '35vh', md: '40vh' }}
                        height={{ xs: '35vh', md: '40vh' }}
                        borderRadius={'50%'} p={'0.75rem'} mb={{ xs: '1rem', sm: 0 }} mr={{ xs: 0, md: '2rem' }} />
                    <Box>
                        <h1 className="text-slate-200 font-bold text-xl mb-2 hover:animate-bounce">Hi, I'm <span style={{ background: info.gradient, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>{info.firstName}</span><span className={Style.hand}>🖐</span>
                        </h1>
                        <h2 className="text-slate-200 font-bold text-xl mb-2 hover:animate-bounce" >I'm {info.position}.</h2>
                        <Box component={'ul'} p={'0.8rem'}>
                            {info.miniBio.map((bio, index) => (
                                <EmojiBullet key={index} emoji={bio.emoji} text={bio.text} />
                            ))}
                        </Box>
                        <Box display={'flex'} gap={'1.5rem'} justifyContent={'center'} fontSize={{ xs: '2rem', md: '2.5rem' }} >
                            {info.socials.map((social, index) => (
                                <SocialIcon key={index} link={social.link} icon={social.icon} label={social.label} />
                            ))}
                        </Box>
                    </Box>
                </Box>
            </div>



        </>
    );
}

export default About