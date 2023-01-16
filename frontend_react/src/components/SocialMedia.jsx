import React from 'react';
import { BsTwitter, BsInstagram } from 'react-icons/bs';
import { AiFillLinkedin } from 'react-icons/ai';

const SocialMedia = () => {
    return (
        <div className='app__social'>
            <a href="https://twitter.com/baddilika">
                <BsTwitter />
            </a>
            <a href="https://www.linkedin.com/in/larry-iyere-page/">
                <AiFillLinkedin />
            </a>
            <a href="https://www.instagram.com/baddilika/">
                <BsInstagram />
            </a>
        </div>
    )
};

export default SocialMedia;
