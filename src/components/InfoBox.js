const InfoBox = ({infoType, info, style}) => {
    if(infoType === "flag") {
        return (
            <div style={style}>
                {infoType}: <img src={info}></img>
            </div>
        )
    }
    return (
        <div style={style}>
            {infoType}: {info}
        </div>
    )
}

export default InfoBox