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
                <span>{infoType}: </span>
                <span id="info">
                    {new Intl.NumberFormat().format(info)}
                </span>
            </div>
        )
    } else if (infoType === "Area") {
        return (
            <div style={style} className="clue">
                <span>{infoType}: </span>
                <span id="info">
                    {new Intl.NumberFormat().format(info)} 
                </span> 
                <span id="unit"> km&sup2; </span>
            </div>
        )
    }
    return (
        <div style={style} className="clue">
            <span>{infoType}: </span><span id="info">{info}</span>
        </div>
    )
}

export default InfoBox