import React from 'react';
import sneaker from '../assets/sneakers/1.jpg'

export default function Drawer() {
  return (
    <>
      <div style={{ display: 'none' }} className='overlay'>
        <div className='drawer'>
          <div className='goodBlock'>
            <div>
              <h2 className='d-flex align-center justify-between'>Order Cart
                <svg className='cu-p' width='32' height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#DBDBDB" />
                  <path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" fill="#B5B5B5" />
                </svg> </h2>
            </div>
            <div className='goodsList'>
              <div className='cartItem d-flex align-center mb-20'>
                <img className='mr-20' width={70} height={70} src={sneaker} alt='snekers' />
                <div className='mr-20'>
                  <p className='mb-5'>Man's sneakers Nike Air Max 270</p>
                  <b>123 233 rub.</b>
                </div>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#DBDBDB" />
                  <path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" fill="#B5B5B5" />
                </svg>
              </div>
              <div className='cartItem d-flex align-center mb-20'>
                <img className='mr-20' width={70} height={70} src={sneaker} alt='snekers' />
                <div className='mr-20'>
                  <p className='mb-5'>Man's sneakers Nike Air Max 270</p>
                  <b>123 233 rub.</b>
                </div>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="0.5" y="0.5" width="31" height="31" rx="7.5" fill="white" stroke="#DBDBDB" />
                  <path d="M20.0799 18.6155L17.6311 16.1667L20.0798 13.718C21.0241 12.7738 19.5596 11.3093 18.6154 12.2536L16.1667 14.7023L13.7179 12.2535C12.7738 11.3095 11.3095 12.7738 12.2535 13.7179L14.7023 16.1667L12.2536 18.6154C11.3093 19.5596 12.7738 21.0241 13.718 20.0798L16.1667 17.6311L18.6155 20.0799C19.5597 21.0241 21.0241 19.5597 20.0799 18.6155Z" fill="#B5B5B5" />
                </svg>
              </div>
            </div>
          </div>
          <div className='items'>
            <ul className='cartTotalBlock'>
              <li className='d-flex'>
                <span>Total:</span>
                <div>
                </div>
                <b>12 903 rub.</b>
              </li>
              <li className='d-flex'>
                <span>Commondaty tax:</span>
                <div>
                </div>
                <b>1 003 rub.</b>
              </li>
            </ul>
            <button className='greenButton'>Order
              <svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 7H14.7143" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M8.71436 1L14.7144 7L8.71436 13" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
              </svg>

            </button>
          </div>
        </div>
      </div>
    </>
  );
}
