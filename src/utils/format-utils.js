import moment from "moment"

export function jsDateToSqlDate(date) {
	return moment(date).format('YYYY-MM-DD HH:mm:ss')
}