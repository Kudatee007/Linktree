import React from 'react'
import shareBtn from './img/shareBtn.svg'
import proPics from './img/Device=Web, State=Default.svg'
import './Linktree.css'

const Linktree = () => {
  return (
    <div className='LinkTree'>
        {/* slack username */}
        <h1 id='slack' className='turner'>turner</h1>

        {/* profile picture */}
    
        <img src={proPics} alt="" id='profile_img' className='profile'/>

        {/* share Btn  */}
        <img src={shareBtn} alt="" className='share'/>

        <h1 className='profName'>Annette Black</h1>

        {/* links */}

        <div className='links'>
            <a href="https://twitter.com/kudatee001" id='twitter'>
            Twitter Link
            </a>
            <a href="https://books.zuri.team" id='btn_zuri'>
            Zuri Team
            </a>
            <a href="http://books.zuri.team" id='books'>
            Zuri Books
            </a>
            <a href="https://books.zuri.team/" id='book_python'>
            Python Books
            </a>
            <a href="https://background.zuri.team" id='pitch'>
            Background Check for Coders
            </a>
            <a href="https://books.zuri.team/design-rules" id='book_design'>
            Design Books
            </a>
        </div>
    </div>
  )
}

export default Linktree