export const enableElement = (elementRef:React.MutableRefObject<any>) => {
    elementRef.current.style.visibility = "initial";
}