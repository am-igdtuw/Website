import React from 'react'
import {Banner,BannerContainer, BannerContent, BannerP, BannerImg, BannerH1} from './BannerElements';
import Img from '../../images/Grants.png';
function banner() {
  return (
    <>
    <Banner>
         <BannerH1>Sponsors</BannerH1>
        <BannerContainer>
           
            <BannerContent>
                <BannerImg src={Img} alt="image1"/>
                <BannerP>
                    Lorem Ipsum
                </BannerP>`
            </BannerContent>
            <BannerContent>
                <BannerImg src={Img} alt="image1"/>
                <BannerP>
                    Lorem Ipsum
                </BannerP>
            </BannerContent>
            <BannerContent>
                <BannerImg src={Img} alt="image1"/>
                <BannerP>
                    Lorem Ipsum
                </BannerP>
            </BannerContent>
            <BannerContent>
                <BannerImg src={Img} alt="image1"/>
                <BannerP>
                    Lorem Ipsum
                </BannerP>
            </BannerContent>
            <BannerContent>
                <BannerImg src={Img} alt="image1"/>
                <BannerP>
                    Lorem Ipsum
                </BannerP>
            </BannerContent>

        </BannerContainer>
    </Banner>
    </>
  )
}

export default banner
