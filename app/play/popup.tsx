import React from 'react'
import './play-page.css'

const friends = [
	{icon: "/game/icon3.png", name: "Yahya_TAQSI"},
	{icon: "/game/icon5.png", name: "Mimoun Tigunit"},
	{icon: "/game/icon4.png", name: "mtigunit"},
	{icon: "/game/icon5.png", name: "tigunit mimoun"},
	{icon: "/game/icon2.png", name: "username5"},
	{icon: "/game/icon3.png", name: "username6"},
	{icon: "/game/icon1.png", name: "username7"},
	{icon: "/game/icon0.png", name: "username8"},
];

function Popup({ showPopup, setShowPopup }: any) {
	if (!showPopup) return null
	const closePopup = () => {
		setShowPopup(false);
	}
	return (
		<>
			<div className='overlay'>
				<div className="popup-card">
					<h2>Available Friends</h2>
					<div className='friend-list'>
						{
							friends.map((friend, index) => {
								return (
									<ul key={index} className="friend">
										<li>
											<div className='friend-left-side'>
												<img src={friend.icon} alt=""/>
												<p>{friend.name}</p>
											</div>
											<button className="friend-button">
												<img src="/game/send_arrow_icon.png" alt="" />
											</button>
										</li>
									</ul>
								)
							})
						}
					</div>
					<button className='closeButton' onClick={closePopup}>close</button>
				</div>
			</div>
		</>
	)
}

export default Popup