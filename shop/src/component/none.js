import React from 'react';


function none(props) {
    return (
        <div>
          {
            props.count >= 3
            ? <p>더 이상 상품이 없어요 ㅜ.ㅜ</p>
            : null
          }
        </div>
      )
}

export default none;