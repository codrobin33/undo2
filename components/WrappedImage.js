import Image from "next/image";

const WrappedImage = ({ src, ...props }) => (
    <Image
        {...props}
        src={`/${src}`}
        layout="fill"
    />
);

export default WrappedImage;