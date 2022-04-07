export const disableElement = (elementRef:React.MutableRefObject<any>) => {
    elementRef.current.style.visibility = "hidden";
}