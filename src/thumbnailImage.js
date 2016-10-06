module.exports = function(){
	return <div className='col-md-3'>
		<a href='#' className='thumbnail' onClick={ this.props.onSelect }>
			<img src={ this.props.image } />
		</a>
	</div>
}