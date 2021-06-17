import { useDarkMode } from '../utils/darkmode'
import './DarkMode.scss'

const Light = () => {

  const themeToggler = useDarkMode();

	return (
		<div className='light__wire-container'>
      <div className='light__wire'>

      </div>
      <div className='light__wire-base' onClick={() => themeToggler()}>

      </div>
		</div>
	)
}

export const DarkMode = () => {

  return (
    <div className='dark-mode-container'>
			<Light />
    </div>
  )
}