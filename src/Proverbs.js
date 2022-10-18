import React from 'react';

const Proberbs = ()=>{
    const proverbs = ["이미끝나버린 일을 후회하기 보다는 하고 싶었던 일들을 하지못한 것을 후회하라.", "성공으로 가는 엘리베이터는 고장입니다. 당신은 계단을 이용해야만 합니다. 한계단 한계단씩", "좌절감으로 배움을 늦추지 마라.", "우선 무엇이 되고자 하는가를 자신에게 말하라 그리고 해야 할일을 하라", "피할 수 없으면 즐겨라.", '행복은 습관이다, 그것을 몸에 지니라', '인생에 뜻을 세우는데 있어 늦은 때라곤 없다'," 되찾을 수 없는게 세월이니 시시한 일에 시간을 낭비하지 말고 순간순간을 후회 없이 잘 살아야 한다."]
    const getRandom = (len)=>{
        return parseInt(Math.random() * len);
    }
    return (
        <div className='home'>
            {proverbs[getRandom(proverbs.length)]}
        </div>
    )
}

export default Proberbs;