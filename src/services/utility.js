import moment from 'moment';

export const convertStrToDate = strDate => {
  let formattedDate = moment(strDate, 'YYYY-MM-DD HH:mm').toDate();
  formattedDate = moment(formattedDate).format('DD/MM/YYYY, HH:mm')
  return formattedDate
};
