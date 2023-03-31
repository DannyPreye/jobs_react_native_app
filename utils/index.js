export const checkImageUrl = (uri) => {
    if (!uri) return false;
    else {
        const pattern = new RegExp(
            "^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$",
            "i"
        );
        return pattern.test(uri);
    }
};
