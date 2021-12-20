

const WrappedImage = ({ src, ...props }) => (
    <img {...props} src={`${process.env.img_url}/${src}`} />
);

export default WrappedImage;