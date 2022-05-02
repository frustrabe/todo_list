function Backdrop(props) {
    return <div className="backdrop" onClick={props.onCancel} />; /*the div has no content so while in JSX it can be self-closed*/
}

export default Backdrop;