import _ from 'lodash';

// List of viable KPIs.
export const KPIs = [
	"CULTURE", "NEWORKS", "BIAS", 
	"SAFETY", "LEADERSHIP", "RECRUITING", 
	"PAY EQUITY", "ACCOUNTABILITY"
]

// Give 6 hex digits color code given any string of characters
// so that strings of same characters are coded to same color - case sensitive.
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
	const lower_kpi = kpi.toLowerCase();
	switch(lower_kpi){
		case "culture":
			color = "purple";
			break;
		case "networks":
			color = "gold";
			break;
		case "bias":
			color = "darkolivegreen";
			break;
		case "safety":
			color = "orange";
			break;
		case "leadership":
			color = "slategray";
			break;
		case "recruiting":
			color = "#53A8E2";
			break;
		case "pay equity":
			color = "lemonchiffon";
			break;
		case "accountability":
			color = "plum";
			break;
		default:
			color = stringToColour(kpi);
	}
	return color;
}

// Returns color for each kpi.
export const topic_color = (topic) => {
	let color;
	const lower_topic = topic.toLowerCase();
	switch(topic){
		case "culture":
			color = "#E7EBFD";
			break;
		case "networks":
			color = "#DCEEC4";
			break;
		case "bias":
			color = "#C9E3F4";
			break;
		case "safety":
			color = "#F4D49F";
			break;
		case "leadership":
			color = "#F6F1B1";
			break;
		case "recruiting":
			color = "#D4F3EE";
			break;
		case "pay equity":
			color = "lemonchiffon";
			break;
		case "accountability":
			color = "plum";
			break;
		default:
			color = stringToColour(topic);
	}
	return color;
}

// randomly return one of KPIs.
export const kpi_random = () => {
	return _.sample(KPIs);
}