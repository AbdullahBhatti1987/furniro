import React from 'react'
import Heading from './Heading'
import Card from './Card'

function OurProducts() {
  return (
    <div className='bg-white py-6'>
        <div className='w-10/12 mx-auto '>
        <div className='py-6'>
            <Heading text={"Our Products"} />
        </div>
        <div className='flex mx-auto gap-5 flex-wrap'>
            <Card title={"Dining"} newPrice={5000} oldPrice={7000} category={"Sofa and Chair"} src={"https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=io-T8oYjTlIA3w2Ah9tcLnnsdn-uf9FCbYL0IEJGVg97D2v0pdUGTrmTC~Wz2sfK44jEIV5f4SoP7iBdFR1kJz8FeDntd9HBZNykPh4nOrbyuLQcqG~yGm~ILH9IAlvKgiyY09zH8Nr6LzaVPleBYK2Mo7WeobKWny38yJnKQ8wbG1JKQihzyXVovvvKnhZR4AvQo6O38kwUveGfJeakOULR8-lBNisUuRVUQ9lc4TnfZbVsWz8lvdcJbVgRITz-GNCMnQWm115-NDtLJf4o6fQtAT4n8TACPo~eRWygfAws1~dZKaIFog-5cgWM5ex2Y9l9-EV2YTu4gZNbAe2irw__"}/>
            <Card title={"Dining"} newPrice={5000} oldPrice={7000} category={"Sofa and Chair"} src={"https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=io-T8oYjTlIA3w2Ah9tcLnnsdn-uf9FCbYL0IEJGVg97D2v0pdUGTrmTC~Wz2sfK44jEIV5f4SoP7iBdFR1kJz8FeDntd9HBZNykPh4nOrbyuLQcqG~yGm~ILH9IAlvKgiyY09zH8Nr6LzaVPleBYK2Mo7WeobKWny38yJnKQ8wbG1JKQihzyXVovvvKnhZR4AvQo6O38kwUveGfJeakOULR8-lBNisUuRVUQ9lc4TnfZbVsWz8lvdcJbVgRITz-GNCMnQWm115-NDtLJf4o6fQtAT4n8TACPo~eRWygfAws1~dZKaIFog-5cgWM5ex2Y9l9-EV2YTu4gZNbAe2irw__"}/>
            <Card title={"Dining"} newPrice={5000} oldPrice={7000} category={"Sofa and Chair"} src={"https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=io-T8oYjTlIA3w2Ah9tcLnnsdn-uf9FCbYL0IEJGVg97D2v0pdUGTrmTC~Wz2sfK44jEIV5f4SoP7iBdFR1kJz8FeDntd9HBZNykPh4nOrbyuLQcqG~yGm~ILH9IAlvKgiyY09zH8Nr6LzaVPleBYK2Mo7WeobKWny38yJnKQ8wbG1JKQihzyXVovvvKnhZR4AvQo6O38kwUveGfJeakOULR8-lBNisUuRVUQ9lc4TnfZbVsWz8lvdcJbVgRITz-GNCMnQWm115-NDtLJf4o6fQtAT4n8TACPo~eRWygfAws1~dZKaIFog-5cgWM5ex2Y9l9-EV2YTu4gZNbAe2irw__"}/>
            <Card title={"Dining"} newPrice={5000} oldPrice={7000} category={"Sofa and Chair"} src={"https://s3-alpha-sig.figma.com/img/4491/a0ea/43eebd52ea72d60650f31030ec4bf7e6?Expires=1730073600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=io-T8oYjTlIA3w2Ah9tcLnnsdn-uf9FCbYL0IEJGVg97D2v0pdUGTrmTC~Wz2sfK44jEIV5f4SoP7iBdFR1kJz8FeDntd9HBZNykPh4nOrbyuLQcqG~yGm~ILH9IAlvKgiyY09zH8Nr6LzaVPleBYK2Mo7WeobKWny38yJnKQ8wbG1JKQihzyXVovvvKnhZR4AvQo6O38kwUveGfJeakOULR8-lBNisUuRVUQ9lc4TnfZbVsWz8lvdcJbVgRITz-GNCMnQWm115-NDtLJf4o6fQtAT4n8TACPo~eRWygfAws1~dZKaIFog-5cgWM5ex2Y9l9-EV2YTu4gZNbAe2irw__"}/>
                 </div>
        </div>
        <div className='w-full mx-auto flex justify-center items-center py-12'>
          <button className='py-3 px-24 border-2 darkBorder darkFont font-semibold shadow-lg active:shadow-sm'>More</button>
          </div>
    </div>
  )
}

export default OurProducts