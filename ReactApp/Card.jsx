import React from 'react'
// import '../assets/css/style.css'
export default function Card() {
	const cardTitle_text =
		'card text Lorem ipsum dolor, sit amet consectetur adipisicing elit.'
	return (
		<div>
			<div className='card'>
				<div className='card_lay'>
					<div className='card_org card_style'>
						<div className='card_mol card_textArea'>
							<h3 className='card_atm cardTitle'>{cardTitle_text}</h3>
							<p className='card_atm cardText'>
								Lorem ipsum dolor sit amet consectetur adipisicing elit.
								Deleniti, impedit? Repellendus, nobis!
							</p>
						</div>
						<div className='plate_mol buttonArea fx fx-jc-e'>
							<button className='btn success normal mx-16 mb-12'>
								<a href='#' className='btnSize-sm'>
									送信する
								</a>
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}
