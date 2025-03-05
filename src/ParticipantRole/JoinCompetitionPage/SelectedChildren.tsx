import React from 'react';


const SelectedChildren = () => {
  const children = [
    { id: 1, name: 'Johongir' },
    { id: 2, name: 'Alisher' },
    { id: 3, name: 'Nigora' }
  ];

  return (
    <div className="max-w-5xl mx-auto">
      <h3 className="text-sm font-medium mb-4">Selected Children</h3>
      <div className="space-y-2">
        {children.map((child) => (
         <div key={child.id} className=" pb-3">
         <div className="flex border-b pb-2 mb-3 items-center ">
           <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center text-white text-sm mr-2">
             U
           </div>
           <span className="text-gray-700 pl-1">{child.name}</span>
         </div>
         <div className="flex border p-2 rounded-3xl border-dashed justify-center">
           <button className="text-blue-500 hover:text-blue-600 text-sm">
             + Add Works
           </button>
         </div>
       </div>
       
        ))}
      </div>
    </div>
  );
};

export default SelectedChildren;