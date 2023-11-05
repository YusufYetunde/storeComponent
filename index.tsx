import React from 'react';
import Sizes from './sizes';


const sizeData = [
  { size: 'XS', bust: '32', waist: '24', hips: '34' },
  { size: 'S', bust: '34', waist: '26', hips: '36' },
  { size: 'M', bust: '36', waist: '28', hips: '38' },
  { size: 'L', bust: '38', waist: '30', hips: '40' },
  { size: 'XL', bust: '40', waist: '32', hips: '42' },
  // Add more size data as needed
];

const Sizechart: React.FC = () => {
  return (
    <div className='mx-px my-32 px-20'>
      <Sizes data={sizeData} imageSrc="/size/model1.jpg"/>
    </div>
  );
};

export default Sizechart;
