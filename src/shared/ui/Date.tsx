import transformDate from '../utils/transformData.utils';

type DateProps = {
  date: string;
}

const Date = ({date}: DateProps) => {
  return (
    <time
      className='text-sm text-txt-mid-contrast-light dark:text-txt-mid-contrast-dark'
      dateTime={date}
    >
      {transformDate(date)}
    </time>
);
}
 
export default Date;