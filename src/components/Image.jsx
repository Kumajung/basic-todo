import PropTypes from 'prop-types'
function Image({imageUrl}){
    return (
        <>
        <img src={imageUrl} alt="" width="200px" height="300px" style={{objectFit:"cover"}} />
        </>
    )
}
Image.propTypes = {
    imageUrl: PropTypes.string
  }
export default Image;