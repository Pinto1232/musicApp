import React, { Component } from 'react';
import Slider from 'react-slick';

export default class Carousel extends Component {
	render() {
		var settings = {
			dots: false,
			infinite: true,
			speed: 50,
			slidesToShow: 4,
			slidesToScroll: 4,
			initialSlide: 0,
			responsive: [
				{
					breakpoint: 1024,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
						infinite: true,
						dots: true
					}
				},
				{
					breakpoint: 600,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
						initialSlide: 2
					}
				},
				{
					breakpoint: 480,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1
					}
				}
			]
		};
		return (
			<div>
				<Slider {...settings}>
					{[ 1, 2, 3, 4, 5, 6, 7, 4, 5, 65 ].map((item, index) => {
						return <div className='text-white'>{item}</div>;
					})}
				</Slider>
			</div>
		);
	}
}
