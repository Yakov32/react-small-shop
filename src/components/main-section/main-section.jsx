import React from 'react';
import { withRouter } from 'react-router-dom';
import studioBag from '../../assets/studio-bag.png';
import './main-section.styles.scss';

const MainSection = ({ history }) => {
   return (
      <div className='main-section-container'>
         <div className='main-section-middle'>
            <div className='ms-m-image'>
               <img src={studioBag} alt="studio-bag-img" />
            </div>
            
            <div className='ms-m-description'>
               <h2>Designed for fashion, for sport</h2>
               <p>
               Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
               Labore, corrupti. Enim quibusdam ea explicabo. Dicta 
               laboriosam asperiores expedita dignissimos animi, dolor doloribus 
               excepturi sequi explicabo dolorem reiciendis 
               consequuntur provident eveniet.
               </p>
               <button className='button is-bulma' id='shop-now' onClick={() => history.push('/product')}>
                  STUDIO BAG
               </button>
            </div>
         </div>
      </div>
   );
}

export default withRouter(MainSection);