import React from 'react'
import Index from '../Index'
import PageIndex from '../PageIndex'

 const HomePage = () => {
    const navigate=PageIndex.useNavigate()
  return (
<Index.Box className="container">
    <Index.Box>
        <img alt='' src={Index.JPG.diceLogo}/>
    </Index.Box>
    <Index.Box className="dice-contain">
        <Index.Typography variant='h2' className='dice-game-text'>Dice Game</Index.Typography>
        <Index.Button variant='contained' className='play-not-btn' onClick={()=>navigate('/start-game')}>Play Now</Index.Button>
    </Index.Box>
</Index.Box>
  )
}
export default HomePage