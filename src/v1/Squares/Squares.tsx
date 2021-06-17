import './Squares.scss'

type Props = {
  frame: string[]
}

export const Squares = (props: Props) => {
  return (
    <div className='intro-img-frame-container'>
      {props.frame.map(() =>
        <p className='intro-img-frame'></p>
      )}
    </div>
  )
}