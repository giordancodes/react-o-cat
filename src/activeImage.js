module.exports = function (){
	return <div className='activeImage'>
		<div className='overlay'>
			<div className='image'>
				<img src={ this.props.image } />

				<div className='actions'>
					<a href='#' onClick={ this.props.onClose }>Close</a>
				</div>
			</div>
		</div>
	</div>
}