import React from 'react'

const Profile = () => {
  return (
    <div>
      <div className='left'>
        
      <div className='profile pic'>
        <div className='img'></div>
        <div>
          <h3>Иван Иван</h3>
          <h3></h3>
        </div>
        <div>
          <button>Изменить ФИО</button>
          <button>Изменить ФОТО</button>
        </div>
      </div>

      <div>
        <input type="text" name="" id="" />
        <input type="text" name="" id="" />
      </div>
      </div>

      <div className='right'>
        <div className="fav">
          <h2>Избранное:</h2>
          <ul>
            <li></li>
          </ul>
        </div>
      </div>
      
    </div>
  )
}

export default Profile