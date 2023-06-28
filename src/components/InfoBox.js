const InfoBox = ({infoType, info, style}) => {
    if(infoType === "flag") {
        return (
            <div style={style} className="clue">
                {infoType}: <br/><br/>
                <img src={info} alt="Flag of the country"></img>
            </div>
        )
    } else if (infoType === "Population") {
        return (
            <div style={style} className="clue">
                {infoType}: {new Intl.NumberFormat().format(info)}
            </div>
        )
    } else if (infoType === "Area") {
        return (
            <div style={style} className="clue">
                {infoType}: {new Intl.NumberFormat().format(info)} sq. km
            </div>
        )
    }
    return (
        <div style={style} className="clue">
            {infoType}: {info}
        </div>
    )
}

export default InfoBox