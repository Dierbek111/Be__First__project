import  { useState } from 'react'
import { X } from 'lucide-react';
import payme from   '../../assets/payme.svg'
import click from  '../../assets/click.svg'


const JoinCompetitionModal = () => {
    const [showPaymentModal, setShowPaymentModal] = useState(false);
  return (
    <div>
         <button 
              onClick={() => setShowPaymentModal(true)}
              className="px-6 py-2 bg-orange-400 text-white rounded-xl hover:bg-orange-500"
            >
              Next
            </button>
         {showPaymentModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
        onClick={() => setShowPaymentModal(false)}
        >
          <div className="bg-white p-6 rounded-lg w-96"
          onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-lg font-semibold">Select payment method</h2>
              <button 
                onClick={() => setShowPaymentModal(false)}
                className="text-gray-500 hover:text-gray-700"
              >
                <X size={20} />
              </button>
            </div>
            <div className="space-y-4">
              <button className="w-full p-3 flex justify-center border rounded-lg hover:bg-gray-50">
               <img className='h-6' src={payme} alt="payme" />
              </button>
              <button className="w-full p-3 flex justify-center border rounded-lg hover:bg-gray-50">
                <img className='h-6' src={click} alt='click'/>
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default JoinCompetitionModal