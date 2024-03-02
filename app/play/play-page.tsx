import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow'; 
import 'swiper/css/pagination';
import RobotGame from './game/game-page';
import Link from 'next/link'
import './play-page.css';

// Images
import robotMode from '/public/game/mode1.png';
import friendMode from '/public/game/mode2.png';
import randomMode from '/public/game/mode3.png';

import table1 from '/public/game/tables/table1.png';
import table2 from '/public/game/tables/table2.png';
import table3 from '/public/game/tables/table3.png';
import table4 from '/public/game/tables/table4.png';
import table5 from '/public/game/tables/table5.png';
import table6 from '/public/game/tables/table6.png';
import Popup from './popup';

const images = [table1, table2, table3, table4, table5, table6];

function BoardTheme() {
	const [slidesPerView, setSlidesPerView] = useState(3);
	const [initialSlide, setInitialSlide] = useState(2);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth < 1025) {
				setSlidesPerView(1);
				setInitialSlide(1);
			} else if (window.innerWidth < 1999) {
				setSlidesPerView(3);
				setInitialSlide(2);
			} else {
				setSlidesPerView(5);
				setInitialSlide(3);
			}
		};

		// Initial setup
		handleResize();

		// Listen to window resize event
		window.addEventListener('resize', handleResize);

		// Cleanup
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	return (
	<div>
		<div className="upperTitle">
		<h2>Choose a table</h2>
		</div>
		<div className="slider-container">
		<Swiper
			slidesPerView={slidesPerView}
			initialSlide={initialSlide}
			centeredSlides={true}
			effect="coverflow"
			coverflowEffect={{ 
				rotate: 50,
				stretch: 0,
				depth: 100,
				modifier: 1,
				slideShadows: true 
			}}
			loop={true}
			slideToClickedSlide={true}
			className="mySwiper"
		>
			{images.map((image, index) => (
			<SwiperSlide key={index}>
				<img src={image.src} alt={`Table ${index + 1}`} />
			</SwiperSlide>
			))}
		</Swiper>
		</div>
	</div>
	);
}

function GameMode() {
	const [showPopup, setShowPopup] = useState(false);
	const handlePopUp = () => {
		setShowPopup(!showPopup);
	}

	return (
		<div>
			{showPopup ? <Popup showPopup={showPopup} setShowPopup={setShowPopup}/> : null}
			<div className="upperTitle">
				<h2>Choose the enemy</h2>
			</div>
			<div className='game-mode-container'>
					<div className='game-mode-card'>
						<Link href="/play/game">
							{<span>Against Robot</span>}
						</Link>
						<img src={robotMode.src} alt="Game Mode" />
					</div>
					<div className='game-mode-card'>
						<span onClick={handlePopUp}>Against Friend</span>
						<img src={friendMode.src} alt="Game Mode" />
					</div>
					<div className='game-mode-card'>
						<span>Random Player</span>
						<img src={randomMode.src} alt="Game Mode" />
					</div>
			</div>
		</div>
	);
}

function PlayPage() {
	return (
	<div id='PlayPage'>
		<BoardTheme />
		<GameMode />
	</div>
	);
}

export default PlayPage;
