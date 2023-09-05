import {AiOutlineLoading} from 'react-icons/ai'

const Loading = () => {
  return (
    <div className='flex justify-center items-center text-teal-600 text-[220px]'>
      <span className='animate-spin'>
      <AiOutlineLoading/>
      </span>
      
    </div>
  );
}
 
export default Loading;