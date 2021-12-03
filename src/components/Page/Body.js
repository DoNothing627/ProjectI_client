import React, { useEffect, useState } from "react";
import Slider from '../../assets/js/Slider'
import classes from '../../assets/CSS/Body.module.css'
import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons";
import styled from 'styled-components'

const Wrapper = styled.div`
    height: 100 %;
    display: flex;
    transition: all 0.75s ease;
    transform: translateX(${props => props.sliderIndex * -100}vw);
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${(props) => props.bg};
    opacity: 0.95;
`;

const Body = props => {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIndex((index + 1) % 4);
        }, 3000);
        return () => {
            clearTimeout(timer);
        }
    }, [index])

    const clickHandler = type => {
        if (type === "left") {
            setIndex(index === 0 ? 3 : index - 1);
        } else {
            setIndex(index === 3 ? 0 : index + 1);
        }
    }

    return <>
        <div className={classes.container}>
            <div className={classes['arrow-left']}>
                <ArrowLeftOutlined onClick={() => clickHandler("left")} />
            </div>
            <Wrapper sliderIndex={index}>
                {Slider.map(slider =>
                    <Slide bg={slider.bg}>
                        <div className={classes.image}>
                            <img src={slider.img} />
                        </div>
                        <div className={classes.info}>
                            <div className={classes.title}>
                                {slider.title}
                            </div>
                            <div className={classes.desc}>
                                {slider.desc}
                            </div>
                            <button className={classes.button}>BUY NOW</button>
                        </div>
                    </Slide>
                )}
            </Wrapper>
            <div className={classes['arrow-right']}>
                <ArrowRightOutlined onClick={() => clickHandler("right")} />
            </div>
        </div>

    </>
}

export default Body;