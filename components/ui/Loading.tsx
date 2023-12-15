
import {MoonLoader} from 'react-spinners'

interface LoadingProps{
  isLoading?:boolean
}

const Loading:React.FC<LoadingProps > = ({isLoading}) => {
  return (
    <div className='flex justify-center items-center '>
      <MoonLoader
      color='rgb(0, 145, 181)'
      loading={isLoading}
      aria-label='Loading spinner'
      data-testid='loader'
      />
    </div>
  )
}

export default Loading


