import React from 'react';

const Loading = () => {
    return (
        <div className=' flex justify-center mt-8'>
            <div className=" w-14 h-14 border-[7px] border-dashed rounded-full  animate-spin border-blue-700"></div>
        </div>
    );
};

export default Loading;