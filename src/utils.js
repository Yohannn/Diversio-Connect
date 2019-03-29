// Give 6 hex digits color code given any string of characters
// so that strings of same characters are coded to same color.
export const stringToColour = (str) => {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    }
    let colour = '#';
    for (let i = 0; i < 3; i++) {
      let value = (hash >> (i * 8)) & 0xFF;
      colour += ('00' + value.toString(16)).substr(-2);
    }
    return colour;
  }

//Returns the last segment of the given url.
// E.g. obtainLastSegment("connect/pilots") 
// returns "pilots"
export const obtainLastSegment = (url) => {
  return url.substr(url.lastIndexOf('/') + 1);
}

// Returns color for each kpi.
export const kpi_color = (kpi) => {
	let color;
	switch(kpi){
		case "CULTURE":
			color = "purple";
			break;
		case "NETWORKS":
			color = "gold";
			break;
		case "BIAS":
			color = "darkolivegreen";
			break;
		case "SAFETY":
			color = "orange";
			break;
		case "LEADERSHIP":
			color = "slategray";
			break;
		case "RECRUITING":
			color = "#53A8E2";
			break;
		case "PAY EQUITY":
			color = "lemonchiffon";
			break;
		case "LEADERSHIP & ACCOUNTABILITY":
			color = "plum";
			break;
		default:
			color = "#" + Math.random().toString(16).slice(2, 8).toUpperCase();
	}
	return color;
}