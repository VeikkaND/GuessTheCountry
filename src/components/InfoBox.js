const InfoBox = ({infoType, info, style}) => {
    return (
        <div style={style}>
            {infoType}: {info}
        </div>
    )
}

export default InfoBox