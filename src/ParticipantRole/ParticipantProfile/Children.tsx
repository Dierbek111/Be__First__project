import React, { useState } from 'react'
import img from '../../assets/about.svg'
import AddChildrenModal from './ChildrenModal'

const Children = () => {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <div className="shadow p-6 bg-white rounded-lg">
    <h2 className="text-lg font-medium mb-6">Children</h2>
    
    <div className="grid grid-cols-2 gap-4 mb-6">
      <div className="p-2 bg-gray-100 rounded flex items-center gap-3">
        <img src={img} className="w-8 h-8 rounded-full" />
        <span>Alisher</span>
      </div>
      
      <div className="p-2 bg-gray-100 rounded flex items-center gap-3">
        <img src={img} className="w-8 h-8 rounded-full" />
        <span>Jehongir</span>
      </div>
    </div>

    <button onClick={() => setModalOpen(true)} className="px-4 py-2 bg-orange-400 text-white rounded-xl hover:bg-orange-500 transition-colors">
      Add new child
    </button>
      <AddChildrenModal isOpen={isModalOpen} onClose={() => setModalOpen(false)}/>
  </div>
  )
}

export default Children