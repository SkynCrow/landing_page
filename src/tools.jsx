
export const GetOrientation = () => {
    return window.matchMedia("(orientation: portrait)").matches === true
        ? "portrait"
        : "landscape";
    }