import './Squares.scss'

type Props = {
  frame: string[]
}

export const Squares = (props: Props) => {
  return (
    <div className='intro-img-frame-container'>
      {props.frame.map((_, ix) =>
        <p key={ix} className='intro-img-frame'></p>
      )}
    </div>
  )
}