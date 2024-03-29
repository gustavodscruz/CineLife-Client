import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper } from "@mui/material";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";

const Hero = ({movies}) => {
    return (
        <div>
            <Carousel>
                {
                    movies.map((movie)=>{
                        return(
                            <Paper>
                                <div className="movie-card-container">
                                    <div class="movie-card" style={{"--img" : `url(${movie.backdrops[0]})`}}>
                                        <div class="movie-detail">
                                            <div className="movie-poster">
                                                <img src={movie.poster} alt="" />
                                            </div>
                                            <div className="movie-title">
                                                <h4>{movie.title}</h4>
                                            </div>
                                            <div className="movie-buttons-container">
                                                <div className="play-button-icon-container">
                                                    <FontAwesomeIcon className="play-button-icon" 
                                                    icon={faCirclePlay}    
                                                />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Paper>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}

export default Hero;