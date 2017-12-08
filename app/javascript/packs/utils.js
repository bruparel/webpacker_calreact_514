import moment from 'moment';

export const formatDate = d => moment(d).format('MMMM Do YYYY, h:mm:ss a')
